import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export interface Book {
  id?: number;
  titulo: string;
  autor: string;
  edicao: string;
  dataPublicacao: string;
  qntDisponivel: number;
}

export const getAllBooks = async (): Promise<Book[]> => {
  try {
    const response = await api.get<Book[]>("/books");
    return response.data;
  } catch (error) {
    console.error("Erro ao listar livros:", error);
    throw error;
  }
};

export const getBookById = async (id: number): Promise<Book> => {
  try {
    const response = await api.get<Book>(`/books/${id}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar livro:", error);
    throw error;
  }
};

export const createBook = async (book: Book): Promise<Book> => {
  try {
    const response = await api.post<Book>("/books", book);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar livro:", error);
    throw error;
  }
};

export const updateBook = async (id: number, book: Book): Promise<Book> => {
  try {
    const response = await api.put<Book>(`/books/${id}`, book);
    return response.data;
  } catch (error) {
    console.error("Erro ao atualizar livro:", error);
    throw error;
  }
};

export const deleteBook = async (id: number): Promise<void> => {
  try {
    await api.delete(`/books/${id}`);
  } catch (error) {
    console.error("Erro ao deletar livro:", error);
    throw error;
  }
};
