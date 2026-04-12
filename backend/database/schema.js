import { pgTable, serial, varchar } from "drizzle-orm/pg-core"

export const usuarios = pgTable("usuarios",{
    id: serial("id").primaryKey(),
    nome: varchar("nome", { length: 100 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    senha: varchar("senha", { length: 255 }).notNull(),
});