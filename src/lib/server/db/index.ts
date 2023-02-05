import { orchidORM } from "orchid-orm";


export const db = orchidORM({
   datbaseUrl: "postgresql://postgres:postgres@localhost:5432/elrio?schema=public",
   log: true,
}, {})