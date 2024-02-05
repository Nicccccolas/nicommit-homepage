import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbCarmen from '../public/images/carmen01.png'
import thumbTripTies from '../public/images/tripties01.png'
import thumbPokedex from '../public/images/pokedex01.png'
import thumbRickMorty from '../public/images/rickmorty01.png'
import thumbnailWeather from '../public/images/weather02.png'

const Works = () => {
  return (
    <Layout>
      <Container
        maxWidth={'container.lg'}
        px={{ base: 'initial', md: '4em' }}
        mb={10}
      >
        <Heading as="h2" fontSize={28} my={8} variant="section-title">
          Works
        </Heading>

        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>

        <SimpleGrid columns={1} gap={6}>
          <Section>
            <WorkGridItem
              id="agtcarmen"
              title="Carmen Travel"
              thumbnail={thumbCarmen}
            >
              Discover Perú with &apos;Carmen - Agency of Travels and
              Turism&apos;.
            </WorkGridItem>
          </Section>

          <Section delay={0.1}>
            <WorkGridItem
              id="tripties"
              title="Trip-Ties"
              thumbnail={thumbTripTies}
            >
              Share your travels with other explorer lovers on
              &apos;Trip-Ties&apos;.
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old Projects
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section delay={0.2}>
            <WorkGridItem id="pokedex" title="Pokedex" thumbnail={thumbPokedex}>
              Gotta catch &apos;em all! Pokedex app.
            </WorkGridItem>
          </Section>

          <Section delay={0.3}>
            <WorkGridItem
              id="rickandmorty"
              title="Rick & Morty"
              thumbnail={thumbRickMorty}
            >
              Meet all the characters of Rick & Morty.
            </WorkGridItem>
          </Section>

          <Section delay={0.4}>
            <WorkGridItem
              id="weather"
              title="Weather App"
              thumbnail={thumbnailWeather}
            >
              Know the state of the weather according to your location with a
              retro design.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
