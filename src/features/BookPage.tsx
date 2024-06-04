import { Book, listaDeLivros } from "@/data";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";

export const BookPage: React.FC<Book> = () => {
  const navigate = useNavigate();
  const params = useParams();

  const currentBook = listaDeLivros.filter((book) => {
    return book.title === params.livro;
  });

  return (
    <BookCard
      additionalCNProps='my-20'
      title={currentBook[0].title}
      editora={currentBook[0].editora}
      anoPublicacao={currentBook[0].anoPublicacao}
      qntDisponivel={currentBook[0].qntDisponivel}
    >
      <Button>Editar</Button>
      <Button onClick={() => navigate("/")}>Voltar</Button>
    </BookCard>
  );
};
