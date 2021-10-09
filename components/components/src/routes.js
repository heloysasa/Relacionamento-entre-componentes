import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from './compra/home'
import Carrinho from './compra/carrinho'
import DetPro from './compra/detalheProduto'
import CIt from './compra/carrinho/carrinhoItem'
import Cont from './compra/carrinho/contador'
import Conc from './compra/comp/pedidoFinalizado/conclusao'
import Pedi from './compra/comp/pedidoFinalizado/pedido'



export default function Routes(){
    return (
        <BrowserRouter>
        <Switch>      
            <Route path="/" exact={true} component={Home}/>
            <Route path="/detalhe" component={DetPro}/>
            <Route path="/carrinho" component={Carrinho}/>
            <Route path="/compra/carrinhoItem" component={CIt}/>
            <Route path="/compra/contador" component={Cont}/>
            <Route path="/compra/conclusao" component={Conc}/>
            <Route path="/compra/pedido" component={Pedi}/>
        </Switch>
        </BrowserRouter>
    )
}
/* 
const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
           <Switch>
               <Route path="/" exact={true} component={Home}/>
               <Route path="/detalhe" component={DetPro}/>
               <Route path="/carrinho" component={Carrinho}/>
               <Route path="/compra/contador" component={Cont}/>
           </Switch>
        </BrowserRouter>
    </StrictMode>,
     rootElement
)
 */
