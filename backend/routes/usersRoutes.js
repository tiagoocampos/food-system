import { Router } from "express";
import { db } from "../database/db.js";
import { usuarios } from "../database/schema.js";
import { and, eq } from "drizzle-orm";

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

router.post("/login", async (req, res) => {
    try {
        const { email, senha } = req.body;
        if (!email || !senha){
            res.status(400).json({ message: "Email e senha são obrigatórios" });
            return
        }
        const user = await db
        .select()
        .from(usuarios)
        .where(
            and(
                eq(usuarios.email, email),
                eq(usuarios.senha, senha)

        ))

        if (user.length === 0) {
            res.status(401).json({ message: "Email ou senha inválidos" });
            return
        }
        res.status(200).json({ message: "Login realizado com sucesso", user: {
            id: user[0].id,
            nome: user[0].nome,
            email: user[0].email,
        }})
    } catch (error) {
        console.error("Erro de servidor", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
})

export default router;