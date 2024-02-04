import { Badge, Container, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Carmen Travel">
      <Container
        maxW="container.lg"
        px={{ base: 'initial', md: '4em' }}
        mb={10}
      >
        <Title>
          Carmen Travel <Badge>2023</Badge>
        </Title>
        <P>
          Explore Peru with &ldquo;Carmen&rdquo; the travel agency that takes
          you to fascinating destinations. We offer short stays, personalized
          tour packages, and a seamless flight reservation process, with secure
          payments through PayPal. Discover the charm of Peru with us!
        </P>
        <List mt={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://agtcarmen.com" target="_blank">
              www.agtcarmen.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>
              <span>Windows/macOs/Linux</span>
            </Meta>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Node.js, Express.js, S3, EC2</span>
          </ListItem>
          <WorkImage src="/images/carmen01.png" alt="Carmen-Travel" />
          <WorkImage src="/images/carmen02.png" alt="Carmen-Travel" />
          <WorkImage src="/images/carmen03.png" alt="Carmen-Travel" />
          <WorkImage src="/images/carmen04.png" alt="Carmen-Travel" />
        </List>
      </Container>
    </Layout>
  )
}

export default Work
