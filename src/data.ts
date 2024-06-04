import { Book } from "./functions/queryOperations";

export type bookWColor = {
  book: Book,
  color: string
}

const book1: Book = {
  title: "o Hobbit",
  editora: "ME Publicações",
  anoPublicacao: 2008,
  qntDisponivel: 4
}

 const book2 = {
  title: "A Culpa é das Estrelas",
  editora: "Intrínseca",
  anoPublicacao: 2012,
  qntDisponivel: 10
};

 const book3 = {
  title: "Dom Casmurro",
  editora: "Ateliê Editorial",
  anoPublicacao: 2010,
  qntDisponivel: 6
};

 const book4 = {
  title: "1984",
  editora: "Companhia das Letras",
  anoPublicacao: 2009,
  qntDisponivel: 5
};

 const book5 = {
  title: "O Senhor dos Anéis: A Sociedade do Anel",
  editora: "Martins Fontes",
  anoPublicacao: 2001,
  qntDisponivel: 3
};

 const book6 = {
  title: "Harry Potter e a Pedra Filosofal",
  editora: "Rocco",
  anoPublicacao: 2000,
  qntDisponivel: 8
};

 const book7 = {
  title: "Memórias Póstumas de Brás Cubas",
  editora: "Penguin Companhia",
  anoPublicacao: 2011,
  qntDisponivel: 7
};

 const book8 = {
  title: "O Código Da Vinci",
  editora: "Sextante",
  anoPublicacao: 2004,
  qntDisponivel: 9
};

 const book9 = {
  title: "A Menina que Roubava Livros",
  editora: "Intrínseca",
  anoPublicacao: 2007,
  qntDisponivel: 2
};

 const book10 = {
  title: "Game of Thrones",
  editora: "Leya",
  anoPublicacao: 2010,
  qntDisponivel: 4
};

export const listaDeLivros: Book[] = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10 ]
