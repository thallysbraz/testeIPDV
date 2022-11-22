import { Router } from "express";
import { getCustomRepository } from "typeorm";

import CreateUserService from "../services/CreateUserService";
import UserRepository from "../repositories/UserRepository";

const usersRouter = Router();

usersRouter.post("/", async (request, response) => {
    try {
        const {
            name,
            email,
            password,
            cargo,
            departamento,
            centroDeCustos,
        } = request.body;

        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password,
            cargo,
            departamento,
            centroDeCustos,
        });
        delete user.password;
        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

usersRouter.get("/", async (request, response) => {
    const usersRepository = getCustomRepository(UserRepository);
    const { departamento } = request.query;

    const users = departamento
        ? await usersRepository.getByDepartamento(departamento)
        : await usersRepository.find();

    return response.json(users);
});

export default usersRouter;
