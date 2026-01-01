//import { useState, useEffect } from "react";
//import { getGifs } from "./helpers/getgifs";
//export const GifGrid = ({ category }) => {
//const [counter, setCounter] = useState(10);
//useEffect(() => getGifs(category), []);
//return (
//<>
// <h3>{category}</h3>
//  <h5>{counter}</h5>
//   <button onClick={() => setCounter(counter + 1)}>+1</button>
//  </>
// );
//};
import { useState, useEffect } from "react";
import { getGifs } from "./helpers/getgifs";

export const GifGrid = ({ category }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    const fetchGifs = async () => {
      const gifs = await getGifs(category);
      console.log(gifs);
    };

    fetchGifs(); // Llamamos a la función async dentro del useEffect
  }, [category]); // category es la dependencia, se ejecuta cuando esta cambia

  return (
    <>
      <h3>{category}</h3>
      <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
};
