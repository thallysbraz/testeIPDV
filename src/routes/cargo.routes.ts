import { Router } from "express";

import CreateCargoService from "../services/CreateCargoService";

const cargosRouter = Router();

cargosRouter.post("/", async (request, response) => {
    try {
        const { descricao } = request.body;

        const createCargo = new CreateCargoService();

        const cargo = await createCargo.execute({ descricao });

        return response.json(cargo);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default cargosRouter;
