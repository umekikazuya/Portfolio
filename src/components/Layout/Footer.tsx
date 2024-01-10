import styled from "styled-components"

export default function Footer(): JSX.Element {
  return (
    <>
      <FooterArea>
        <Copylight>@copy japankazuya</Copylight>
      </FooterArea>
    </>
  )
}

const FooterArea = styled.div`
  background-color: #22222287;
  text-align: center;
  height: 48px;
`

const Copylight = styled.small`
  line-height: 48px;
  color: #fff;
`
