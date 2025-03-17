import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const initialLights = [
    {
      id: "1",
      name: "Living Room",
      isOn: false,
    },
    {
      id: "2",
      name: "Kitchen",
      isOn: true,
    },
    {
      id: "3",
      name: "Bedroom",
      isOn: false,
    },
    {
      id: "4",
      name: "Bathroom",
      isOn: false,
    },
    {
      id: "5",
      name: "Garage",
      isOn: false,
    },
    {
      id: "6",
      name: "Porch",
      isOn: true,
    },
    {
      id: "7",
      name: "Garden",
      isOn: false,
    },
    {
      id: "8",
      name: "Office",
      isOn: false,
    },
  ];

  const [lights, setLights] = useState(initialLights);

  const countLightOn = lights.filter((light) => light.isOn === true).length;

  function handleToggleLights(id) {
    const newLight = lights.map((light) => {
      if (light.id === id) {
        return { ...light, isOn: !light.isOn };
      }
      return light;
    });
    // console.log(newLight);
    setLights(newLight);
  }

  function handleAllLightsOn() {
    const lightsOn = lights.map((light) => {
      return { ...light, isOn: true };
    });
    setLights(lightsOn);
  }

  function handleAllLightsOff() {
    const lightsOff = lights.map((light) => {
      return { ...light, isOn: false };
    });
    setLights(lightsOff);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggleLights={handleToggleLights}
        count={countLightOn}
        onLightsOn={handleAllLightsOn}
        onLightsOff={handleAllLightsOff}
      />
    </Layout>
  );
}
