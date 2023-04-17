import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui"

interface Props {
    children?: ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return(
    <>
        <Head>
            <title>{ title || "Pokemon App" }</title>
            <meta name="author" content="Ivan Panussis" />
            <meta name="description" content={`Information about the pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex` }/>
            
            <meta property="og:title" content={`Information about the Pokemon: ${ title }`} />
            <meta property="og:description" content={`This page contain information about ${ title }, dont share it... its for you...`} />
            <meta property="og:image" content={`${ origin }/img/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
