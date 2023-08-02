'use client'

import  Header from './componentes/header/header';
import Input from './componentes/search/search';
import Carrossel from './componentes/carrossel/carrossel';
import styled from "styled-components";
import CategoriasItens from './componentes/categoriasItens/categoriasItens';
import Produtos from './componentes/produtos/produtos';
import Facilidades from './componentes/facilidades/facilidades';
import Cadastro from './componentes/cadastro/cadastro';
import Footer from './componentes/footer/footer';









const ContainerTitle = styled('div')`
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: 500;
  color: #212529;
  padding: 3em 0;
  
`;


export default function Home() {
  return (

    <>
      <Header/>

      <Input/>
      
      <Carrossel/>

      <ContainerTitle>
        <h3>Busque por categoria:</h3>
      </ContainerTitle>

      <CategoriasItens/>
      
    
      
     
      <ContainerTitle>
        <h3>Produtos que estão bombando!</h3>
      </ContainerTitle>

      <Produtos/>

      <Facilidades/>

      <Cadastro/>

      <Footer/>

      

      
      

      


    </>
  )
}
