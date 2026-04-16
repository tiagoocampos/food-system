import { numeric, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core"

export const usuarios = pgTable("usuarios",{
    id: serial("id").primaryKey(),
    nome: varchar("nome", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    senha: varchar("senha", { length: 255 }).notNull(),
});

export const produtos = pgTable("produtos",{
    id: serial("id").primaryKey(),
    nome: varchar("nome", { length: 100 }).notNull(),
    descricao: text("descricao"),
    preco: numeric("preco", { precision: 10, scale: 2 }).notNull(),
    imagem: text("imagem"),
    criadoEm: timestamp("criado_em").defaultNow()

});