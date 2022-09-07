import styled from 'styled-components';

const MaterialSymbol = styled.i.attrs({
  className: 'material-symbols-outlined',
})`
  font-size: ${({ iconSize }) => iconSize};
  color: ${({ iconColor }) => iconColor || 'black'};
`;

export default MaterialSymbol;
