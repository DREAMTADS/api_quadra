import express from "express";
import QuadrasController from '../controllers/quadrasController.js';

const router = express.Router();

router
    .get('/quadras', QuadrasController.listarQuadras)
    .get('/quadras/:id', QuadrasController.listarQuadraPorId)
    .post('/quadras', QuadrasController.cadastrarQuadra)

export default router;