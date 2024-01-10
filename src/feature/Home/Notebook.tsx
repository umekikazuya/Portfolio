import { FaCoffee } from 'react-icons/fa'
import styled from 'styled-components'

export default function Notebook(): JSX.Element {
  return (
    <>
      <Section>
        <TitleArea>
          <TitleLogo>
            <FaCoffee size={56} color={'#2e444e'} />
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
          <GalleryListItem>
            <img src="https://placehold.jp/640x360.png" alt="" />
          </GalleryListItem>
        </GalleryArea>
        <GalleryMore>
          <a href="#">View More...</a>
        </GalleryMore>
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
  max-width: 56px;
  text-align: center;
`

const TitleText = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`
const GalleryArea = styled.ul`
  margin-top: 64px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    columns: 2;
    max-width: 600px;
  }
  @media (min-width: 768px) {
    /* columns: 3; */
  }
`

const GalleryListItem = styled.li`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;

  @media (min-width: 576px) {
    max-width: initial;
  }

  &:first-of-type {
    margin-top: 0;
  }
`
const GalleryMore = styled.div`
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  text-align: right;
  font-size: 12px;
  &:hover,
  &:focus {
    color: #2e444eb9;
  }
`
