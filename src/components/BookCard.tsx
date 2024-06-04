import { Book } from "@/data";
import React from "react";

interface BookWChildren extends React.PropsWithChildren<Book> {
  children?: React.ReactNode;
  additionalCNProps?: string;
}

export const BookCard: React.FC<BookWChildren> = ({
  title,
  editora,
  anoPublicacao,
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
        {title}
      </div>
      <ul className='p-4 list-none'>
        <li>EDITORA: {editora}</li>
        <li>ANO: {anoPublicacao}</li>
        <li>EM ESTOQUE: {qntDisponivel}</li>
      </ul>
      {children}
    </div>
  );
};