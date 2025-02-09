import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

//Home.js
function Home(){
  return(
    <div>Home</div>
  );
}

//About.js
function About(){
  return(
    <div>About</div>
  );
}

//This will cause an error in console if you navigate to a path that doesn't exist, because there's no catch-all route
//This is an uncommon error because many developers don't notice it, until they navigate to a non-existent path. 