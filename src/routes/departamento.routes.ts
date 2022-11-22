import { Router } from "express";
import { getCustomRepository } from "typeorm";
import DepartamentoRepository from "../repositories/DepartamentoRepository";
import CreateDepartamentoService from "../services/CreateDepartamentoService";

const departamentosRouter = Router();

departamentosRouter.post("/", async (request, response) => {
    try {
        const { descricao, centroDeCustos } = request.body;

        const createDepartamento = new CreateDepartamentoService();

        const departamento = await createDepartamento.execute({
            descricao,
            centroDeCustos,
        });

        return response.json(departamento);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

departamentosRouter.get("/", async (request, response) => {
    const departamentoRepository = getCustomRepository(DepartamentoRepository);
    const { centroDeCustos } = request.query;

    const departamento = centroDeCustos
        ? await departamentoRepository.getByDepartamento(centroDeCustos)
        : await departamentoRepository.find();

    return response.json(departamento);
});

export default departamentosRouter;
