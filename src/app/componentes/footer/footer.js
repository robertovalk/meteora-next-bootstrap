'use client'


import styled from "styled-components";

const Container = styled('div')`
    background-color: var(--preto);

    padding: 17px 23px 17px 23px;

    .footerTexto {
        color: var(--branco);
        font-size: 13px;
        font-weight: 400;
        line-height: 20px;
        text-align: center;
        margin: 0;
    }

`


export default function Footer() {
    return (

        <Container>
            <p className="footerTexto">2023 © Desenvolvido por Roberto Falcão | Projeto fictício sem fins comerciais.</p>


        </Container>
    )
}