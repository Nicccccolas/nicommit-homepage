import Link from 'next/link'
import Image from 'next/image'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  // font-weight: bold;
  // font-size: 20px;
  padding-top: 5px;
  // margin-left: 4em;
  display: inline-flex;
  // align-items: center;
  // justify-content: center;
  // height: 30px;
  // line-height: 20px
  // padding: 10px;

  // &:hover img {
  //   transform: rotate(15deg);
  //  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`

const Logo = () => {
  // const footPrintImg = `/images/logo1${useColorModeValue('', '-dark')}.png`
  const footPrintImg = '/images/logo3.png'

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <Image
          src={footPrintImg}
          width={36}
          height={36}
          alt="logo"
          priority
          decoding="async"
        />
        {/* <Text */}
        {/*   color={useColorModeValue('gray.800', 'whiteAlpha.900')} */}
        {/*   fontFamily="Roboto" */}
        {/*   fontWeight="bold" */}
        {/*   ml={1} */}
        {/*   letterSpacing="-1px" */}
        {/* > */}
        {/*   Nicommit */}
        {/* </Text> */}
      </LogoBox>
    </Link>
  )
}

export default Logo
