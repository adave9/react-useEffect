
import { useEffect, useState } from 'react';
import './App.css';

function App() {
 const [count,setCount]=useState(0);
 
 useEffect( 
              ()=>{
                  setTimeout(()=>{
                    setCount((count)=>count+1);
                  },1000);
              }  // Add " ,[] " and the timer will run only once
          );

  return (
    <div className="App">
      <div className="wrap">
        <h2>Counter is : {count}.</h2>
      </div>
      <br/>
    </div>
  );
}

export default App;
