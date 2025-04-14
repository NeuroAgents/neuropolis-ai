// Функция для генерации критического CSS для первого экрана
export function generateCriticalCss() {
  return `
    /* Критический CSS для быстрой загрузки первого экрана */
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;
      background-color: var(--background);
      color: var(--foreground);
    }
    
    /* Базовые стили для темного и светлого режимов */
    :root {
      --background: #ffffff;
      --foreground: #050505;
      --text-primary: #111111;
      --text-secondary: #555555;
      --card-bg: #f8f8f8;
      --border-color: #e0e0e0;
      --shadow-color: rgba(0, 0, 0, 0.1);
    }
    
    [data-theme='dark'] {
      --background: #050505;
      --foreground: #ffffff;
      --text-primary: #f2f2f2;
      --text-secondary: #919191;
      --card-bg: #101010;
      --border-color: #262626;
      --shadow-color: rgba(0, 0, 0, 0.2);
    }
    
    /* Предотвращение мерцания при загрузке */
    html.no-transition * {
      transition: none !important;
    }
    
    /* Стили для плавного перехода между темами */
    body, html {
      transition: background-color 0.3s ease, color 0.3s ease;
    }
  `;
}
