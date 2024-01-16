import { Container, Box, Heading } from '@chakra-ui/react'

export default function Page() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;m a software developer based in Colombia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nicolás Pantoja
          </Heading>
          <p>Digital Anthropos ( Father / Developer / Designer )</p>
        </Box>
      </Box>
    </Container>
  )
}
