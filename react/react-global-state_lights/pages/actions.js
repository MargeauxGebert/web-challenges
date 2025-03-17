import Link from "../components/Link";
import QuickActions from "../components/QuickActions";

export default function Actions({onLightsOn, onLightsOff, lights, count}) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>Quick Actions</h1>
      <QuickActions countLights={count} lights={lights} onLightsOn={()=> onLightsOn()} onLightsOff={()=> onLightsOff()}/>
    </>
  );
}
