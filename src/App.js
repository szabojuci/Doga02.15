import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import  UserSzallasGet  from './SzallasGet';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Admin from './Admin';
import { Bejelentkezes } from './Bejelentkezes';
import 'bootstrap/dist/css/bootstrap.css';
import { SzallasPost } from './SzallasPost';
import { SzallasDelete } from './SzallasDelete';
import { SzallasPut } from './SzallasPut';
import AdminSzallasGet  from './AdminSzallasGet';


function App() {

  return (
    <BrowserRouter>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="*">Users</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              
              <Nav.Link href="/admin">Admin</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<AdminSzallasGet/>}/>
        <Route path="*" element={<UserSzallasGet />} />
        <Route path="/get-all" element={<UserSzallasGet />} />
        <Route path="/admin/get-all" element={<AdminSzallasGet/>} />

        <Route path="/post" element={<SzallasPost />} />
        <Route path="/delete/:szallasId" element={<SzallasDelete />} />
        <Route path="/put/:szallasId" element={<SzallasPut />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
