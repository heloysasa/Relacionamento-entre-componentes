import {Container, RemoverIcon} from './styled'
import Cookie from 'js.cookie'
import {useState} from 'react'

import Contador from '../contador'


export default function CI(props){

    const [produto, setProduto] = useState(props.infos)

    function alterarQtd (qtd){
        setProduto({...produto, qtd});

        props.update(produto.id,qtd)
    }


    function remove() {
        props.remove(produto.id);
    }









    return(
        <Container>
            <div>
                <img className="capa" src={produto.imagem} alt=""/>
            <Contador onChange={alterarQtd} value={produto.qtd}/>
            </div>
            <div className="titulo">{produto.titulo}</div>
            <div className="preco">Preço Unitário <br/>{produto.preco}</div>
            <div className="QTD">QTD{produto.qtd}</div>
            <div className="remover"><RemoverIcon onClick={remove}/></div>
        </Container>
    )
}