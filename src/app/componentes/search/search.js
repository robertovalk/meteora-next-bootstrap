'use client'

import styled from "styled-components";




const Container = styled('div')`
 
   display: flex;
   align-itens: center;
   justify-content: center;
   gap: 10px;
   margin: 5em 0em 2em 0em;
   
   @media (min-width: 1024px) {
    display: none;
    margin: 25px 0;

    }
  } 




   
    input {
        background-color: var(--branco);
        border: 1px solid #000000;
        display: flex;
        width: 225.6px;
        height: 38px;
        padding: 13px;
        outline: none:

    }


    input:focus {
        color: none;
    }

    input::placeholder {
        color: #6C757D;
    }

    button {
        width: 88.42px;
        height: 37px;
        background-color: var(--branco);
        font-size: 16px;
        font-weight: bold;
        border: 1px solid #000000;
        cursor: pointer;
        opacity: 1;
        transition: all .8s ease;
        outline: none
    }
    
    button: hover {
        opacity: 0.5;
    }



`;

export default function Input() {
    return (

        <Container>
            <input type="text" placeholder="Digite o Produto"/>
            <button>Search</button>
        </Container>


        
    )
}