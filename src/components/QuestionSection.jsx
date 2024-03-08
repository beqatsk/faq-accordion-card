import styled from "styled-components";
import Arrow from "/images/Arrow.png";
import data from "../data.json";
export default function QuestionSection({ questionIndex, active, setActive }) {
  const question = data[questionIndex].question;
  const answer = data[questionIndex].answer;
  return (
    <QuestionContainer
      onClick={() => {
        if (active === questionIndex) {
          setActive(null);
        } else {
          setActive(questionIndex);
        }
      }}
      active={active}
      questionIndex={questionIndex}
    >
      <div>
        <Question active={active} questionIndex={questionIndex}>
          {question}
        </Question>
        <img src={Arrow} alt="arrowimage" />
      </div>
      {active === questionIndex && <Answer>{answer}</Answer>}
    </QuestionContainer>
  );
}
const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 0.8rem;
  width: 100%;
  cursor: pointer;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > img {
      transform: ${(props) =>
        props.active === props.questionIndex
          ? "rotate(180deg)"
          : "rotate(0deg)"};
      transition: 0.5s;
    }
  }
`;
const Question = styled.h2`
  font-size: 1rem;
  font-weight: ${(props) =>
    props.active === props.questionIndex ? "700" : "400"};
  line-height: 1.6rem;
  color: #1e1f36;

  &:hover {
    color: #f47b56;
  }
`;
const Answer = styled.p`
  font-size: 1rem;
  font-size: 400;
  color: #787887;
`;
