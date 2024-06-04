import { Book, getAllBooks } from "@/functions/queryOperations";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BookCard } from "@/components/BookCard";
import { Button } from "@/components/ui/button";

export const BookPage: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [allBooks, setAllBooks] = useState<Book[]>([]);

  async function fetchBooks() {
    try {
      const books = await getAllBooks();
      setAllBooks(books);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);
  const numberParams = params.id ? parseInt(params.id) : "";
  const currentBook = allBooks.find((i) => i.id === numberParams);

  return (
    <>
      {currentBook && (
        <BookCard
          additionalCNProps='my-20'
          autor={currentBook.autor}
          titulo={currentBook.titulo}
          edicao={currentBook.edicao}
          dataPublicacao={currentBook.dataPublicacao}
          qntDisponivel={currentBook.qntDisponivel}
        >
          <Button onClick={() => navigate(`/${params.id}/edit`)}>Editar</Button>
          <Button onClick={() => navigate("/")}>Voltar</Button>
        </BookCard>
      )}
    </>
  );
};
