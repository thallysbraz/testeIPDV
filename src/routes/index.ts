import { Router } from "express";

import usersRoutes from "./users.routes";
import sessionsRouter from "./sessions.routes";
import cargosRouter from "./cargo.routes";
import departamentosRouter from "./departamento.routes";
import centroDeCustosRouter from "./centroDeCustos.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionsRouter);
routes.use("/cargos", cargosRouter);
routes.use("/departamentos", departamentosRouter);
routes.use("/centroDeCustos", centroDeCustosRouter);

export default routes;
