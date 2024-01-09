import './App.css';
import SquareBox from './SquareBox';
import ColorForm from './ColorForm';
import { useState } from 'react';

function App() {

  const [color , setColor] = useState('empty value');

  // const [newColor , setNewColor] = useState('');

  // const addColor = (color) => {
  //    setNewColor(color);
  // }

  const handleSubmit = (e) =>{
       e.preventDefault();
      //  addColor(color);
       setColor('');
  }

  return (
    <div className="App">
       <SquareBox
          newColor = {color}
       />
       <ColorForm
         color = {color}
         setColor = {setColor}
         handleSubmit = {handleSubmit}
       />
    </div>
  );
}

export default App;
