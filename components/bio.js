import styled from '@emotion/styled'
import { Box } from '@chakra-ui/react'

export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin-bottom: 5px;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`

export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
  margin-bottom: 5px;
`
