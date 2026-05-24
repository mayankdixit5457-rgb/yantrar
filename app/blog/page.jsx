"use client";

import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import blogs from "@/data/blogIndex";

import "./blog.css";

export default function BlogPage() {
  const router = useRouter();

  const blogGridRef = useRef(null);
  const categoriesRef = useRef(null);

  const [activeCategory, setActiveCategory] =
    useState("All");

  /* ========================= */
  /* CATEGORIES */
  /* ========================= */

  const categories = [
    "All",
    "AI & Automation",
    "Drone Technology",
    "Agriculture",
    "Surveillance",
    "Public Safety",
    "Industrial Inspections",
    "Commercial Guides",
    "FPV Systems",
  ];

  const categoryImages = {
    "All": "/blog/all.png",
    "AI & Automation": "/blog/automation.png",
    "Drone Technology": "/blog/lidar.png",
    "Agriculture": "/blog/agri-drones.png",
    "Surveillance": "/blog/surveillance.png",
    "Public Safety": "/blog/rescue.png",
    "Industrial Inspections": "/blog/inspection.png",
    "Commercial Guides": "/blog/guide.png",
    "FPV Systems": "/blog/fpvsystems.png",
  };

  /* ========================= */
  /* SORTED BLOGS */
  /* ========================= */

  const sortedBlogs = [...blogs].sort(
    (a, b) =>
      new Date(b.publishedAt) -
      new Date(a.publishedAt)
  );

  /* ========================= */
  /* FEATURED */
  /* ========================= */

  const featuredPost =
    blogs.find((blog) => blog.featured) ||
    sortedBlogs[0];

  /* ========================= */
  /* TRENDING */
  /* ========================= */

  const trendingPosts =
    blogs.filter((blog) => blog.trending);

  /* ========================= */
  /* FILTER */
  /* ========================= */


  const filteredBlogs =
    activeCategory === "All"
      ? sortedBlogs
      : sortedBlogs.filter(
          (blog) =>
            blog.category === activeCategory
        );


  const latestBlogs = sortedBlogs.slice(0, 6);      

  const handleCategoryClick = (category) => {
    setActiveCategory(category);

    setTimeout(() => {
      blogGridRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="blog-page">

      {/* HERO */}

      <section className="blog-hero">

        <div className="blog-hero-bg"></div>
        <div className="blog-overlay"></div>

        <div className="blog-hero-content">

          <span className="blog-tag">
            DRONE INSIGHTS & INNOVATION
          </span>

          <h1>
            The Future of <span>Drone Technology</span>
          </h1>

          <p>
            Explore autonomous UAV systems,
            industrial drone inspections,
            surveillance technology,
            smart agriculture,
            commercial aviation innovation,
            and next-generation drone ecosystems.
          </p>

          <div className="blog-hero-buttons">

            <button
              className="secondary-btn"
              onClick={() =>
                categoriesRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Explore Categories
            </button>

            <button
              className="primary-btn"
              onClick={() =>
                blogGridRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                })
              }
            >
              Latest Articles
            </button>

          </div>

        </div>

      </section>

      {/* FEATURED */}

      <section className="featured-section">

        <div className="section-heading">
          <span>FEATURED ARTICLE</span>
          <h2>Editor's Pick</h2>
        </div>

        <div className="featured-card">

          <div
            className="featured-image"
            style={{
              backgroundImage:
                `url(${featuredPost.image})`,
            }}
          ></div>

          <div className="featured-content">

            <div className="featured-badge">
              {featuredPost.category}
            </div>

            <h3>{featuredPost.title}</h3>

            <p>{featuredPost.excerpt}</p>

            <div className="featured-meta">
              <span>{featuredPost.readTime}</span>
              <span>{featuredPost.date}</span>
            </div>

            <button
              className="primary-btn"
              onClick={() =>
                router.push(
                  `/blog/${featuredPost.slug}`
                )
              }
            >
              Read Full Article
            </button>

          </div>

        </div>

      </section>

      {/* CATEGORIES */}

      <section
        className="categories-section"
        ref={categoriesRef}
      >

        <div className="section-heading center">
          <span>CATEGORIES</span>
          <h2>Explore Drone Knowledge</h2>
        </div>

        <div className="categories-grid">

          {categories.map((cat, i) => (
            <div
              key={i}
              className={`category-card ${
                activeCategory === cat
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                handleCategoryClick(cat)
              }
            >

              <div
                className="category-card-bg"
                style={{
                  backgroundImage:
                    `url(${categoryImages[cat]})`,
                }}
              ></div>

              <div className="category-overlay"></div>

              <h3>{cat}</h3>

            </div>
          ))}

        </div>

      </section>

      {/* LATEST */}

      <section
        className="blog-grid-section"
        ref={blogGridRef}
      >

        <div className="section-heading">
          <span>LATEST ARTICLES</span>

          <h2>
            {activeCategory === "All"
              ? "Latest Drone Intelligence"
              : activeCategory}
          </h2>
        </div>

        <div className="blog-grid">

          {(activeCategory === "All"
            ? latestBlogs
            : filteredBlogs
          ).map((post) => (
            <div
              key={post.id}
              className="blog-card"
            >

              <div
                className="blog-card-image"
                style={{
                  backgroundImage:
                    `url(${post.image})`,
                }}
              ></div>

              <div className="blog-card-content">

                <div className="blog-card-meta">
                  <span>{post.category}</span>
                  <small>{post.readTime}</small>
                </div>

                <h3>{post.title}</h3>

                <p>{post.excerpt}</p>

                <button
                  onClick={() =>
                    router.push(
                      `/blog/${post.slug}`
                    )
                  }
                >
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* TRENDING */}

      <section className="trending-section">

        <div className="trending-content">

          <div>
            <span>TRENDING TOPICS</span>

            <h2>
              Most Read Drone Topics
            </h2>

            <p>
              Discover trending innovations in
              AI drones, surveillance systems,
              industrial UAV operations,
              precision agriculture,
              and autonomous aviation.
            </p>
          </div>

          <div className="trending-list">

            {trendingPosts.map((item) => (
              <div
                key={item.id}
                className="trending-item"
                onClick={() =>
                  router.push(
                    `/blog/${item.slug}`
                  )
                }
              >
                <span>{item.title}</span>
                <b>↗</b>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* NEWSLETTER */}

      <section className="newsletter-section">

        <span>STAY UPDATED</span>

        <h2>
          Subscribe for Future Drone Innovations
        </h2>

        <p>
          Get updates on enterprise UAV systems,
          drone automation,
          aerial intelligence,
          and next-generation aviation technology.
        </p>

        <div className="newsletter-box">
          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe Now
          </button>
        </div>

      </section>

    </div>
  );
}