import Monologue from './Monologue/Index'
import Notebook from './Notebook/Index'
import Profile from './Profile/Index'

export default function Index(): JSX.Element {
  return (
    <>
      <Profile />
      <Monologue />
      <Notebook />
    </>
  )
}
