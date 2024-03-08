import { GlobalStyles } from "./Global";
import styled from "styled-components";
import MainImage from "/images/main-image.png";
import QuestionSection from "./components/QuestionSection";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(null);
  return (
    <>
      <GlobalStyles />
      <Main>
        <img src={MainImage} alt="mainimage" />
        <Title>FAQ</Title>
        <QuestionSection
          questionIndex={0}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={1}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={2}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={3}
          active={active}
          setActive={setActive}
        />
        <QuestionSection
          questionIndex={4}
          active={active}
          setActive={setActive}
        />
      </Main>
    </>
  );
}

export default App;
const Main = styled.main`
  width: 28.7rem;
  background-color: #ffffff;
  padding: 8rem 2.4rem 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.1rem;
  border-radius: 25px;
  position: relative;

  & > img {
    width: 23.7rem;
    height: 18rem;
    position: absolute;
    top: -10rem;
    left: 1.1rem;
  }
`;
const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 4rem;
`;
