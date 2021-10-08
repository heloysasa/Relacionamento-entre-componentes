import {Container, RemoverIcon} from './styled'
import {useState} from 'react'

import Contador from '../contador'


export default function CI(props){

    const [produtos, setProdutos] = useState(props.infos)

    function alterarQtd (qtd){
        setProdutos({...produtos, qtd});

        props.update(produtos.id,qtd)
    }


    function remove() {
        props.remove(produtos.id);
    }









    return(
        <Container>
            <div>
                <img className="capa" src={produtos.imagem} alt=""/>
            <Contador onChange={alterarQtd} value={produtos.qtd}/>
            </div>
            <div className="titulo">{produtos.titulo}</div>
            <div className="preco">Preço Unitário <br/>{produtos.preco}</div>
            <div className="QTD">QTD{produtos.qtd}</div>
            <div className="remover"><RemoverIcon onClick={remove}/></div>
        </Container>
    )
}