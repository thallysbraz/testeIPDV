import "reflect-metadata";
import express from "express";

import routes from "./routes";

import "./database";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server rodando na porta ${PORT}!`);
});
