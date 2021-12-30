import { Router } from "express";

// Controllers
import productController from '../controllers/products.controllers'

// Middlewares
import { authJwt } from '../middlewares'

const router = Router()

router.post("/", [authJwt.verifyToken, authJwt.moderatorAuth, authJwt.adminAuth], productController.createProduct) // Admin
router.get("/", productController.getProcuts) 
router.get("/:id", productController.getOneProduct) 
router.put("/:id", [authJwt.verifyToken, authJwt.moderatorAuth, authJwt.adminAuth], productController.updateProduct) // Moderator and Admin
router.delete("/:id", [authJwt.verifyToken, authJwt.adminAuth ], productController.deleteProduct) // Admin

export default router;