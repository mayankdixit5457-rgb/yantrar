import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useUser } from "../lib/context/user";
import { databases } from "../lib/appwrite";
import { Query } from "appwrite";
import "./ProductPage.css";

const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const PRODUCTS_ID = import.meta.env.VITE_APPWRITE_PRODUCTS_ID;

const ProductPage = () => {
  const { addToCart, clearCart } = useContext(CartContext);
  const { current: user } = useUser();
  const { slug } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeImage, setActiveImage] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await databases.listDocuments(
          DATABASE_ID,
          PRODUCTS_ID,
          [Query.equal("slug", slug)]
        );

        if (response.documents.length > 0) {
          const fetchedProduct = response.documents[0];
          setProduct(fetchedProduct);
          setActiveImage(getImageUrl(fetchedProduct.images, 0));


          const relatedResponse = await databases.listDocuments(
            DATABASE_ID,
            PRODUCTS_ID,
            [
              Query.equal("category", fetchedProduct.category),
              Query.notEqual("slug", slug),
              Query.limit(4)
            ]
          );
          setRelatedProducts(relatedResponse.documents);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [slug]);

  const getImageUrl = (imgData, index = 0) => {
    if (!imgData) return "";
    let processed = imgData;
    
    // If user accidentally entered a string that looks like an array: ["url1", "url2"]
    if (typeof imgData === 'string' && imgData.startsWith('[')) {
      try {
        const parsed = JSON.parse(imgData.replace(/'/g, '"'));
        processed = parsed;
      } catch (e) {
        // Fallback: manual split if JSON parse fails
        processed = imgData.replace(/[\[\]"']/g, "").split(',').map(s => s.trim());
      }
    }

    const url = Array.isArray(processed) ? processed[index] : processed;
    return typeof url === 'string' ? url.replace(/[\[\]"']/g, "").trim() : "";
  };




  if (loading) return <section className="product-page"><h2>Loading Product...</h2></section>;


  if (!product) {
    return (
      <section className="product-page">
        <h2>Product not found</h2>
      </section>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    clearCart();
    addToCart(product);
    navigate("/checkout");
  };

  


  const categoryTitle = product.category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <section className="product-page">

      {/* Breadcrumb */}
      <div className="breadcrumb">

        <Link to="/">Home</Link>

        <span>›</span>

        <Link to={`/category/${product.category}`}>
          {categoryTitle}
        </Link>

        <span>›</span>

        <span className="active">{product.name}</span>

      </div>

      {/* Product Top Section */}

      <div className="product-layout">

        {/* Images */}

        <div className="product-images">

          <img
            src={activeImage}
            alt={product.name}
            className="main-image"
          />



          {product.images && (
            <div className="thumb-row">

              {product.images.map((img,i)=>(
                <img
                  key={i}
                  src={getImageUrl(img)}
                  onClick={()=>setActiveImage(getImageUrl(img))}
                  className={
                    activeImage === getImageUrl(img)
                    ? "thumb active"
                    : "thumb"
                  }
                />
              ))}

            </div>
          )}


        </div>

        {/* Product Info */}

        <div className="product-info">

          <h1>{product.name}</h1>

          <h2 className="price">₹{product.price}</h2>

          <p className="short-desc">
            {product.shortDescription || product.description}
          </p>

          <div className="product-buttons">

            <button
              className="btn-outline"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>

            <button
              className="btn-primary"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>

          </div>

          {product.specs && (

            <div className="specs">

              <h3>Specifications</h3>

              <ul>
                {product.specs.map((spec,i)=>(
                  <li key={i}>{spec}</li>
                ))}
              </ul>

            </div>

          )}

        </div>

      </div>

      {/* Description */}

      <section className="description">

        <h2>Product Description</h2>

        <p>{product.description}</p>

      </section>

      {/* Related Products */}

      <section className="related">

        <h2>Related Products</h2>

        <div className="product-grid">

          {relatedProducts.map(item => (

            <div
              key={item.$id}

              className="product-card"
              onClick={()=>navigate(`/product/${item.slug}`)}
            >

              <img
                src={item.images ? item.images[0] : item.image}
              />

              <h3>{item.name}</h3>

              <p className="price">₹{item.price}</p>

            </div>

          ))}

        </div>

      </section>

    </section>

  );
};

export default ProductPage;