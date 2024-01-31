import {
  Container,
  Heading /*SimpleGrid*/,
  Divider,
  Link
} from '@chakra-ui/react'
import Section from '../components/section'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import TechStack from '../components/techstack'

const Bio = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h2" fontSize={28} mb={4} mt={4}>
          Bio
        </Heading>

        <Divider my={4} />

        <Section delay={0.1}>
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
            Complete the Full-Stack Web Development and Computer Science Program
            at Academlo.
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
        </Section>

        <Divider my={4} />

        <Section delay={0.2}>
          <Section delay={0.3}>
            <Heading as="h3" variant="section-title">
              I ❤
            </Heading>
            <Paragraph>
              Family,{' '}
              <Link
                href="https://open.spotify.com/playlist/7ETbaX34v31mWeQYo3lac7?si=dbb23dc31fa44420"
                target="_blank"
              >
                Music
              </Link>
              , Playing Turntable, Concerts and Festivals, Cybersecurity.
            </Paragraph>
          </Section>

          <Divider my={4} />

          <Section delay={0.2}>
            <Section delay={0.3}>
              <Heading as="h3" variant="section-title">
                Tech Stack
              </Heading>
              <TechStack />
            </Section>
          </Section>
        </Section>
      </Container>
    </Layout>
  )
}

export default Bio
