import { Request, Response } from "express";
import { BookRepository } from "../repositories/bookRepository";

const bookRepository = new BookRepository();

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookRepository.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    console.error("Erro ao obter livros:", err);
    res.status(500).json({ error: "Erro ao obter livros." });
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;
  try {
    const book = await bookRepository.addBook(title, author, price);
    res.status(201).json(book);
  } catch (err) {
    console.error("Erro ao adicionar livro:", err);
    res.status(500).json({ error: "Erro ao adicionar livro." });
  }
};
