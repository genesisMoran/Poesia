import React from 'react';

function Header(props) {
    const { links } = props;
    return (
        <main>
            <section class="hero is-medium is-primary is-bold">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    Poesía
                  </h1>
                  <h2 class="subtitle">
                    A place where users share their poetry, heart and letters.
                  </h2>
                </div>
              </div>
            </section>
            <div>
                {links.map(link => {
                    return <div
                            key={link}
                            className="links"
                            onClick={() => props.onClick(link)}>
                            {link}
                            </div>
                })}
            </div>
        </main>
    )
}

export default Header;
