import { Pool } from "pg";

const connectionString =
  "postgresql://danilo:mxVsxTsb5mCoo3DOGgodIbOXmZJNO1bl@dpg-csgpt4o8fa8c7391kcq0-a.oregon-postgres.render.com/livraria_danilo";

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  },
});

export default pool;
