require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

// Проверяем наличие необходимых переменных окружения
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error(
    "Ошибка: Не найдены переменные окружения NEXT_PUBLIC_SUPABASE_URL и/или NEXT_PUBLIC_SUPABASE_ANON_KEY"
  );
  process.exit(1);
}

// Инициализация Supabase клиента
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Функция для экранирования XML
function escapeXml(unsafe) {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

// Функция для удаления HTML
function stripHtml(html) {
  if (!html) return "";
  return html
    .replace(/<[^>]+>/g, "") // Удаляем HTML-теги
    .replace(/&nbsp;/g, " ") // Заменяем неразрывные пробелы
    .replace(/\s+/g, " ") // Заменяем множественные пробелы одним
    .trim(); // Убираем пробелы в начале и конце
}

// Функция для форматирования URL изображения
function formatImageUrl(url) {
  if (!url) return "";
  try {
    const imageUrl = new URL(url);
    // Очищаем URL от специальных символов
    return imageUrl
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  } catch (e) {
    console.warn("Некорректный URL изображения:", url);
    return "";
  }
}

async function generateRss() {
  try {
    console.log("Начинаем генерацию RSS...");

    // Получаем статьи из Supabase
    const { data: articles, error } = await supabase
      .from("articles")
      .select("*")
      .order("published_at", { ascending: false });

    if (error) {
      console.error("Ошибка при получении статей:", error);
      throw error;
    }

    if (!articles || articles.length === 0) {
      console.log("Предупреждение: Статьи не найдены");
    }

    console.log(`Найдено ${articles?.length || 0} статей`);

    // Формируем XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE rss PUBLIC "-//Netscape Communications//DTD RSS 2.0//EN" "http://my.netscape.com/publish/formats/rss-2.0.dtd">
<rss version="2.0">
  <channel>
    <title>Блог Neuropolis.ai</title>
    <link>https://neuropolis.ai/</link>
    <description>Статьи о применении ИИ в бизнесе и кейсы автоматизации</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Neuropolis RSS Generator</generator>
    ${
      articles
        ? articles
            .map((article) => {
              const articleUrl = escapeXml(
                `https://neuropolis.ai/blog/${article.slug}`
              );
              const pubDate = new Date(article.published_at).toUTCString();
              const imageUrl = formatImageUrl(article.image_url);

              return `
    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${articleUrl}</link>
      <guid isPermaLink="true">${articleUrl}</guid>
      <description>${escapeXml(article.description || "")}</description>
      <author>info@neuropolis.ai (Neuropolis.ai)</author>
      <category>Искусственный интеллект</category>
      <pubDate>${pubDate}</pubDate>${
                imageUrl
                  ? `
      <enclosure url="${imageUrl}" type="image/jpeg" length="0" />`
                  : ""
              }
    </item>`;
            })
            .join("\n")
        : ""
    }
  </channel>
</rss>`;

    // Создаем директорию public, если её нет
    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir);
    }

    // Сохраняем файл в UTF-8
    const rssPath = path.join(publicDir, "rss.xml");
    fs.writeFileSync(rssPath, xml, "utf8");
    console.log("RSS файл успешно сгенерирован:", rssPath);
  } catch (error) {
    console.error("Ошибка при генерации RSS:", error);
    process.exit(1);
  }
}

// Запускаем генерацию
generateRss();
