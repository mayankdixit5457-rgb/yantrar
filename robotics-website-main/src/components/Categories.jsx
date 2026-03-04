import React, { useState, useEffect } from "react";

import "./Categories.css";
import { useNavigate } from "react-router-dom";

import { databases } from "../lib/appwrite";
import { Query } from "appwrite";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const CATEGORIES_ID = import.meta.env.VITE_APPWRITE_CATEGORIES_ID;

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          CATEGORIES_ID
        );
        setCategories(response.documents);
      } catch (error) {
        console.error("Failed to fetch categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (slug) => {
    navigate(`/category/${slug}`);
  };

  if (loading) return <div className="loading">Loading Categories...</div>;


  return (
    <section id="shop" className="categories">

      <h2>Shop by Category</h2>

      <div className="categories-grid">

        {categories.map((cat, index) => (

          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(cat.slug)}

          >

            <img
              src={cat.image}
              alt={cat.name}
              className="card-image"
            />

            <h3>{cat.name}</h3>

          </div>

        ))}

      </div>

    </section>
  );
};

export default Categories;