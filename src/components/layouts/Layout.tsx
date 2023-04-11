import Head from "next/head"
import { FC, ReactNode } from "react"
import { Navbar } from "../ui"

interface Props {
    children?: ReactNode,
    title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {
  return(
    <>
        <Head>
            <title>{ title || "Pokemon App" }</title>
            <meta name="author" content="Ivan Panussis" />
            <meta name="description" content={`Information about the pokemon ${ title }`}/>
            <meta name="keywords" content={`${ title }, pokemon, pokedex` }/>
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
