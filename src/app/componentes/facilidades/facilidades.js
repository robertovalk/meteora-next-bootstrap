'use client'

import styled from "styled-components";
import Image from "next/image";





const Container = styled('div')`
    background-color: var(--preto);
    margin-top: 3em;
    padding: 3em 1em;
    display: flex;
    flex-direction: column;
    align-items: center;

    .Title {
        text-align: center;
        font-size: 30px;
        font-weight: 500;
        color: var(--branco);
        margin-bottom: 2em;

      
    }

    .facilidadeTitle {
        color: var(--verde);
    }

    p {
        color: var(--branco);
    }

    .containers {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;
        

        @media (min-width: 1024px) {
            display: flex;
            flex-direction: row;
            padding: 0 2em;
        }
       
    }

    .containerConteudo {
        display: flex;
        justify-content: center;
        align-items: baseline;
        gap: 20px;

    }

    .midle {
        
        @media (min-width: 768px) {
            margin: 0 30px;
        }
    }

    


`

export default function Facilidades(){
    return (
        <Container>
            <h3 className="Title">Conheça todas as nossas facilidades</h3>


            <div className="containers">
                <div className="containerConteudo">
                    <div>
                        
                        <Image
                        src="/iconPix.svg"
                        alt="Vercel Logo"      
                        width={56}
                        height={56}
                        priority
                        />
                       
                    </div>
                    <div>
                        <h4 className="facilidadeTitle">PAGUE PELO PIX</h4>
                        <p>Ganhe 5% OFF em<br/> pagamentos via PIX</p>
                    </div>
                </div>

                <div className="containerConteudo midle">
                    <div>
                        
                        <Image
                        src="/iconRetorna.svg"
                        alt="Vercel Logo"      
                        width={56}
                        height={56}
                        priority
                        />
                        
                    </div>
                    <div>
                        <h4 className="facilidadeTitle">TROCA GRÁTIS</h4>
                        <p>Fique livre para trocar em até<br/> 30 dias.</p>
                    </div>
                </div>

                <div className="containerConteudo">
                    <div>
                        
                        <Image 
                        src="/iconFlor.svg"
                        alt="Vercel Logo"      
                        width={56}
                        height={56}
                        priority
                        />
                        
                    </div>
                    <div>
                        <h4 className="facilidadeTitle">SUSTENTABILIDADE</h4>
                        <p>Moda responsável, que respeita<br/> o meio ambiente.</p>
                    </div>
                </div>
            </div>
        </Container>

    
    )
}