import {Container} from './styled'
import { useEffect, useState } from 'react'
import styled from "styled-components";



export default function Contador(props){
   const [qtd,setQtd] = useState(props.value);


   function incrementar(){
       if (qtd >= 10)
       return;
       setQtd(qtd+1)
   }

   function decrementar(){
       if (qtd ===0)
       return;
       setQtd(qtd-1)
   }


   useEffect(() =>{
       props.onChange(qtd);
   }, 
   [qtd]
   )


    return(
        <Container>
            <div className="menos" onClick={decrementar}> - </div>
            <div className="qtd">{qtd}</div>
            <div className="mais" onClick={incrementar}>+</div>
        </Container>
    )
}