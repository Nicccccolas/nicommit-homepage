import { Box, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { IoLogoReact, IoLogoNodejs, IoLogoDocker } from 'react-icons/io5'
import { BiLogoPostgresql, BiLogoMongodb, BiLogoAws } from 'react-icons/bi'
import { TbBrandNextjs } from 'react-icons/tb'
import { SiExpress, SiChakraui } from 'react-icons/si'

const TechStack = () => {
  const techItems = [
    { icon: IoLogoNodejs, name: 'NODE' },
    { icon: SiExpress, name: 'EXPRESS' },
    { icon: BiLogoPostgresql, name: 'POSTGRESQL' },
    { icon: BiLogoMongodb, name: 'MONGODB' },
    { icon: IoLogoReact, name: 'REACT' },
    { icon: TbBrandNextjs, name: 'NEXT' },
    { icon: SiChakraui, name: 'CHAKRAUI' },
    { icon: BiLogoAws, name: 'AWS' },
    { icon: IoLogoDocker, name: 'DOCKER' }
  ]

  return (
    <SimpleGrid columns={[2, 2, 3]} pt={4} gap={[2, 4, 4]} align="center">
      {techItems.map((tech, index) => (
        <Box
          key={index}
          border="0.5px dashed rgba(238, 69, 64, 0.3)"
          borderRadius="md"
          p={3}
          bg={useColorModeValue('#ffffff40', '#51013280')}
          style={{ backdropFilter: 'blur(10px)' }}
          _hover={{
            bg: useColorModeValue('#ffffff80', '#510132b3'),
            transform: 'scale(1.05)'
          }}
        >
          <tech.icon fontSize="2em" />
          <Text mt={2}>{tech.name}</Text>
        </Box>
      ))}
    </SimpleGrid>
  )
}

export default TechStack
