import {Container} from './styled';
import Produto from '../produto';
import { useState } from 'react';


import { CarouselConfig } from './config';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export default function Index() {
    const [produtos,setProdutos]=useState([])

    function listar(){
        const pro = [
            {
                id: 1,
                imagem:"https://static3.tcdn.com.br/img/img_prod/460977/180_luminaria_abajur_chapeu_feiticeiro_mago_mickey_mouse_disney_ev_80825_1_15fd3b2413ee8502492e71a2b36218e5.jpeg",
                titulo:"Luminária/Abajur ",
                preco:"R$ 159,90",
                descricao:"3D Chapéu Feiticeiro Mago Mickey Mouse",
                especificacoes:"É azul"
            },

            {
                id: 2,
                imagem:"https://static3.tcdn.com.br/img/img_prod/460977/xicara_chip_100ml_bela_e_a_fera_beauty_and_the_beast_disney_63923_1_20201211173804.jpg",
                titulo:"Caneca Xícara Zip Chip",
                preco:"R$ 49,90",
                descricao:"Bela e a Fera Beauty and the Beast Disney",
                especificacoes:"100ml"
            },

            {
                id: 3,
                imagem:"https://static3.tcdn.com.br/img/img_prod/460977/vaso_de_planta_baby_groot_guardioes_da_galaxia_vol_2_guardians_of_the_galaxy_vol_2_cachepot_35455_1_20200616161048.jpg",
                titulo:"Vaso de Planta Baby Groot",
                preco:"R$ 39,90",
                descricao:"Guardiões da Galáxia Vol. 2 ",
                especificacoes:"Bonitinho"
            }
        ]
        setProdutos (pro)
    }
    return(
        <Container>
            <div className="SBV"> Sejam Bem-Vindos</div>
            <br/>
            <button onClick={listar}>Listar</button>
            <br/>
            <div className="lista-produtos">
                <Carousel
                responsive={CarouselConfig}
                infinite={true}
                showdots={true}
                ContainerClass="carousel-container">
                {produtos.map(item =>
                    <Produto infos={item}/>
                    )}
                 </Carousel>
            </div>
        </Container>
    )
}