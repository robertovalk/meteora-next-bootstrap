'use client'


import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


const Container = styled('ul')`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    padding: 0 20px;
    gap: 40px;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: auto auto;
    }

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .listaItem {
        border: 1px solid #c5c5c5;
        border-radius: 4px;
        max-width: 350px;
     
    }

    .ImgMobile {
        object-fit: cover;
        width: 100%;
        border-radius: 4px 4px 0 0;
    }

    spam {
        margin:20px;
        
    }

    .nomeProduto {
        padding: 0 10px;
    }

    .descricao {
        font-size: 16px;
        font-weight: 400;
        color: #212529;
        padding: 0 10px;
    }

    .valor {
        font-size: 16px;
        font-weight: 700;
        color: #212529;
        padding: 0 10px;
    }

    .botaoVerMais {
        color: var(--branco);
        background-color: var(--roxo);
        width: 102px;
        height: 37px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        margin: 0 10px;
        
    }




`

export default function Produtos() {
    return (
        <Container>

            <li className="listaItem">
                <Image className='ImgMobile'
                    src="/Cardcamiseta.svg"
                    alt="Vercel Logo"
                    width={323}
                    height={402}
                    objectFit="cover"
                    priority
                />

                <spam>
                    <h4 className="nomeProduto">Camiseta Conforto</h4>

                    <p className="descricao">Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.</p>

                    <p className="valor">R$ 70,00</p>

                    <Link href='/camisetas' className="botaoVerMais">Ver Mais</Link>
                </spam>
            </li>

            <li className="listaItem">
                <Image className='ImgMobile'
                    src="/Cardcalça.svg"
                    alt="Vercel Logo"
                    width={323}
                    height={402}
                    objectFit="cover"
                    priority
                />

                <spam>
                    <h4 className="nomeProduto">Calça Alfaiataria</h4>

                    <p className="descricao">Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!</p>

                    <p className="valor">R$ 180,00</p>

                    <Link href='/calca' className="botaoVerMais">Ver Mais</Link>
                </spam>
            </li>


            <li className="listaItem">
                <Image className='ImgMobile'
                    src="/Cardtenis.svg"
                    alt="Vercel Logo"
                    width={323}
                    height={402}
                    objectFit="cover"
                    priority
                />

                <spam>
                    <h4 className="nomeProduto">Tênis Chunky</h4>

                    <p className="descricao">Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.</p>

                    <p className="valor">R$ 250,00</p>

                    <Link href='/tenis' className="botaoVerMais">Ver Mais</Link>
                </spam>
            </li>

            <li className="listaItem">
                <Image className='ImgMobile'
                    src="/Cardjaquetajeans.svg"
                    alt="Vercel Logo"
                    width={323}
                    height={402}
                    objectFit="cover"
                    priority
                />

                <spam>
                    <h4 className="nomeProduto">Jaqueta Jeans</h4>

                    <p className="descricao">Modelo unissex oversized com gola de camurça. Atemporal e autêntica!</p>

                    <p className="valor">R$ 150,00</p>

                    <Link href='/jaqueta' className="botaoVerMais">Ver Mais</Link>
                </spam>
            </li>

            <li className="listaItem">
                <Image className='ImgMobile'
                    src="/Cardsoculos.svg"
                    alt="Vercel Logo"
                    width={323}
                    height={402}
                    objectFit="cover"
                    priority
                />

                <spam>
                    <h4 className="nomeProduto">Óculos Redondo</h4>

                    <p className="descricao">Armação metálica em grafite com lentes arredondadas. Sem erro!</p>

                    <p className="valor">R$ 120,00</p>

                    <Link href='/oculos' className="botaoVerMais">Ver Mais</Link>
                </spam>
            </li>

            <li className="listaItem">
                <Image className='ImgMobile'
                    src="/Cardbolsa.svg"
                    alt="Vercel Logo"
                    width={323}
                    height={402}
                    objectFit="cover"
                    priority
                />

                <spam>
                    <h4 className="nomeProduto">Bolsa coringa</h4>

                    <p className="descricao">Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!</p>

                    <p className="valor">R$ 120,00</p>

                    <Link href='/bolsa' className="botaoVerMais">Ver Mais</Link>
                </spam>
            </li>



        </Container>
    )
}