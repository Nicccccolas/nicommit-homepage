import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'
import Head from 'next/head'
import Footer from '../footer.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Nicolás Pantoja Díaz" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Nicolás Pantoja Díaz" />
        <meta name="og:title" content="Nicolas Pantoja Díaz" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://i.postimg.cc/MH55VxdH/logo3.png"
        />
        <title>Nicolás Pantoja Díaz - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.xl" pt={20}>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
