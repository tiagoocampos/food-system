import { Router } from "express";
import { db } from "../database/db.js";
import { produtos } from "../database/schema.js";
import { ilike } from "drizzle-orm";

const router = Router();

router.get("/", async (req, res) => {
    try {
        const { busca } = req.query;
        let result;

        if(busca){
            result = await db
            .select()
            .from(produtos)
            .where(ilike(produtos.nome, `%${busca}%`));
        } else {
            result = await db
            .select()
            .from(produtos);
        }
        res.json(result);
    } catch (error) {
        console.error("Erro de servidor", error);
        res.status(500).json({ message: "Erro no servidor" });
    }
})

router.post("/", async (req, res) => {
  try {
    const { nome, descricao, preco, imagem } = req.body;

    await db.insert(produtos).values({
      nome,
      descricao,
      preco,
      imagem
    });

    res.status(201).json({ mensagem: "Produto criado com sucesso" });
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
});

// router.delete("/produtos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
    
//   } catch (error) {
//     console.error("Erro de servidor", error);
//     res.status(500).json({ message: "Erro no servidor" });
//   }
// })

export default router;