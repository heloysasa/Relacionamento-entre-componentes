import Container from './styled'
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import Cookie from 'js-cookie'



export default function contador(){
    return(
        <Container>
            <div className="car">Carrinho</div>
            <Link to="/">Voltar</Link>
            <div className="itens"></div>
        </Container>
    )
}