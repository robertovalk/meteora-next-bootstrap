'use client'

import Image from "next/image"
import styled from "styled-components";
import Link from "next/link";

const Container = styled('ul') `
    display: flex;
    flex-wrap: wrap;
    align-itens: center;
    justify-content: center;
    gap: 32px;

`
 


export default function CategoriasItens () {
    return (

        <Container>
            <li> 
            <Link href='/camisetas'>
            <Image className='ImgMobile'
            src="/camiseta.svg"
            alt="Vercel Logo"      
            width={146}
            height={192}
            priority
            />
            </Link>
            </li>
            <li> 
            <Link href='#'>
            <Image className='ImgMobile'
            src="/bolsas.svg"
            alt="Vercel Logo"      
            width={146}
            height={192}
            priority
            />
            </Link>
            </li>
            <li> 
            <Link href='#'>
            <Image className='ImgMobile'
            src="/calçados.svg"
            alt="Vercel Logo"      
            width={146}
            height={192}
            priority
            />
            </Link>
            </li>
            <li> 
            <Link href='#'>
            <Image className='ImgMobile'
            src="/calças.svg"
            alt="Vercel Logo"      
            width={146}
            height={192}
            priority
            />
            </Link>
            </li>
            <li> 
            <Link href='#'>
            <Image className='ImgMobile'
            src="/casacos.svg"
            alt="Vercel Logo"      
            width={146}
            height={192}
            priority
            />
            </Link>
            </li>
            <li> 
            <Link href='#'>
            <Image className='ImgMobile'
            src="/oculos.svg"
            alt="Vercel Logo"      
            width={146}
            height={192}
            priority
            />
            </Link>
            </li>
        </Container>
    )
}