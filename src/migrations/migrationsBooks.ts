import pool from '../config/database'; 

const createBooksTable = async () => {
  const books = await pool.connect();
  try {
    const queryText = `
      CREATE TABLE IF NOT EXISTS books (
        id SERIAL PRIMARY KEY,
        title VARCHAR(100) NOT NULL,
        author VARCHAR(100) UNIQUE NOT NULL,
        price DECIMAL(10, 2) NOT NULL
      );
    `;
    await books.query(queryText);
    console.log('Tabela "Books" criada com sucesso!');
  } catch (err) {
    console.error('Erro ao criar tabela:', err);
  } finally {
    books.release();
  }
};

createBooksTable().then(() => process.exit(0));