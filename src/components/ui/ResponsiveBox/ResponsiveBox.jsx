import styled from 'styled-components';
import formatStylesObject from './style-functions';

/**
 * Used as a wrapper to apply individual styles to reusable components without
 * having to pass props or can be used to apply media queries and adjust styles
 * depending on the screen width. The example below adds 10px of margin and sets
 * display to none at the specified breakpoint.
 *
 * @param {object} sx - The style object.
 * @param {string} as - The HTML element to render.
 *
 * @example
 * ```
 * <ResponsiveBox
 *   as="span"
 *   sx={{
 *     display: { mobile: 'none', desktop: 'block' },
 *     margin: '10px',
 *   }}
 * >
 *   <WrappedComponent />
 * </ResponsiveBox>
 * ```
 *
 * It can also be used to apply styles using pseudo-classes or to nested elements.
 * The example below changes the background color of the box to red on hover and
 * sets the font color to white on the span element.
 *
 * @example
 * <ResponsiveBox
 *   sx={{
 *     '&:hover': { backgroundColor: 'red' },
 *     span: { color: 'white' },
 *   }}
 * >
 *   <span>White Text</span>
 *   <WrappedComponent />
 * </ResponsiveBox>
 */
export default function ResponsiveBox({ children, as = 'div', sx = {} }) {
  const styles = formatStylesObject(sx);

  return (
    <Box as={as} styles={styles}>
      {children}
    </Box>
  );
}

const Box = styled.div`
  ${({ styles }) => styles}
`;
