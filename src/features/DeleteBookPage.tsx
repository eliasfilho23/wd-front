import React, { useState, useEffect } from "react";
import axios from "axios";
import { Book } from "@/functions/queryOperations";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const DeleteBookPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/books/${id}`);
        setBook(response.data);
      } catch (error) {
        console.error("Erro ao buscar livro:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/books/${id}`);
      alert("Livro excluído com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
      alert("Erro ao excluir livro. Verifique o console para mais detalhes.");
    }
  };

  if (!book) {
    return <div>Carregando...</div>;
  }

  return (
    <div className='mx-auto max-w-[900px] p-6 '>
      <h3 className='p-3 text-4xl font-extrabold text-center'>
        Excluir livro
      </h3>
      <div>
        <p><strong>Título:</strong> {book.titulo}</p>
        <p><strong>Autor:</strong> {book.autor}</p>
        <p><strong>Edição:</strong> {book.edicao}</p>
        <p><strong>Data de Publicação:</strong> {book.dataPublicacao}</p>
        <p><strong>Quantidade Disponível:</strong> {book.qntDisponivel}</p>
      </div>
      <div className='flex justify-between mt-4'>
        <Button className='bg-red-800' onClick={handleDelete}>
          Excluir Livro
        </Button>
        <Button className='bg-pink-950' onClick={() => navigate("/")}>
          Voltar
        </Button>
      </div>
    </div>
  );
};