import React, { useState } from 'react';
import CourseDetails from './components/CourseDetails';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import './App.css';

function App() {
  const [showAll, setShowAll] = useState(true); 

  return (
    <div className="App">

      <div className="container">
        {showAll ? (
          <>
            <CourseDetails />
            <BookDetails />
            <BlogDetails />
          </>
        ) : (
          <p>Click the button to show content.</p>
        )}
      </div>

      
    </div>
  );
}

export default App;
