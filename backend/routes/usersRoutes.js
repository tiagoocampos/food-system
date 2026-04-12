import { Router } from "express";
import { db } from "../database/db.js";
import { usuarios } from "../database/schema.js";

const router = Router();

router.post("/register", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if(!nome || !email || !senha) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }

        const user = await db.insert(usuarios).values({
            nome,
            email,
            senha,
        }).returning();

        res.status(201).json({ message: "Usuário cadastrado com sucesso",
            user: {
                id: user[0].id,
                nome: user[0].nome,
                email: user[0].email,
            }
        })
    } catch (error) {
        console.error("Erro de servidor", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
});

export default router;