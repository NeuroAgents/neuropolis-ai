"use client";

import { useTheme } from "@/context/ThemeContext";
import { getRecentArticles } from "@/lib/blogApi";
import { Article } from "@/lib/supabase";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import Container from "../ui/Container";
import BlogCard from "../BlogCard";

const Blog = () => {
  const { isDark } = useTheme();
  const [blogPosts, setBlogPosts] = useState<Article[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getRecentArticles(3);
      setBlogPosts(posts);
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-20 bg-white dark:bg-black">
      <Container>
        <div className="text-center mb-16">
          <div
            className={`inline-block px-4 py-1 rounded-full text-sm mb-4 switch-box ${
              !isDark && "light-switch-box"
            }`}
          >
            Блог
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold dark:text-white text-black mb-4">
            Последние статьи из нашего блога
          </h2>
          <p className="dark:text-[#919191] text-gray-600 max-w-2xl mx-auto max-[425px]:text-[14px]">
            Будьте в курсе последних трендов, советов и инноваций в области ИИ и
            автоматизации.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link
            href="/blog"
            className={`flex items-center gap-2 px-6 py-3 rounded-[10px] transition-colors ${
              isDark
                ? "border border-[#262626] text-white hover:bg-white/10"
                : "border border-gray-300 text-gray-800 hover:bg-gray-100"
            }`}
          >
            Перейти в Блог
            <BsArrowRight />
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
