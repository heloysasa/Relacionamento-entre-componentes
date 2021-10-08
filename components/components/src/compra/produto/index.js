import {Link} from 'react-router-dom'
import {Container} from './styled'


export default function Pr(props){
    return(
        <Container>
            <img className="capa"src={props.infos.imagem} alt=""/>
            <div className="titulo">{props.infos.titulo}</div>
            <div className="preco">{props.infos.preco}</div>
        <Link to={{pathname:'/detalhe' ,state:props.infos}}>
            <button>Ver Detalhes</button>
        </Link>
        
        </Container>
    )
}