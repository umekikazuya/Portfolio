import { FaRegPenToSquare } from 'react-icons/fa6'
import styled from 'styled-components'

export default function Monologue(): JSX.Element {
  return (
    <>
      <Section>
        <TitleArea>
          <TitleLogo>
            <FaRegPenToSquare size={56} color={'#2e444e'} />
          </TitleLogo>
          <TitleText>ひとりごと</TitleText>
        </TitleArea>
        <GalleryArea>
          <GalleryListItem>
            <Link>
              <Text>
                雨に濡れそうでフードを被って通勤したんだけど、エントロピーの増大もいいことあるなって...
              </Text>
              <Time dateTime="">2024/01/10</Time>
            </Link>
          </GalleryListItem>
          <GalleryListItem>
            <Link>
              <Text>
                昔バイトの後輩が言ってたんだけど、やっぱり冬のBacknumberっていいよね。
              </Text>
              <Time dateTime="">2024/01/08</Time>
            </Link>
          </GalleryListItem>
          <GalleryListItem>
            <Link>
              <Text>今年は読書をちょこちょこします。</Text>
              <Time dateTime="">2024/01/07</Time>
            </Link>
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
`

const GalleryListItem = styled.li`
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  &:first-of-type {
    margin-top: 0;
  }
`

const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.span`
  font-size: 13px;
`

const Time = styled.time`
  padding-left: 24px;
  color: #2e444eb9;
  font-size: 12px;
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
