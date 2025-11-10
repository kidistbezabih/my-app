import { Request, Response, Router } from "express";
import { Product } from "../models/Product.js";

const productsRouter = Router();

// GET /api/v1/products - Get all products
productsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const products = await Product.find({ isActive: true })
      .select(
        "slug name tagline description customerCount marketPosition order"
      )
      .sort({ order: 1 });

    res.status(200).json({
      status: 200,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error: any) {
    console.error("Error fetching products:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});

// GET /api/v1/products/:slug - Get single product by slug
productsRouter.get("/:slug", async (req: Request, res: Response) => {
  try {
    const { slug } = req.params;

    const product = await Product.findOne({ slug, isActive: true });

    if (!product) {
      return res.status(404).json({
        status: 404,
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: 200,
      message: "Product retrieved successfully",
      data: product,
    });
  } catch (error: any) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      status: 500,
      message: "Failed to fetch product",
      error: error.message,
    });
  }
});

export default productsRouter;
