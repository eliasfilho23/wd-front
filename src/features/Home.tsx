import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Book, bookWColor } from "@/data";
import { Button } from "@/components/ui/button";
import { listaDeLivros } from "@/data";
import { BookCard } from "@/components/BookCard";
import axios from "axios";
import Modal from "./Modal";

export const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [currentSearch, setCurrentSearch] = useState<bookWColor[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [selectedBook, setSelectedBook] = useState<bookWColor | null>(null);
  const axiosInstance = axios.create();

  axiosInstance.get("http://localhost:5173/").then((promise) => {
    const data = promise.data;
    console.log(data);
  });

  const handleVisualizeClick = (book: Book, color: string) => {
    setSelectedBook({ book, color });
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleClick = (): void => {
    if (inputValue === "") {
      setCurrentSearch([]);
      setErrorMsg("Digite um termo válido.");
    } else {
      setErrorMsg("");
      const matchedBooks = listaDeLivros
        .filter((book) =>
          book.title.toLowerCase().includes(inputValue.toLowerCase())
        )
        .map((book) => ({ book, color: getRandomBgColor() }));
      setCurrentSearch(matchedBooks);
    }
  };

  function getRandomBgColor() {
    const bgColors = [
      "bg-red",
      "bg-blue",
      "bg-green",
      "bg-yellow",
      "bg-purple",
      "bg-pink",
      "bg-indigo",
      "bg-teal",
      "bg-orange",
      "bg-gray",
      "bg-gray",
      "bg-red",
      "bg-blue",
      "bg-green",
      "bg-yellow",
      "bg-purple",
      "bg-pink",
      "bg-indigo",
      "bg-teal",
      "bg-orange",
      "bg-gray",
    ];

    const randomIndex = Math.floor(Math.random() * bgColors.length);
    return bgColors[randomIndex];
  }

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
          <Button
            className='w-[200px] p-6 mx-5 bg-blue-950'
            onClick={handleClick}
          >
            Registrar um Livro
          </Button>
        </div>

        {errorMsg && <p className='text-red'>{errorMsg}</p>}
      </div>
      <div className='p-3 gap-5 grid grid-cols-3 max-w-[1100px] mx-auto'>
        {currentSearch.map((item, index) => (
          <BookCard
            additionalCNProps={item.color}
            key={index}
            title={item.book.title}
            editora={item.book.editora}
            anoPublicacao={item.book.anoPublicacao}
            qntDisponivel={item.book.qntDisponivel}
          >
            <Button onClick={() => handleVisualizeClick(item.book, item.color)}>
              Visualizar
            </Button>
          </BookCard>
        ))}
      </div>

      {selectedBook && (
        <Modal
          handleCloseModalProps={handleCloseModal}
          additionalProps={`text-center ${selectedBook.color + "-700"}`}
          onClose={handleCloseModal}
          currentBook={selectedBook}
        ></Modal>
      )}
    </div>
  );
};

export default Home;
