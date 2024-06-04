import { Book } from "@/functions/queryOperations";
import React from "react";
import { Button } from "@/components/ui/button";

interface ModalProps {
  children?: React.ReactNode;
  additionalProps: string;
  currentBook: { book: Book; color: string };
  handleCloseModalProps: () => void;
  onClose: () => void;
}
const Modal: React.FC<ModalProps> = ({
  onClose,
  additionalProps,
  currentBook,
  ...props
}) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 text-white`}
    >
      <div
        className='fixed inset-0 bg-black opacity-90'
        onClick={onClose}
      ></div>
      <div
        className={`flex flex-col gap-5 p-8 rounded shadow-lg z-10 ${additionalProps}-700`}
      >
        <div className='grid grid-cols-2 text-center items-center bg-slate-800 p-3'>
          <h2 className='bg-black rounded-md m-1 p-2'>Título: </h2>
          <h2>{currentBook.book.titulo}</h2>
          <h2 className='bg-black rounded-md m-1 p-2'>Edição:</h2>
          <p> {currentBook.book.edicao}</p>
          <h2 className='bg-black rounded-md m-1 p-2'>Data de Publicação: </h2>
          <p> {currentBook.book.dataPublicacao}</p>
          <h2 className='bg-black rounded-md m-1 p-2'>
            Quantidade Disponível:
          </h2>
          <p> {currentBook.book.qntDisponivel}</p>
        </div>
        <Button className='max-w-[200px]' onClick={props.handleCloseModalProps}>
          Editar
        </Button>{" "}
        <Button
          className='max-w-[200px] bg-red-900'
          onClick={props.handleCloseModalProps}
        >
          Excluir
        </Button>
        <Button onClick={props.handleCloseModalProps}>Fechar</Button>
      </div>
    </div>
  );
};

export default Modal;
