import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Button,
  Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

export default function Page() {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hi, I&apos;m a Software Developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nicolás Pantoja
          </Heading>
          <p>Digital Anthropos ( Dad / Developer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/NicolasPantoja.jpeg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Nicolás is a software developer based in Ipiales, Colombia, where his
          passion for backend code takes flight. He thrives on crafting digital
          services that enhance people&apos;s lives, and his talent for
          connecting with others fuels his ability to solve problems and conjure
          innovative ideas. When he&apos;s not coding, Nicolás immerses himself
          in the world of music, savoring the sounds of his LP collection and
          sharing his passion with his son.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
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
          ar Academlo.
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
            , Playing Turntable, Concerts and Festivals, Cybersecurity
          </Paragraph>
        </Section>
      </Section>
    </Container>
  )
}
