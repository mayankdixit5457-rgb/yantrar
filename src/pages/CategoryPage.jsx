import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useParams, useNavigate, Link } from "react-router-dom";
import { databases } from "../lib/appwrite";
import { Query } from "appwrite";


const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PRODUCTS_ID = import.meta.env.VITE_APPWRITE_PRODUCTS_ID;


const CategoryPage = () => {

  const { name } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          PRODUCTS_ID,
          [
            Query.equal("category", name)
          ]
        );
        setProducts(response.documents);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryProducts();
  }, [name]);


  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
  };

  const buyNow = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    navigate("/checkout"); // optional for later checkout page
  };

  const openProduct = (product) => {
    navigate(`/product/${product.slug}`);
  };

  const categoryTitle = name

    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const getImageUrl = (imgData, index = 0) => {
    if (!imgData) return "";
    let processed = imgData;
    
    if (typeof imgData === 'string' && imgData.startsWith('[')) {
      try {
        const parsed = JSON.parse(imgData.replace(/'/g, '"'));
        processed = parsed;
      } catch (e) {
        processed = imgData.replace(/[\[\]"']/g, "").split(',').map(s => s.trim());
      }
    }

    const url = Array.isArray(processed) ? processed[index] : processed;
    return typeof url === 'string' ? url.replace(/[\[\]"']/g, "").trim() : "";
  };



  if (loading) return <div style={{ padding: "100px", color: "white", textAlign: "center" }}>Loading Products...</div>;


  return (

    <section style={{ padding: "80px", color: "white" }}>

      {/* Breadcrumb */}
      <div
        style={{
          marginBottom: "20px",
          fontSize: "14px",
          color: "#aaa"
        }}
      >

        <Link
          to="/"
          style={{ color: "#aaa", textDecoration: "none" }}
        >
          Home
        </Link>

        <span style={{ margin: "0 10px" }}>›</span>

        <span style={{ color: "#fff" }}>
          {categoryTitle}
        </span>

      </div>

      <h1 style={{ marginBottom: "40px" }}>
        Category: {categoryTitle}
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "30px"
        }}
      >

        {products.map((product) => (


          <div
            key={product.$id}

            onClick={() => openProduct(product)}
            style={{
              background: "#111",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "center",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >

            {/* IMAGE */}
            <img
              src={getImageUrl(product.images)}
              alt={product.name}

              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "8px"
              }}
            />

            {/* NAME */}
            <h3 style={{ marginTop: "15px" }}>
              {product.name}
            </h3>

            {/* PRICE */}
            <p style={{ color: "#f5c518", marginTop: "5px" }}>
              ₹{product.price}
            </p>

            {/* BUTTONS */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "10px",
                marginTop: "15px"
              }}
            >

              <button
                onClick={(e) => handleAddToCart(product, e)}
                style={{
                  padding: "10px 15px",
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Add to Cart
              </button>

              <button
                onClick={(e) => buyNow(product, e)}
                style={{
                  padding: "10px 15px",
                  background: "#f5c518",
                  border: "none",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Buy Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default CategoryPage;