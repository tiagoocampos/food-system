import { Router } from "express";
import { db } from "../database/db.js";
import { usuarios } from "../database/schema.js";
import { and, eq } from "drizzle-orm";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv();

const router = Router();

router.post("/register", async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        if(!nome || !email || !senha) {
            return res.status(400).json({ message: "Todos os campos são obrigatórios" });
        }
        const senhaHash = await bcrypt.hash(senha, 10);
        const user = await db.insert(usuarios).values({
            nome,
            email,
            senha: senhaHash,
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
               

        ))

        if (user.length === 0) {
            res.status(401).json({ message: "Email ou senha inválidos" });
            return
        }
        const senhaValida = await bcrypt.compare(senha, user[0].senha)
        if (!senhaValida){
            res.status(401).json({ message: "Email ou senha inválidos" });
            return
        }

        const token = jwt.sign(
            { id: user[0].id, email: user[0].email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        )
        res.status(200).json({ message: "Login realizado com sucesso",
            token,
             user: {
            id: user[0].id,
            nome: user[0].nome,
            email: user[0].email,
        }})
    } catch (error) {
        console.error("Erro de servidor", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
})

router.get("/me", async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Token de autenticação ausente" });
    }
    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json({ valid: true, user:decoded })
    } catch (error) {
        res.status(401).json({ message: "Token de autenticação inválido" });
    }
})

export default router;