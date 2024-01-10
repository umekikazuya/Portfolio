import Monologue from "./Monologue";
import Notebook from "./Notebook";
import Profile from "./Profile";

export default function Index(): JSX.Element {
  return (
    <>
      <Profile />
      <Monologue />
      <Notebook />
    </>
  )
}
