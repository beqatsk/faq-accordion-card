import styled from "styled-components";
import Arrow from "/images/Arrow.png";
export default function QuestionSection() {
  return (
    <QuestionContainer>
      <div>
        <Question>What is the maximum file upload size?</Question>
        <img src={Arrow} alt="arrowimage" />
      </div>
      <Answer>
        No more than 2GB. All files in your account must fit your allotted
        storage space.
      </Answer>
    </QuestionContainer>
  );
}
const QuestionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-bottom: 1px solid #e8e8ea;
  padding-bottom: 1.8rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 3.4rem;
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
