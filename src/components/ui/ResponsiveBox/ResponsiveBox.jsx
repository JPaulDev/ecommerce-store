import * as Styled from './styles';

/**
 * Takes in a style object in the format:
 * sx={{ display: { 0: 'none', 530: 'block' } }}
 * The above would set display to none at screen widths below 530px.
 */
export default function ResponsiveBox({ children, sx }) {
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
