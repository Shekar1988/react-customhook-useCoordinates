import React from "react";
import "./style.css";
import  useCoords from './useCoords';

export default function App() {
  const[x,y] = useCoords();
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h1>{x}</h1>
      <h1>{y}</h1>
    </div>
  );
}
