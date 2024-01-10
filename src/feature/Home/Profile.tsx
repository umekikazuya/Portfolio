import { FaDrupal } from 'react-icons/fa6'
import { FaRegUser } from 'react-icons/fa6'
import { FaLink } from 'react-icons/fa6'
import styled from 'styled-components'

export default function Profile(): JSX.Element {
  return (
    <>
      <section>
        <TitleArea>
          <TitleLogo>
            <FaRegUser size={56} color={'#2e444e'} />
          </TitleLogo>
          <TitleText>Profile</TitleText>
        </TitleArea>
        <ProfileText>
          <span>My name is JapanKazuya. I do Drupal Engineering.</span>
          <ProfileIcon>
            <FaDrupal size={16} />
          </ProfileIcon>
        </ProfileText>
        <GalleryArea>
          <GalleryListItem>
            <Link href="#">
              <FaLink size={16} color={'#2e444e'} />
              <LinkText>Profile</LinkText>
            </Link>
          </GalleryListItem>
          <GalleryListItem>
            <Link href="#">
              <FaLink size={16} color={'#2e444e'} />
              <LinkText>Github</LinkText>
            </Link>
          </GalleryListItem>
          <GalleryListItem>
            <Link href="#">
              <FaLink size={16} color={'#2e444e'} />
              <LinkText>Zenn</LinkText>
            </Link>
          </GalleryListItem>
          <GalleryListItem>
            <Link href="#">
              <FaLink size={16} color={'#2e444e'} />
              <LinkText>Qiita</LinkText>
            </Link>
          </GalleryListItem>
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

const ProfileText = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
`

const ProfileIcon = styled.span`
  padding-left: 8px;
`

const GalleryArea = styled.ul`
  margin-top: 24px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  max-width: 240px;
  columns: 2;
`

const GalleryListItem = styled.li`
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    max-width: initial;
  }

  &:first-of-type {
    margin-top: 0;
  }
`

const Link = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  font-size: 13px;

  &:hover,
  &:focus {
    color: #2e444eb9;
  }
`

const LinkText = styled.span`
  padding-left: 8px;
`
