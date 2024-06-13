import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CustomReactQuill = ({ value, onChange }) => {
  const editorRef = useRef(null);

  useEffect(() => {
    const updateEditorHeight = () => {
      if (editorRef.current) {
        const editor = editorRef.current.getEditor();
        const editorContent = editor.root;
        editorRef.current.editor.container.style.height = `${editorContent.scrollHeight}px`;
      }
    };

    updateEditorHeight();

    // Listen for changes in the editor
    const editor = editorRef.current.getEditor();
    editor.on('text-change', updateEditorHeight);

    // Clean up the listener when the component unmounts
    return () => {
      editor.off('text-change', updateEditorHeight);
    };
  }, []);

  return (
    <ReactQuill
      ref={editorRef}
      value={value}
      onChange={onChange}
      style={{ height: 'auto' }}
      modules={{
        toolbar: [
          [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
          [{size: []}],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image', 'video'],
          ['clean']
        ],
      }}
      formats={[
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
      ]}
    />
  );
};

export default CustomReactQuill;
