// src/components/BookmarkCard.js
import React, { useState } from 'react';
import AddBookmark from './AddBookmark';
import { useBookmark } from '../Components/Context/Context';
import './BookmarkCard.css';

const BookmarkCard = () => {
  const { bookmarks, deleteBookmark, updateBookmark } = useBookmark();
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const startEdit = (bookmark) => {
    setIsOpen(true);
    setEditingId(bookmark.id);
  };

  return (
    <div className="bookmark-container">
      <h1>Bookmark Website</h1>
      <button className="add-btn" onClick={() => {
        setIsOpen(!isOpen);
        setEditingId(null);
      }}>
        {isOpen ? 'Close' : 'Add Bookmark'}
      </button>

      {isOpen && (
        <div className="add-form-wrapper">
          <AddBookmark closeForm={() => setIsOpen(false)} editingId={editingId} setEditingId={setEditingId} />
        </div>
      )}

      <div className="bookmark-list">
        {bookmarks.map((b) => (
          <div key={b.id} className="bookmark-card">
            <a href={b.url} target="_blank" rel="noopener noreferrer">{b.name}</a>
            <div>
              <button onClick={() => startEdit(b)} className="edit-btn">Edit</button>
              <button onClick={() => deleteBookmark(b.id)} className="delete-btn">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkCard;
