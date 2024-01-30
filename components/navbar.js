import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      target={target}
      scroll={false}
      p={2}
      bg={active ? 'glassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      {...props}
    >
      {children}
    </Link>
  )
}

const Navbar = (props) => {
  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#510a3280')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/bio" path={path}>
            Bio
          </LinkItem>
          <LinkItem
            href="https://github.com/Nicccccolas/nicommit-homepage"
            target="_blank"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub /> Source
          </LinkItem>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
                bg={useColorModeValue('#D6CEC3', '#2d142c')}
                borderColor={useColorModeValue('#3d7aed', '#510a32')}
              />
              <MenuList bg={useColorModeValue('#f0e7db', '#510a32')}>
                <NextLink href="/" passHref legacyBehavior>
                  <MenuItem
                    as={Link}
                    bg={useColorModeValue('#f0e7db', '#510a32')}
                  >
                    About
                  </MenuItem>
                </NextLink>
                <NextLink href="/works" passHref legacyBehavior>
                  <MenuItem
                    as={Link}
                    bg={useColorModeValue('#f0e7db', '#510a32')}
                  >
                    Works
                  </MenuItem>
                </NextLink>
                <NextLink href="/bio" passHref legacyBehavior>
                  <MenuItem
                    as={Link}
                    bg={useColorModeValue('#f0e7db', '#510a32')}
                  >
                    Bio
                  </MenuItem>
                </NextLink>
                <NextLink
                  href="https://github.com/Nicccccolas"
                  target="_blank"
                  passHref
                  legacyBehavior
                >
                  <MenuItem
                    as={Link}
                    bg={useColorModeValue('#f0e7db', '#510a32')}
                  >
                    View Source
                  </MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
export default Navbar
