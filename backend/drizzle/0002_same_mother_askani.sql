CREATE TABLE "produtos" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" varchar(100) NOT NULL,
	"descricao" text,
	"preco" numeric(10, 2) NOT NULL,
	"imagem" text,
	"criado_em" timestamp DEFAULT now()
);
