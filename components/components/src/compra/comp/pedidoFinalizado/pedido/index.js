import {Container} from './styled'
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


export default function Conclusao() {
  const [pedidos, setPedidos] = useState({});

  useEffect(() => {
    setPedidos({
      numero: 305849,
      dataEntrega: '27/04/2022',
      cliente: 'Heloysa dos Santos'
    })

  }, []);


  return (
    <Container>
      <h1> Confirmar sua compra </h1>

      <h3> Pedido: {pedidos.numero} </h3>
      <h3> Cliente: {pedidos.cliente} </h3>
      <h3> Previsão de Entrega: {pedidos.dataEntrega} </h3>

      <Link to={{
        pathname: '/compra/conclusao',
        state: pedidos
      }}>
          <button> Confirmar Compra </button>
      </Link>

    </Container>
  )
}
