import { Router } from "express";

// Controllers
import productController from '../controllers/products.controllers'

const router = Router()

router.post("/", productController.createProduct)
router.get("/", productController.getProcuts)
router.get("/:id", productController.getOneProduct)
router.put("/:id", productController.updateProduct)
router.delete("/:id", productController.deleteProduct)

export default router;