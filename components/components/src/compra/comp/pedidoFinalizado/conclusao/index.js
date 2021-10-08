


export default function Conclusao(props){
    const pedido= props.location.state;


    return(
        <div className="container">
            <h1>Sua compra foi concluída</h1>
            <br/>
            <br/>

            <h3>Parabéns{pedido.cliente}, seu pedido {pedido.numero} foi concluído e a previsão de entrega está para o dia {pedido.dataEntrega}</h3>
             <br/>
             <button>Voltar</button>
        
        
        
        </div>
    )
}