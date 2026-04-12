CREATE TABLE "usuarios" (
	"id" serial PRIMARY KEY NOT NULL,
	"nome" varchar NOT NULL,
	"email" varchar NOT NULL,
	"senha" varchar(255) NOT NULL,
	CONSTRAINT "usuarios_email_unique" UNIQUE("email")
);
