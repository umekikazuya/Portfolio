import { BsBook } from 'react-icons/bs'
import styled from 'styled-components'

export default function Notebook(): JSX.Element {
  return (
    <>
      <Section>
        <TitleArea>
          <TitleLogo>
            <BsBook size={74} color={'#2e444e'} />
          </TitleLogo>
          <TitleText>自由帳</TitleText>
        </TitleArea>
        <GalleryArea>
          <GalleryListItem>
            <img src="https://placehold.jp/640x360.png" alt="" />
          </GalleryListItem>
          <GalleryListItem>
            <img src="https://placehold.jp/640x360.png" alt="" />
          </GalleryListItem>
          <GalleryListItem>
            <img src="https://placehold.jp/640x360.png" alt="" />
          </GalleryListItem>
          <GalleryMore>
            <a href="#">View More...</a>
          </GalleryMore>
        </GalleryArea>
      </Section>
    </>
  )
}

const Section = styled.section`
  margin-top: 84px;
`

const TitleArea = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: max-content;
`

const TitleLogo = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`

const TitleText = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`

const GalleryArea = styled.ul`
  margin-top: 84px;
  margin-left: auto;
  margin-right: auto;
`

const GalleryListItem = styled.li`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;
`
const GalleryMore = styled.div`
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;
  text-align: right;
  font-size: 12px;
  &:hover,
  &:focus {
    color: #2e444eb9;
  }
`
