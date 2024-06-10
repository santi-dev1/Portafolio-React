import { useState } from 'react';
import Button from './components/button';
import Layaut  from './components/layaut';
import NavBar from './components/navbar';
import Bloques from './components/bloques';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-secondary min-h-screen">
      <NavBar></NavBar>
      <Layaut>
      </Layaut>

      <Bloques />
      <Footer />
      </div>
    </>
  )
}

export default App
