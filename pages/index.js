import { Container, Box, Heading, Text } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import About from './about'

export default function Page() {
  return (
    <Layout>
      <Container maxW="container.lg" /*pl={{ base: '1.9em', lg: '4em' }}*/>
        <Section delay={0.1}>
          <Box
            height="100vh"
            width="100%"
            display="flex"
            flexDir="column"
            flexGrow={1}
            justifyContent="center"
            textAlign="left"
            mt={-20}
            // mb={-10}
          >
            <Heading
              as="h1"
              fontWeight="light"
              fontFamily="'Roboto'"
              fontSize={{ base: '3.8em', md: '6em' }}
              mb={4}
            >
              Hi, I&apos;m{' '}
              <Box as="span" textDecoration="line-through">
                <b fontWeight="bold">Nicolás Pantoja</b>, <br />
                a.k.a
              </Box>{' '}
              <b>Nicommit.</b>
            </Heading>
            <Text fontSize="1em">Digital Anthropos</Text>
            <Text fontWeight="bold" fontSize="1.1em">
              Software Developer.
            </Text>
          </Box>
        </Section>
      </Container>{' '}
      <About />
    </Layout>
  )
}
