import { EntityRepository, Repository } from "typeorm";

import User from "../models/User";

@EntityRepository(User)
class UserRepository extends Repository<User> {
    public async getAll(departamento?: string): Promise<any | User | null> {
        const findUser = await this.find({
            where: { departamento },
        });

        return findUser || null;
    }

    public async getByDepartamento(
        departamento: string,
    ): Promise<any | User | null> {
        const findUser = await this.find({
            where: { departamento },
        });

        return findUser || null;
    }
}

export default UserRepository;
