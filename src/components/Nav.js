import React from 'react';

export default function Nav({currentPage, handlePageChange}) {
    return (
        <nav class="navbar is-danger-light">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://github.com/FruityOkapi">
                <img src="./assets/images/Illustration.png" width="112" height="28"></img>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu is-info">
                <div class="navbar-start">
                <a class="navbar-item" onClick={() => handlePageChange('AboutMe')}>
                    About Me
                </a>
            
                <a class="navbar-item" onClick={() => handlePageChange('Projects')}>
                    Projects
                </a>

                <a class="navbar-item" onClick={() => handlePageChange('Contact')}>
                    Contact Me
                </a>
                </div>
            </div>
        </nav>
    )
}