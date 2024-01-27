import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Rick & Morty">
      <Container>
        <Title>
          Rick & Morty <Badge>2022</Badge>
        </Title>
        <P>
          &ldquo;Rick & Morty Explorer&rdquo; is an application I built as one
          of my initial projects. It delves into the fascinating universe of the
          animated series &rdquo;Rick and Morty&rdquo;, utilizing the character
          API to offer users an interactive experience. Explore the extensive
          gallery of characters, learn details about their stories and unique
          traits, and enjoy a glimpse into this chaotic and humor-filled
          universe. The application provides detailed information about each
          character, from their origins to standout episodes in which they
          appear. Discover the world of &ldquo;Rick and Morty&rdquo; in a fun
          and informative way through this app, which reflects one of my early
          ventures into app development!
        </P>
        <List mt={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://rickandmortyapp-bynico.netlify.app/"
              target="_blank"
            >
              rickandmortyapp-bynico.netlify.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>
              <span>Windows/Linux</span>
            </Meta>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, React.js</span>
          </ListItem>
          <WorkImage src="/images/rickmorty01.png" alt="Rick & Morty" />
          <WorkImage src="/images/rickmorty02.png" alt="Rick & Morty" />
        </List>
      </Container>
    </Layout>
  )
}

export default Work
