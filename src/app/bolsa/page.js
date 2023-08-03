'use client'

import styled from "styled-components";
import Image from "next/image";

const Container = styled('div')`
    border: 1px solid #000;
    margin: 1em;
    display: flex;
    flex-direction: column;

    @media (min-width:768px) {
        display: grid;
        grid-template-columns: 41% 59%;
        align-items: flex-start;
        border: none;
    }

    .Img-details {
        object-fit: cover;
        width:100%;
        border-radius: 4px 4px 0 0;

        @media (min-width: 768px) {
            max-width: 350px;
            height: 422px;
        }
    }

`

const ContainerInfo = styled('div')`
    padding: 1em;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .title-info {
        font-size: 16px;
        font-weight: 700;
        color: #212529;
    }

    .description-info {
        font-size: 13px;
        font-weight: 400;
        color: #212529;
        border-bottom: 1px solid #000;
        padding-bottom: 1em

    }

    .price-info {
        color: #212529;
        font-weight: 500;
        font-size: 20px;
    }

    .disclaimer {
        color: #ADB5BD;
        font-size: 13px;
        font-weight: 400;
        border-bottom: 1px solid #ADB5BD;
        padding-bottom: 1em;
    }

    .subtitle-info {
        font-size: 13px;
        font-weight: 700;
    }

    label {
        font-size: 13px;
        fonwt-weight:400;
        color:#212529;
    }

    .fieldset-color {
        display: flex;
        border-bottom: 1px solid #ADB5BD;
        padding-bottom: 1em;
    }

    .cores-input {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .first-input {
        accent-color: #75D7F0;
        outline: none;
    }

    .midle-input {
        margin: 0px 8px;
        accent-color: #DEE2E6;
        outline: none;
    }

    .last-input {
        accent-color: #000000;
        outline: none;
        
    } 

    .fieldset-size {
        justify-content: flex-start;
        display: flex;
        gap: 20px;

    }

    .size-input {
        display: flex;
        flex-direction: column;
    }

    .button-add-cart {
        background-color: #9353FF;
        color: #ffffff;
        font-size: 16px;
        font-weight: 500;
        letter: 0.46px;
        outline: none;
        border-color: transparent;
        padding: 9px 16px 9px 16px;
    }


`

export default function Bolsa() {
    return (
        <Container>

            <Image className='Img-details'
                src="/Cardbolsa.svg"
                alt="Vercel Logo"
                width={323}
                height={402}
                objectFit="fill"
                priority
            />

            <ContainerInfo>
                <h3 className="title-info">Camiseta Conforto</h3>

                <p className="description-info">Modelo unissex oversized com gola de camurça. Atemporal e autêntica!</p>



                <p className="price-info">R$ 150,00</p>

                <p className="disclaimer">Vendido e entregue por Riachuelo</p>

                <h4 className="subtitle-info color">Cores:</h4>

                <fieldset className="fieldset-color">
                    <div className="cores-input first-input">
                        <input type="radio" id="azul-claro" name="cor" value="azul-claro" checked />
                        <label for="azul-claro">azul-claro</label>
                    </div>

                    <div className="cores-input midle-input">
                        <input type="radio" id="off-white" name="cor" value="off-white" />
                        <label for="off-white">off-white</label>
                    </div>

                    <div className="cores-input last-input">
                        <input type="radio" id="preto" name="cor" value="preto" />
                        <label for="preto">preto</label>
                    </div>
                </fieldset>
                
                <h4 className="subtitle-info size">Tamanho:</h4>
                
                <fieldset className="fieldset-size">
                    <div className="size-input">
                        <input type="radio" id="azul-claro" name="cor" value="azul-claro" checked />
                        <label for="azul-claro">P</label>
                    </div>

                    <div className="size-input">
                        <input type="radio" id="off-white" name="cor" value="off-white" />
                        <label for="off-white">PP</label>
                    </div>

                    <div className="size-input">
                        <input type="radio" id="preto" name="cor" value="preto" />
                        <label for="preto">M</label>
                    </div>

                    <div className="size-input">
                        <input type="radio" id="preto" name="cor" value="preto" />
                        <label for="preto">G</label>
                    </div>

                    <div className="size-input">
                        <input type="radio" id="preto" name="cor" value="preto" />
                        <label for="preto">GG</label>
                    </div>

                   
                </fieldset>
                <div>
                    <input class="button-add-cart" type="button" value="Adicionar à sacola"/>
                </div>
            </ContainerInfo>
        </Container>
    )
}