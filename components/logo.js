import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
font-weight: bold;
font-size: 25px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px
padding: 10px;

&:hover img {
  transform: rotate(15deg);
 }
@media screen and (max-width: 550px) {
font-size: 18px
}
`

const Logo = () => {
  const footPrintImg = `/images/logo1${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <LogoBox>
        <Image src={footPrintImg} width={25} height={25} alt="logo" />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily={useColorModeValue('M Plus Rounded 1c', 'monospace')}
          fontWeight="bold"
          ml={3}
        >
          Nicommit
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
