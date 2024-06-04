import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/BookCard";
import { getAllBooks } from "@/functions/queryOperations";
import { Book } from "@/functions/queryOperations";
import { Link, useNavigate } from "react-router-dom";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState<Book[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const navigate = useNavigate();

  async function fetchBooks() {
    getAllBooks().then((returnedData) => setAllBooks(returnedData));
  }
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleClick = (): void => {
    if (inputValue === "") {
      setCurrentSearch([]);
      setErrorMsg("Digite um termo válido.");
    } else {
      setErrorMsg("");
      const matchedBooks = allBooks.filter((book) =>
        book.titulo.toLowerCase().includes(inputValue.toLowerCase())
      );
      setCurrentSearch(matchedBooks);
    }
  };

  return (
    <div>
      <div className='py-6 mx-auto max-w-[1600px] text-center text-white text-6xl font-semibold'>
        Livraria
      </div>
      <div className='mx-auto max-w-[1600px] flex flex-col justify-center items-center gap-5'>
        <Input
          value={inputValue}
          onChange={handleChange}
          className='w-60 mx-auto'
          placeholder='Pesquise por um livro'
        />
        <div>
          {" "}
          <Button className='w-[100px] p-6 bg-blue-950' onClick={handleClick}>
            Buscar
          </Button>{" "}
          <Link to={"/newBook"}>
            <Button className='w-[200px] p-6 mx-5 bg-pink-950'>
              Registrar novo livro
            </Button>
          </Link>
        </div>

        {errorMsg && <p className='text-red'>{errorMsg}</p>}
      </div>
      <div className='p-3 gap-5 grid grid-cols-3 max-w-[1100px] mx-auto'>
        {currentSearch.map((item, index) => (
          <BookCard
            key={index}
            edicao={item.edicao}
            titulo={item.titulo}
            autor={item.autor}
            dataPublicacao={item.dataPublicacao}
            qntDisponivel={item.qntDisponivel}
          >
            <Button onClick={() => navigate(`${item.id}`)}>
              Visualizar
            </Button>
          </BookCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
