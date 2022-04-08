import {useState, useEffect} from 'react'

const useCoords = () => {

  const[coords,setCoords] = useState([0,0]);

  useEffect(()=> {
    const handleMove = ({clientX,clientY}) => {return setCoords([clientX,clientY])}

    window.addEventListener('mousemove',handleMove);

    return () => { window.removeEventListener('mousemove',handleMove); }

  })

  return coords
}

export default useCoords;