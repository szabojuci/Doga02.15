import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SzallasPost } from './SzallasPost';
import {SzallasDelete} from './SzallasDelete';
import { SzallasPut } from './SzallasPut';
import { Bejelentkezes } from './Bejelentkezes';

function Admin() {
    return (
        <Bejelentkezes/>
     
    )
}

export default Admin;