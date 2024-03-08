import { GlobalStyles } from "./Global";
import styled from "styled-components";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main></Main>
    </>
  );
}

export default App;
const Main = styled.main`
  width: 32.7rem;
  background-color: #ffffff;
  padding: 13.2rem 2.4rem 4.8rem;
  display: flex;
  flex-direction: column;
  gap: 3.8rem;
  border-radius: 25px;
`;
const Title = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
`;
