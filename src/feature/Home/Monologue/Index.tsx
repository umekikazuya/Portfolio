import { SectionTitle } from '@/components/Parts/Title'
import { FaRegPenToSquare } from 'react-icons/fa6'
import styled from 'styled-components'
import List from './List'

export default function Index(): JSX.Element {
  // Set icon for title.
  const TitleIcon = FaRegPenToSquare

  return (
    <>
      <Section>
        <SectionTitle Icon={TitleIcon} Text="ひとりごと" />
        <List />
      </Section>
    </>
  )
}

const Section = styled.section`
  margin-top: 84px;
`
