import { FaGithub, FaLink } from 'react-icons/fa6'
import { SiQiita, SiZenn } from 'react-icons/si'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface LinksProps {
  Github: string | undefined
  Zenn: string | undefined
  Qiita: string | undefined
}

export default function Links({
  Github,
  Zenn,
  Qiita,
}: LinksProps): JSX.Element {
  return (
    <>
      <GalleryArea>
        <GalleryListItem>
          <StyledLink to="/profile">
            <FaLink size={16} color={'#2e444e'} />
            <StyledLinkText>Profile</StyledLinkText>
          </StyledLink>
        </GalleryListItem>
        {Github ? (
          <GalleryListItem>
            <StyledLink to={Github}>
              <FaGithub size={16} color={'#2e444e'} />
              <StyledLinkText>Github</StyledLinkText>
            </StyledLink>
          </GalleryListItem>
        ) : (
          ''
        )}
        {Zenn ? (
          <GalleryListItem>
            <StyledLink to={Zenn}>
              <SiZenn size={16} color={'#2e444e'} />
              <StyledLinkText>Zenn</StyledLinkText>
            </StyledLink>
          </GalleryListItem>
        ) : (
          ''
        )}
        {Qiita ? (
          <GalleryListItem>
            <StyledLink to={Qiita}>
              <SiQiita size={16} color={'#2e444e'} />
              <StyledLinkText>Qiita</StyledLinkText>
            </StyledLink>
          </GalleryListItem>
        ) : (
          ''
        )}
      </GalleryArea>
    </>
  )
}

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

const StyledLink = styled(Link)`
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

const StyledLinkText = styled.span`
  padding-left: 8px;
`
