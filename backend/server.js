import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { testConnection } from "./database/testConnection.js";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.use("/users", usersRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${process.env.PORT}`);
})

testConnection();