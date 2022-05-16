import { FC } from "react";
import Head from "next/head";
import { Navbar } from '../ui';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
        <Head>
            <title>{ title || "Pokemon App" }</title>
            <meta name="author" content="Edwin Avilez" />
            <meta name="description" content={`Información sobre el Pokémon ${title}`} />
            <meta name="keywords" content={`${title}, pokemon, pokedex`}  />

            <meta property="og:title" content={`Información sobre ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding: '0 20px'
        }}>
            { children }
        </main>
    </>
  )
}
