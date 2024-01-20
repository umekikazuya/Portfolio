import Monologue from "./Monologue";
import Notebook from "./Notebook";
import Profile from "./Profile/Index";

export default function Index(): JSX.Element {
  return (
    <>
      <Profile />
      <Monologue />
      <Notebook />
    </>
  )
}
