import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Resume from './pages/Resume'

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
        if (currentPage === 'Resume') {
            return <Resume />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div class="has-background-warning-light">
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}/>
            <div class="section is-large">
                {renderPage()}
            </div>
            <Footer/>
        </div>
    )
}