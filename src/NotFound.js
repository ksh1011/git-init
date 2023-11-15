import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function NotFound() {
  const navigate = useNavigate();
  console.log("navigate", navigate);

  useEffect(() => {
    console.log("notFound");
    // navigate.replace("/notFound");
  }, []);

  return (
    <Container>
      <ErrorMessageWrap>
        <MessageTitle>요청하신 작업을 수행할 수 없습니다.</MessageTitle>
        <MessageText>
          잘못 된 요청으로 오류가 발생하였습니다.
          <br />
          문제가 지속될 경우 관리자에게 문의주세요.
        </MessageText>
      </ErrorMessageWrap>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  background-color: var(--color-gray-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ErrorMessageWrap = styled.div`
  text-align: center;
`;

const MessageTitle = styled.p`
  padding-top: 30px;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-gray-800);
  text-align: center;
`;

const MessageText = styled.p`
  padding: 20px 0 30px;
  font-size: 14px;
  line-height: 21px;
  font-weight: 400;
  color: var(--color-gray-700);
  text-align: center;
`;

export default NotFound;
