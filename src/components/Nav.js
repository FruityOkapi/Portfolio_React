import React from 'react';

export default function Nav({currentPage, handlePageChange}) {
    const navbarScript = 
    `$(document).ready(function() {
        $(".navbar-burger").click(function() {
            $(".navbar-burger").toggleClass("is-active");
            $(".navbar-menu").toggleClass("is-active");
        });
      });`

    return (
        <nav class="navbar has-background-danger-light">
            <div class="container">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://github.com/FruityOkapi">
                <img src="https://github.com/FruityOkapi/Portfolio/blob/main/assets/images/Illustration.png?raw=true" width="112" height="28"></img>
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
                <a class="navbar-item" onClick={() => handlePageChange('Resume')}>
                    Resume
                </a>
                </div>
            </div>
            <script>
                {navbarScript}
            </script>
            </div>
        </nav>
    )
}