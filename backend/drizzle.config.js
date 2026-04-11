import { configDotenv } from "dotenv";
import { defineConfig } from "drizzle-kit";
configDotenv();

export default defineConfig({
    schema: "./database/schema.js",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials:{
        url: process.env.DATABASE_URL,
    }
});


