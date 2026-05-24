import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import blogIndex from "@/data/blogIndex";
import { getBlogBySlug } from "@/data/blogLoader";

import "./article.css";

function renderArticleContent(content) {
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const elements = [];
  let listBuffer = [];
  let faqMode = false;

  const flushList = () => {
    if (listBuffer.length > 0) {
      elements.push(
        <ul
          className="article-list"
          key={`list-${elements.length}`}
        >
          {listBuffer.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      );

      listBuffer = [];
    }
  };

  lines.forEach((line, index) => {
    /* H2 */

    if (line.startsWith("## ")) {
      flushList();

      faqMode = line.includes(
        "Frequently Asked Questions"
      );

      elements.push(
        <section
          className="article-section"
          key={`section-${index}`}
        >
          <h2>{line.replace("## ", "")}</h2>
        </section>
      );

      return;
    }

    /* H3 */

    if (line.startsWith("### ")) {
      flushList();

      elements.push(
        <h3
          className={
            faqMode
              ? "article-faq-question"
              : "article-subheading"
          }
          key={`h3-${index}`}
        >
          {line.replace("### ", "")}
        </h3>
      );

      return;
    }

    /* QUOTE */

    if (line.startsWith("> ")) {
      flushList();

      elements.push(
        <blockquote
          className="article-quote"
          key={`quote-${index}`}
        >
          {line.replace("> ", "")}
        </blockquote>
      );

      return;
    }

    /* CALLOUT */

    if (line.startsWith("! ")) {
      flushList();

      elements.push(
        <div
          className="article-callout"
          key={`callout-${index}`}
        >
          {line.replace("! ", "")}
        </div>
      );

      return;
    }

    /* BULLETS */

    if (line.startsWith("- ")) {
      listBuffer.push(line.replace("- ", ""));
      return;
    }

    /* NORMAL PARAGRAPHS */

    flushList();

    elements.push(
      <p
        className={
          faqMode
            ? "article-faq-answer"
            : index < 5
            ? "article-intro-paragraph"
            : "article-paragraph"
        }
        key={`p-${index}`}
      >
        {line}
      </p>
    );
  });

  flushList();

  return elements;
}

export default async function ArticlePage({
  params,
}) {
  const article = await getBlogBySlug(
    params.slug
  );

  if (!article) {
    notFound();
  }

  const relatedBlogs = blogIndex
    .filter(
      (blog) =>
        blog.id !== article.id &&
        blog.category === article.category
    )
    .slice(0, 3);

  return (
    <div className="article-page">

      {/* HERO */}

      <section className="article-hero">
        <div className="article-overlay"></div>

        <div className="article-hero-layout">

          <div className="article-hero-content">
            <div className="article-category">
              {article.category}
            </div>

            <h1>{article.title}</h1>

            <p className="article-subtitle">
              {article.excerpt}
            </p>

            <div className="article-meta">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="article-hero-image-wrap">
            <Image
              src={article.image}
              alt={article.title}
              width={700}
              height={500}
              priority
              className="article-hero-side-image"
            />
          </div>

        </div>
      </section>

      {/* CONTENT */}

      <section className="article-content-section">
        <div className="article-container">

          <div className="article-highlight-box">
            <h3>Key Insight</h3>

            <p>
              Drone technology is transforming
              autonomous aviation, surveillance,
              industrial inspection, mapping,
              agriculture, and next-generation
              aerial intelligence systems.
            </p>
          </div>

          <div className="article-content">
            {renderArticleContent(
              article.content
            )}
          </div>

        </div>
      </section>

      {/* RELATED */}

      <section className="related-section">
        <div className="related-heading">
          <span>RELATED ARTICLES</span>
          <h2>You May Also Like</h2>
        </div>

        <div className="related-grid">

          {relatedBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="related-card"
            >
              <div className="related-image-wrap">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className="related-image"
                />
              </div>

              <div className="related-content">
                <small>{blog.category}</small>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
              </div>
            </Link>
          ))}

        </div>
      </section>

    </div>
  );
}