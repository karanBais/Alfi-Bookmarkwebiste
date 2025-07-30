import React from 'react'

import { BookmarkProvider } from './Components/Context/Context'
import BookmarkCard from './Components/BookmarkCard';
import AddBookmark from './Components/AddBookmark';

const App = () => {
  return (
<BookmarkProvider>
     
   
    <BookmarkCard />
   
     
</BookmarkProvider>
  )
}
 
export default App;