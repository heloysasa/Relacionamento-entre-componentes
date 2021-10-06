import Cookie from 'js.cookie'
import {useState} from 'react'

import Contador from '../contador'
import {Container, RemoverIcon} from './styled'


export default function CI(props){

    const [produto, setProduto] = useState(props.info)

    function alterarQtd (qtd){}









    return(
        <Container>
            <div>
                <img className="capa" src={} alt=""/>
            </div>
            <div className="titulo"></div>
            <div className="preco">Preço Unitário <br/></div>
            <div className="QTD">QTD</div>
            <div className="remover"></div>
        </Container>
    )
}