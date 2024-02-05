import { Text, Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Pokedex">
      <Container
        maxW="container.lg"
        px={{ base: 'initial', md: '4em' }}
        mb={10}
      >
        <Title>
          Pokedex <Badge>2022</Badge>
        </Title>
        <P>
          &ldquo;RetroClima&rdquo; is my latest creation, a web app that
          seamlessly blends modern functionality with the nostalgic aesthetics
          of retro video games. Drawing inspiration from the pixelated graphics
          and ambiance of classic games, this application provides real-time
          weather updates based on user geolocation. The user interface is
          crafted with pixelated elements and vibrant colors, invoking the
          nostalgia of beloved games. Get accurate weather information for your
          current location in a fun and unique way. RetroWeather is more than
          just a practical tool; it&apos;s a journey through time, blending the
          modern with the classic in a distinctive manner.
        </P>
        <List mt={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://weatherapp-nicolas.netlify.app/"
              target="_blank"
              fontsize={{ base: '14px', md: '17px' }}
            >
              weatherapp-nicolas.netlify.app
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>
              <span>Windows/Linux</span>
            </Meta>
          </ListItem>
          <ListItem display="flex" justifyItems="left" alignItems="center">
            <Meta>Stack</Meta>
            <Text fontSize={{ base: 'initial', md: '17px' }}>
              JavaScript, React.js
            </Text>
          </ListItem>
          <WorkImage src="/images/weather01.png" alt="Pokedex" />
          <WorkImage src="/images/weather02.png" alt="Pokedex" />
        </List>
      </Container>
    </Layout>
  )
}

export default Work
