import express from "express"
import { createProduct, getAllProducts } from "../controllers/productController.js"

const router = express.Router()

router.get("/", getAllProducts)
    // GET ALL PRODUCT

router.post("/", createProduct )
    // CREATE A PRODUCT


export default router