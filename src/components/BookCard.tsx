import { Book } from "@/functions/queryOperations";
import React from "react";

interface BookWChildren extends React.PropsWithChildren<Book> {
  children?: React.ReactNode;
  additionalCNProps?: string;
}

export const BookCard: React.FC<BookWChildren> = ({
  titulo,
  edicao,
  autor,
  dataPublicacao,
  qntDisponivel,
  children,
  additionalCNProps,
}) => {
  return (
    <div
      className={`max-w-[300px] mx-auto border-[1px] text-center ${
        additionalCNProps + "-800"
      }`}
    >
      <div
        className={`p-4 m-3 text-4xl font-extrabold border-2 ${
          additionalCNProps + "-700"
        }`}
      >
        {titulo}
      </div>
      <ul className='p-4 list-none'>
        <li>Autor: {autor}</li>
        <li>Edição: {edicao}</li>
        <li>Ano de publicação: {dataPublicacao}</li>
        <li>EM ESTOQUE: {qntDisponivel}</li>
      </ul>
      {children}
    </div>
  );
};