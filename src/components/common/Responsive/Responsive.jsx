import * as Styled from './styles';

export default function Responsive({ children, sx }) {
  const [property] = Object.keys(sx);
  let queries = '';

  Object.entries(sx[property]).forEach(([width, value]) => {
    const query = `@media screen and (min-width: ${width}px) {
      ${property}: ${value};
    }`;

    queries += query;
  });

  return (
    <Styled.ResponsiveContainer queries={queries}>
      {children}
    </Styled.ResponsiveContainer>
  );
}
