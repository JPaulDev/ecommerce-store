import styled from 'styled-components';

const LinkButtonGrey = styled.a`
  background: linear-gradient(to top, #858484, #a0a0a0);
  border-radius: 5px;
  color: white;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  padding: ${({ padding }) => padding};
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(to top, #858484, #737373);
  }
`;

export default LinkButtonGrey;
