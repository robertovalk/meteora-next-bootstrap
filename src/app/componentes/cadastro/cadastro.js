'use client'

import styled from "styled-components";

const Container = styled('div') `
    display: flex;
    flex-direction: column;
    align-itens: center;
    justify-content: center;
    gap: 10px;
    margin: 15px;
    padding: 30px 5px;
    border: 1px solid #000000;
}

.cadastroTexto {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
}

.inputs {
    display: flex;
    justify-content: center;
    outline: none;
    border: transparent;

    
}

.inputBusca {
    width:244.44px;
    height: 38px;
}

.inputButton {
    width: 84px;
    height: 38px;
    background-color: var(--roxo);
    color: var(--branco);
    font-size: 16px;
    font-weight: 500;
    letter: 0.46px;

}

`

export default function Cadastro(){
    return (
        <Container>
            <div>
                <p className="cadastroTexto">
                    Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
                </p>
            </div>

            <div className="inputs">
                <input className="inputBusca" type="text" placeholder="Digite seu e-mail"/>
                <button className="inputButton">Enviar</button>
            </div>
        </Container>
    )
}