import { Text, Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Trip-Ties">
      <Container
        maxW="container.lg"
        px={{ base: 'initial', md: '4em' }}
        mb={10}
      >
        <Title>
          Trip-Ties <Badge>2023</Badge>
        </Title>
        <P>
          Trip-Ties is an exciting social network designed exclusively for
          passionate travelers. It provides users with the opportunity to share
          their travel experiences interactively, allowing them to share photos
          and videos while tagging the places they visit. The platform features
          a trends filter that highlights the most popular and tagged locations
          providing the community with an instant glimpse of trending
          destinations. With Trip-Ties, travel becomes a collective and
          enriching experience.
        </P>
        <List mt={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link
              href="https://tripties.vercel.app"
              target="_blank"
              fontSize={{ base: 'initial', md: '17px' }}
            >
              www.tripties.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>
              <span>Windows/macOs/Linux</span>
            </Meta>
          </ListItem>
          <ListItem display="flex" justifyItems="left" alignItems="center">
            <Meta>Stack</Meta>
            <Text fontSize={{ base: '14px', md: '17px' }}>
              Node.js, React.js
            </Text>
          </ListItem>
          <WorkImage src="/images/tripties01.png" alt="Trip Ties" />
          <WorkImage src="/images/tripties02.png" alt="Trip Ties" />
          <WorkImage src="/images/tripties03.png" alt="Trip Ties" />
        </List>
      </Container>
    </Layout>
  )
}

export default Work
