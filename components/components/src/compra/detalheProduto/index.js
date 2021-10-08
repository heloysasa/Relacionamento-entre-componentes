
import {Container} from './styled'

import Cookie from 'js-cookie'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';


export default function DP(props){
    const[produtos,setProdutos]=useState(props.location.state)
    const navigation=useHistory();





    function comprar(){
        let carrinho=Cookie.get('carrinho')
        carrinho= carrinho !== undefined
        ?JSON.parse(carrinho)
        :[]


        if(carrinho.some(item=>item.id === produtos.id) ===false)
        carrinho.push({...produtos, qtd:1})


        Cookie.set('carrinho', JSON.stringify(carrinho))


        navigation.push('/carrinho')
    }

    return(
        <Container>
            <div>
                <Link to="/">Voltar</Link>
                <div class="dp">Detalhes do Produto</div><br/><br/>
                <div><img src={produtos.imagem} alt=""/></div>
                <div><h2>{produtos.titulo}</h2></div>
                <div><h3>{produtos.preco}</h3></div>
            </div>
            <div>
                <h2>Descrição</h2>
                <div>{produtos.descricao}</div>

                <h2>Especificações</h2>
                <div>{produtos.especificacoes}</div>

                <div><button onClick={comprar}>Comprar</button></div>
            </div>
        </Container>
    )
}