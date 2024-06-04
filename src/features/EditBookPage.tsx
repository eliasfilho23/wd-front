import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Book } from "@/functions/queryOperations";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const EditBookPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [book, setBook] = useState<Book>({
    titulo: "",
    autor: "",
    edicao: "",
    dataPublicacao: "",
    qntDisponivel: 0,
  });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/books/${id}`
        );
        setBook(response.data);
      } catch (error) {
        console.error("Erro ao buscar livro:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    const parsedValue = name === "qntDisponivel" ? parseInt(value, 10) : value;

    setBook((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/books/${id}`, book);
      alert("Livro atualizado com sucesso!");
      navigate("/");
    } catch (error) {
      console.error("Erro ao atualizar livro:", error);
      alert("Erro ao atualizar livro. Verifique o console para mais detalhes.");
    }
  };

  return (
    <div className='mx-auto max-w-[900px] p-6 '>
      <h3 className='p-3 text-4xl font-extrabold text-center'>Editar livro</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='titulo'>Título:</label>
        <Input
          type='text'
          id='titulo'
          name='titulo'
          value={book.titulo}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor='autor'>Autor:</label>
        <Input
          type='text'
          id='autor'
          name='autor'
          value={book.autor}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor='edicao'>Edição:</label>
        <Input
          type='text'
          id='edicao'
          name='edicao'
          value={book.edicao}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor='dataPublicacao'>Data de Publicação:</label>
        <Input
          type='string'
          id='dataPublicacao'
          name='dataPublicacao'
          value={book.dataPublicacao}
          onChange={handleInputChange}
        />
        <br />

        <label htmlFor='qntDisponivel'>Quantidade Disponível:</label>
        <Input
          type='number'
          id='qntDisponivel'
          name='qntDisponivel'
          value={book.qntDisponivel}
          onChange={handleInputChange}
        />
        <br />
        <div className='flex justify-between'>
          {" "}
          <Button className='bg-purple-800' type='submit'>
            Atualizar Livro
          </Button>{" "}
          <Button
            className='bg-red-900'
            onClick={() => navigate(`/${id}/delete`)}
          >
            Deletar Livro
          </Button>
          <Button className='bg-pink-950' onClick={() => navigate("/")}>
            Voltar
          </Button>
        </div>
      </form>
    </div>
  );
};
