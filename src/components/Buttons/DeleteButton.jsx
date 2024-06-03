import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const DeleteButton = ( ) => {
  return (
    <button
      className="text-red-500 hover:text-red-700 transition duration-300"
    >
      <AiOutlineDelete size={24} />
    </button>
  );
};

export default DeleteButton;
