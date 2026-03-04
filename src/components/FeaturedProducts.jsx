import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useUser } from "../lib/context/user";
import { databases } from "../lib/appwrite";
import { Query } from "appwrite";
import "./FeaturedProducts.css";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PRODUCTS_ID = import.meta.env.VITE_APPWRITE_PRODUCTS_ID;


function FeaturedProducts() {
  const navigate = useNavigate();
  const { addToCart, clearCart } = useContext(CartContext);
  const { current: user } = useUser();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          PRODUCTS_ID,
          [Query.equal("featured", true)]
        );
        setProducts(response.documents);
      } catch (error) {
        console.error("Failed to fetch featured products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeatured();
  }, []);


  const openProduct = (product) => {
    navigate(`/product/${product.slug}`);
  };

  // Buy Now logic
  const handleBuyNow = (product, e) => {
    e.stopPropagation();
    if (!user) {
      navigate("/login");
      return;
    }
    clearCart();
    addToCart(product);
    navigate("/checkout");
  };


  // Add to Cart logic
  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart(product);
  };

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




  if (loading) return <section className="featured"><h2>Loading Featured Products...</h2></section>;

  return (

    <section className="featured">

      <h2>Featured Products</h2>

      <div className="products-grid">

        {products.map((product) => (


          <div
            key={product.$id}

            className="product-card"
            onClick={() => openProduct(product)}
          >

            <img
              src={getImageUrl(product.images)}
              alt={product.name}
            />


            <h3>{product.name}</h3>

            <p className="price">₹{product.price}</p>

            <div className="product-buttons">

              <button
                className="buy-btn"
                onClick={(e) => handleBuyNow(product, e)}
              >
                Buy Now
              </button>

              <button
                className="cart-btn"
                onClick={(e) => handleAddToCart(product, e)}
              >
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;