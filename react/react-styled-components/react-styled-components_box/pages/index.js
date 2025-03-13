import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents.js";

export default function HomePage() {
  return (
    <BoxWrapper>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents $isBlack />
    </BoxWrapper>
  );
}

const BoxWrapper = styled.div`
  display: flex;
`;
