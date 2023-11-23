import React from 'react';
import headerMobile from '@/assets/images/header-mobile.svg';
import headerDesktop from '@/assets/images/header-desktop.svg';
interface Props {
  children: React.ReactNode;
}
export const Layout: React.FC<Props> = props => {
  const { children } = props;
  return (
    <>
      <header>
        <h1>
          <picture>
            <source media="(max-width: 700px)" srcSet={headerMobile} />
            <source srcSet={headerDesktop} />
            <img
              src="./assets/images/header-desktop.svg"
              alt="Mortadelo y Filemón: personajes"
            />
          </picture>
        </h1>
      </header>
      <main className="main">{children}</main>
      <footer>
        <p>Desarrollado con React, Typescript, Sass, y Vite</p>
      </footer>
    </>
  );
};
