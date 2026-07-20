import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });




import mongoose from "mongoose";
import connectDB from "../lib/mongodb.js";

console.log("🚀 Migration Started");

const updateExt = (value) => {
  if (typeof value !== "string") return value;
  return value.replace(/\.(jpg|jpeg|png)$/i, ".webp");
};

await connectDB();

const db = mongoose.connection.db;

// PRODUCTS
const products = db.collection("products");
const productDocs = await products.find({}).toArray();

let updatedProducts = 0;
let updatedImages = 0;

for (const doc of productDocs) {
  if (!Array.isArray(doc.images)) continue;

  const newImages = doc.images.map((img) => {
    const updated = updateExt(img);
    if (updated !== img) updatedImages++;
    return updated;
  });

  if (JSON.stringify(newImages) !== JSON.stringify(doc.images)) {
    await products.updateOne(
      { _id: doc._id },
      {
        $set: {
          images: newImages,
        },
      }
    );

    updatedProducts++;
  }
}

// CATEGORIES
const categories = db.collection("categories");
const categoryDocs = await categories.find({}).toArray();

let updatedCategories = 0;

for (const doc of categoryDocs) {
  if (!doc.image) continue;

  const updated = updateExt(doc.image);

  if (updated !== doc.image) {
    await categories.updateOne(
      { _id: doc._id },
      {
        $set: {
          image: updated,
        },
      }
    );

    updatedCategories++;
  }
}

console.log("\n===============");
console.log("DONE");
console.log("===============");
console.log("Products Updated :", updatedProducts);
console.log("Categories Updated :", updatedCategories);
console.log("Image Paths Updated :", updatedImages);

process.exit(0);