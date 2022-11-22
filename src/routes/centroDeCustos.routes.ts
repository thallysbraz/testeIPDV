import { Router } from "express";

import CreateCentroDeCustosService from "../services/CreateCentroDeCustosService";

const centroDeCustosRouter = Router();

centroDeCustosRouter.post("/", async (request, response) => {
    try {
        const { descricao } = request.body;

        const createCentroDeCustos = new CreateCentroDeCustosService();

        const centroDeCustos = await createCentroDeCustos.execute({
            descricao,
        });

        return response.json(centroDeCustos);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default centroDeCustosRouter;
