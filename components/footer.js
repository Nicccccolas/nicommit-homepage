import { Box, Link, Text } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'

const Footer = () => {
  return (
    <Box
      display="flex"
      align="center"
      opacity={0.5}
      fontSize="md"
      gap={6}
      justifyContent="space-between"
      paddingX={6}
      paddingTop={4}
    >
      <Text>&copy; {new Date().getFullYear()} Nicolás Pantoja Díaz</Text>
      <Box display="flex" align="center" fontSize="2em" gap={6}>
        <Link
          href="https://api.whatsapp.com/send?phone=573104252781&text=Hello%2C%20Nicolas.%20I%20want%20to%20work%20with%20you%21"
          target="_blank"
        >
          <IoLogoWhatsapp />
        </Link>
        <Link href="https://linkedin.com/in/nicopantojadiaz" target="_blank">
          <IoLogoLinkedin />
        </Link>
        <Link href="https://github.com/Nicccccolas" target="_blank">
          <IoLogoGithub />
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
