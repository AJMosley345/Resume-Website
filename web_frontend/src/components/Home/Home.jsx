import React, { Suspense } from 'react';
import General from './GeneralInfo/General';
import Skills from './Skills/Skills';
import Header from './Base/Header';
import './Home.css';
import { Divider } from '@mui/material';

function Home () {
    return (
        <div className="background">
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <Divider variant="middle" />
                <General />
                <Skills />
            </Suspense>
        </div>
    )
}

export default Home