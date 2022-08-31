import styled from 'styled-components';

const MaterialIcon = styled.i.attrs({ className: 'material-icons' })`
  font-size: ${({ iconSize }) => iconSize};
  color: ${({ iconColor }) => iconColor || 'black'};
`;

export default MaterialIcon;
