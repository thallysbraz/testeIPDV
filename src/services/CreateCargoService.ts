import { getRepository } from "typeorm";

import Cargo from "../models/Cargo";
import AppError from "../errors/AppError";

interface Request {
    descricao: string;
}

class CreateCargoService {
    public async execute({ descricao }: Request): Promise<Cargo> {
        const cargoRepository = getRepository(Cargo);

        const checkCargoExists = await cargoRepository.findOne({
            where: { descricao },
        });

        if (checkCargoExists) {
            throw new AppError("Cargo ja cadastrado.");
        }

        const cargo = cargoRepository.create({ descricao });

        await cargoRepository.save(cargo);

        return cargo;
    }
}

export default CreateCargoService;
