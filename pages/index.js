import {
  Container,
  Box,
  Heading,
  Button,
  Link,
  // SimpleGrid,
  ListItem,
  List,
  Icon,
  Text
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoTwitter,
  // IoLogoDiscord,
  IoLogoGithub,
  IoLogoInstagram
} from 'react-icons/io5'
import { FaLastfm } from 'react-icons/fa6'
import Paragraph from '../components/paragraph'
// import { GridItem } from '../components/grid-item'

export default function Page() {
  return (
    <Layout>
      <Container height="100vh" width="100%">
        {/* <Box */}
        {/*   // height="100vh" */}
        {/*   // width="100%" */}
        {/*   mt={3} */}
        {/*   display={{ md: 'flex' }} */}
        {/*   // borderRadius={useColorModeValue('lg', 'none')} */}
        {/*   // border={useColorModeValue('none', '2px dashed #ee454040')} */}
        {/*   bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.100')} */}
        {/*   p={3} */}
        {/*   mb={6} */}
        {/*   align="center" */}
        {/* > */}
        <Box
          display="flex"
          flexDir="column"
          align="center"
          flexGrow={1}
          justifyContent="center"
          height="100%"
          // textAlign={{ base: 'center', md: 'initial' }}
        >
          <Box textAlign="left" maxW="400px">
            <Heading as="h2" variant="page-title" letterSpacing="-0.02em">
              <Text
                fontWeight="light"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                display="inline"
              >
                Hi, I&apos;m{' '}
              </Text>
              <Text
                as="p"
                fontWeight="bold"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                display="inline"
                textDecoration="line-through"
              >
                {' '}
                Nicolás Pantoja,
              </Text>
              <Text
                as="span"
                fontWeight="light"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                display="inline"
                textDecoration="line-through"
                whiteSpace="none"
              >
                {''} a.k.a{''}
              </Text>
              <Text
                as="span"
                fontWeight="bold"
                fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}
                display="inline"
                textDecoration="none"
              >
                {'\u00A0'}
                Nicccccolas
              </Text>
            </Heading>
            <Text fontSize={{ base: '2xl', md: '3xl', lg: '4x1' }}>
              Digital Anthropos
            </Text>
            <p>Software Developer!</p>
          </Box>
        </Box>
      </Container>

      <Container>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            Nicolás is a software developer based in Ipiales, Colombia, where
            his passion for backend code takes flight. He thrives on crafting
            digital services that enhance people&apos;s lives, and his talent
            for connecting with others fuels his ability to solve problems and
            conjure innovative ideas. When he&apos;s not coding, Nicolás
            immerses himself in the world of music, savoring the sounds of his
            LP collection and sharing his passion with his son.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Nicccccolas" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @Nicccccolas
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.x.com/niccommit" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @niccommit
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://instagram.com/nicccccolass" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoInstagram} />}
                >
                  @nicccccolass
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.last.fm/user/Nicccccolas" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={FaLastfm} />}
                >
                  @Nicccccolas
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}
