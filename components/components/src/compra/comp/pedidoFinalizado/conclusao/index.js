import { Link } from 'react-router-dom';
import {Container} from './styled'


export default function Conclusao(props){
    const pedido= props.location.state;


    return(
        <Container>
            <h1>Sua compra foi concluída</h1>
            <br/>

            <h3>Parabéns {pedido.cliente}, seu pedido {pedido.numero} foi concluído e a previsão de entrega está para o dia {pedido.dataEntrega}</h3>
             <br/>
             <Link to='/'><button>Voltar</button> </Link>
        
        
        
        </Container>
    )
}