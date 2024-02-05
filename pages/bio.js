import { Container, Box, Heading, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import TechStack from '../components/techstack'

const Bio = () => {
  return (
    <Layout>
      <Container
        maxW="container.lg"
        px={{ base: 'initial', md: '4em' }}
        mb={10}
      >
        <Heading as="h2" fontSize={28} my={8} variant="section-title">
          Bio
        </Heading>

        <Divider my={8} />

        <Section delay={0.1}>
          <Box paddingX={{ base: '14px', md: '2.5em' }}>
            <BioSection>
              <BioYear>1993</BioYear>
              Born in Ipiales, Colombia.
            </BioSection>
            <BioSection>
              <BioYear>2015</BioYear>
              Worked as an administrator at KOAJ - Inveco / Colombia.
            </BioSection>
            <BioSection>
              <BioYear> 2022</BioYear>
              Complete the Full-Stack Web Development and Computer Science
              Program at Academlo.
            </BioSection>
            <BioSection>
              <BioYear>2022</BioYear>
              Worked as at intern in Colombian T.I Software.
            </BioSection>
            <BioSection>
              <BioYear>2023</BioYear>
              Worked as a Backend developer at ISOS GROUP / Perú.
            </BioSection>
            <BioSection>
              <BioYear>2023 to present</BioYear>
              Working as a freelancer.
            </BioSection>
          </Box>
        </Section>
        <Divider my={4} />

        <Section delay={0.2}>
          <Section delay={0.3}>
            <Heading my={8} as="h2" fontSize={28} variant="section-title">
              Tech Stack
            </Heading>
            <TechStack />
          </Section>
        </Section>
      </Container>
    </Layout>
  )
}

export default Bio
