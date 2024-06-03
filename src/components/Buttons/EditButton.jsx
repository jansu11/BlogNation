import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';

const EditButton = () => {
  return (
    <button
      className="text-blue-500 hover:text-blue-700 transition duration-300"
    >
      <AiOutlineEdit size={24} />
    </button>
  );
};

export default EditButton;
