import pool from "../config/database";

const createSalesTable = async () => {
  const client = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS sales (
        id SERIAL PRIMARY KEY,
        dataSale DATE NOT NULL,
        quantidadeVendida INT NOT NULL,
        valorTotal DECIMAL(10, 2)
      );
    `;
    await client.query(queryText);
    console.log('Tabela "sales" criada com sucesso!');
  } catch (err) {
    console.error("Erro ao criar tabela:", err);
  } finally {
    client.release();
  }
};

createSalesTable().then(() => process.exit(0));
