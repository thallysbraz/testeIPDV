import { getRepository } from "typeorm";

import Departamento from "../models/Departamento";
import AppError from "../errors/AppError";

interface Request {
    descricao: string;
    centroDeCustos: string;
}

class CreateDepartamentoService {
    public async execute({
        descricao,
        centroDeCustos,
    }: Request): Promise<Departamento> {
        const departamentoRepository = getRepository(Departamento);

        const checkCargoExists = await departamentoRepository.findOne({
            where: { descricao },
        });

        if (checkCargoExists) {
            throw new AppError("Departamento ja cadastrado.");
        }

        const departamento = departamentoRepository.create({
            descricao,
            centroDeCustos,
        });

        await departamentoRepository.save(departamento);

        return departamento;
    }
}

export default CreateDepartamentoService;
