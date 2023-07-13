'use client'


import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Link = styled('a')`
  color: var(--branco);
  text-decoration: none;
  transition: all .4s ease-in;
  &:hover {
    color: var(--verde);
  }
  
`;

const ContainerSearch = styled('div')`
  display: none;

  @media (min-width: 1024px) {
    display: block;

  }

`


export default function NavScrollExample() {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">
        <Image 
        src="/LogoMobile.svg"
        alt="Vercel Logo"      
        width={125.7}
        height={18}
        priority
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '150px' }}
            
          >
            <Nav.Link href="#action1"><Link>Home</Link></Nav.Link>
            <Nav.Link href="#action2"><Link>Nossas Lojas</Link></Nav.Link>
            <Nav.Link href="#action2"><Link>Novidades</Link></Nav.Link>
            <Nav.Link href="#action2"><Link>Promoções</Link></Nav.Link>

          </Nav>
          <ContainerSearch>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </ContainerSearch>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}








