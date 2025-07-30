// src/Context/Context.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const BookmarkContext = createContext();

export const useBookmark = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved = localStorage.getItem('bookmarks');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark) => {
    setBookmarks([...bookmarks, { ...bookmark, id: Date.now() }]);
  };

  const deleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
  };

  const updateBookmark = (id, updatedBookmark) => {
    setBookmarks(bookmarks.map((b) => (b.id === id ? updatedBookmark : b)));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, deleteBookmark, updateBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
