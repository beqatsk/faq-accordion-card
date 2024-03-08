import styled from "styled-components";
import Arrow from "/images/Arrow.png";
import data from "../data.json";
export default function QuestionSection({ questionIndex, active, setActive }) {
  const question = data[questionIndex].question;
  const answer = data[questionIndex].answer;
  return (
    <QuestionContainer onClick={() => setActive(questionIndex)}>
      <div>
        <Question>{question}</Question>
        <img src={Arrow} alt="arrowimage" />
      </div>
      {active === questionIndex && <Answer>{answer}</Answer>}
    </QuestionContainer>
  );
}
const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 1.8rem;
  width: 100%;
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const Question = styled.h2`
  font-size: 1.3rem;
  font-weight: 400;
  line-height: 1.6rem;
  color: #1e1f36;
`;
const Answer = styled.p`
  font-size: 1.2rem;
  font-size: 400;
  color: #787887;
`;
