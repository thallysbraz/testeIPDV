import { getRepository } from "typeorm";

import CentroDeCustos from "../models/CentroDeCustos";
import AppError from "../errors/AppError";

interface Request {
    descricao: string;
}

class CreateCentroDeCustosService {
    public async execute({ descricao }: Request): Promise<CentroDeCustos> {
        const centroDeCustosRepository = getRepository(CentroDeCustos);

        const checkCargoExists = await centroDeCustosRepository.findOne({
            where: { descricao },
        });

        if (checkCargoExists) {
            throw new AppError("Centro de Custos ja cadastrado.");
        }

        const centroDeCustos = centroDeCustosRepository.create({ descricao });

        await centroDeCustosRepository.save(centroDeCustos);

        return centroDeCustos;
    }
}

export default CreateCentroDeCustosService;
