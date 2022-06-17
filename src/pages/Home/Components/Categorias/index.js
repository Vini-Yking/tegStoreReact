import { useState, useEffect } from "react";
import './index.css'
import axios from 'axios';

const Categorias = () => {
    
    const [categorias, setCategorias] = useState([])
    const [atualizar, setAtualizar] = useState(false)
    const [loading, setLoading] = useState(false)

    const getCategorias = async () => {
        setLoading(true)
        
        try{
          const { data } = await axios.get('https://teg-store-api.herokuapp.com/tegloja/categorias')
          setCategorias(data)
        } catch(e) {
          //lança uma excessão 
          console.log(e)
          setLoading(false)
        }
      }

      // Para funcionar na primeira vez
      useEffect(() => {
        getCategorias();
      },[])
      // categorias.map((categoria, index) => <li key={index}>{categoria}</li>)

    return(
        <>
            {categorias.map((categoria, index) => <li key={index}>{categoria.categoria}</li>)}
        </>
    )

}

export default Categorias;