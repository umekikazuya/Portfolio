import { BsBook } from "react-icons/bs";
import styled from "styled-components";

export default function Monologue(): JSX.Element {
  return (
    <>
      <section>
        <TitleArea>
          <TitleLogo>
            <BsBook
              size={64}
              color={"#2e444e"}
            />
          </TitleLogo>
          <TitleText>ひとりごと</TitleText>
        </TitleArea>
        <GalleryArea>
          <GalleryListItem>
            <Link>
              <Text>ダミーテキスト。ダミーテキスト。</Text>
              <Time dateTime="">2024/01/01</Time>
            </Link>
          </GalleryListItem>
            <GalleryListItem>
          <Link>
            <Text>dummy text. dummy text. dummy text. dummy text.</Text>
              <Time dateTime="">2024/01/01</Time>
          </Link>
            </GalleryListItem>
            <GalleryListItem>
          <Link>
            <Text>dummy text. dummy text. dummy text. dummy text.</Text>
              <Time dateTime="">2024/01/01</Time>
          </Link>
            </GalleryListItem>
          <GalleryMore>
            <a href="#">
              View More...
            </a>
          </GalleryMore>
        </GalleryArea>
      </section>
    </>
  )
}

const TitleArea = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: max-content;
`

const TitleLogo = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 64px;
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
`

const GalleryListItem = styled.li`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 480px;
  &:first-of-type {
    margin-top: 0;
  }
`

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`


const Text = styled.span`
  
`

const Time = styled.time`
  color: #2e444eb9;
  font-size: 12px;
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
