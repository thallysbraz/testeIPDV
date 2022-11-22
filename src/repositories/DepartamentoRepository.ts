import { EntityRepository, Repository } from "typeorm";

import Departamento from "../models/Departamento";

@EntityRepository(Departamento)
class DepartamentoRepository extends Repository<Departamento> {
    public async getByDepartamento(
        centroDeCustos: string,
    ): Promise<any | Departamento | null> {
        const findDepartamentoCentroDeCustos = await this.find({
            where: { centroDeCustos },
        });

        return findDepartamentoCentroDeCustos || null;
    }
}

export default DepartamentoRepository;
