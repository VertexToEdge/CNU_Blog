import { Link, Outlet } from 'react-router-dom';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  border-radius: 1rem;
  outline: none;
  font-weight: bold;
  word-break: keep-all;
  background: #fff;
  border: 1px solid rgb(50, 148, 248);
  color: rgb(50, 148, 248);
  transition: all 0.125s ease-in 0s;
  cursor: pointer;
`;
const H2 = styled.h2`
font-weight: bold;
font-size: 1.3125rem;
`;


const Header = () => {
  return (
    <div>
      <br />
      <Wrapper>
        <Link to="/">
          <H2>vertex.log</H2>
        </Link>
        <Link to="/write">
          <Button className="write-button">글쓰기</Button>
        </Link>
      </Wrapper>
      <Outlet />
    </div>
  );
};

export default Header;
