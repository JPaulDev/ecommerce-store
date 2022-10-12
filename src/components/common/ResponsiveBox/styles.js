import styled from 'styled-components';

export const ResponsiveContainer = styled.div`
  ${({ queries }) => queries}
`;
