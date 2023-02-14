import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import AboutMe from './pages/AboutMe';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}