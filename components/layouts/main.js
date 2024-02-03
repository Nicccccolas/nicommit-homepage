import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar.js'
import Head from 'next/head'
import Footer from '../footer.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Nicccccolas - Homepage</title>
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
