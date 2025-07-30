// src/components/AddBookmark.js
import React, { useEffect, useState } from 'react';
import { useBookmark } from '../Components/Context/Context';
import './AddBookmark.css';

const AddBookmark = ({ closeForm, editingId, setEditingId }) => {
  const { addBookmark, bookmarks, updateBookmark } = useBookmark();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (editingId !== null) {
      const item = bookmarks.find((b) => b.id === editingId);
      if (item) {
        setName(item.name);
        setUrl(item.url);
      }
    }
  }, [editingId, bookmarks]);

  const handleAdd = () => {
    if (!name || !url) return;

    if (editingId !== null) {
      updateBookmark(editingId, { name, url, id: editingId });
      setEditingId(null);
    } else {
      addBookmark({ name, url });
    }

    setName('');
    setUrl('');
    closeForm();
  };

  return (
    <div className="add-bookmark-form">
      <input
        type="text"
        placeholder="Website Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="url"
        placeholder="Website URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleAdd}>{editingId !== null ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default AddBookmark;
