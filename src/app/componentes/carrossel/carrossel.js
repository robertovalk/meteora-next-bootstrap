'use client'

import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import styled from "styled-components";


const ContainerMobile = styled('div')`
  
  @media (min-width: 768px) {
    display: none;

  }
`

const ContainerDsktp =styled('div')`
  
  display: none;

  @media (min-width: 768px) {

    display: block;
    margin: 25px 0;

  }



`


const Title = styled('h3') `
  font-size: 32px;
  font-weight: 500;
  color: var(--branco);

  .legendaCarrossel {
    font-size: 16px;
    font-weight:400;
    line-height: 23px;
  }

  @media (min-width: 768px) {
    font-size: 48px;
    font-weight: 500;
  }

  .legendaCarrosselDsktp {
    font-size: 20px;
    font-weight: 400;
  }


`

export default function UncontrolledExample() {
  return (
    <>
      <ContainerMobile>
      <Carousel>
        <Carousel.Item className='carouselItem'>
        <Image className='ImgMobile'
          src="/bannerCarrossel1.svg"
          alt="Vercel Logo"      
          width={375}
          height={415}
          priority
          />
        </Carousel.Item>
        <Carousel.Item>
        <Image className='img.mobile'
          src="/bannerCarrossel2.svg"
          alt="Vercel Logo"      
          width={375}
          height={415}
          priority
          />
        </Carousel.Item>
        <Carousel.Item>
        <Image className='img.mobile'
          src="/bannerCarrossel3.svg"
          alt="Vercel Logo"      
          width={375}
          height={415}
          priority
          />
          
          <Carousel.Caption>
            <Title>COLEÇÃO ATEMPORAL</Title>
            <p className='legendaCarrossel'>
            Alto impacto visual, baixo impacto ambiental.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </ContainerMobile>

      <ContainerDsktp>
      <Carousel className='carouselDsktp'>
        <Carousel.Item>
        <Image
          src="/banner1.svg"
          alt="Vercel Logo"      
          width={1440}
          height={415}
          priority
        />
        </Carousel.Item>
        <Carousel.Item>
        <Image
          src="/banner2.svg"
          alt="Vercel Logo"      
          width={1440}
          height={415}
          priority
          />
          <Carousel.Caption className='carouselCaption'>
            <Title>COLEÇÃO ATEMPORAL</Title>
            <p className='legendaCarrossel'>
            Estilo e qualidade para durar. 
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image
          src="/banner3.svg"
          alt="Vercel Logo"      
          width={1440}
          height={415}
          priority
          />
          <Carousel.Caption className='carouselCaption'>
            <Title>COLEÇÃO ATEMPORAL</Title>
            <p>
            Alto impacto visual, baixo impacto ambiental.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </ContainerDsktp>
    </>
  );
}
