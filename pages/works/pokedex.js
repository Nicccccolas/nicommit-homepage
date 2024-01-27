import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Pokedex">
      <Container>
        <Title>
          Pokedex <Badge>2022</Badge>
        </Title>
        <P>
          &ldquo;My Pokedex Project&rdquo; is a captivating endeavor I
          developed, delving into the expansive world of Pokemon. Leveraging the
          Pokemon character API, I&apos;ve crafted an interactive Pokedex that
          allows users to explore and discover detailed information about their
          favorite Pokemon. From statistics to abilities and evolutions, every
          detail is at your fingertips. This Pokedex not only presents essential
          data but also provides a visually appealing experience, featuring
          high-quality images of each Pokemon. Immerse yourself in the Pokemon
          universe and uncover the magic of these adorable creatures through my
          Pokedex project, an ode to my passion for programming and exploring
          virtual worlds!
        </P>
        <List mt={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://pokeniko.netlify.app/" target="_blank">
              pokeniko.netlify.app <ExternalLinkIcon mx="2px" />
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
          <WorkImage src="/images/pokedex01.png" alt="Pokedex" />
          <WorkImage src="/images/pokedex02.png" alt="Pokedex" />
          <WorkImage src="/images/pokedex03.png" alt="Pokedex" />
          <WorkImage src="/images/pokedex04.png" alt="Pokedex" />
        </List>
      </Container>
    </Layout>
  )
}

export default Work
