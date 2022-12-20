/* eslint-disable no-param-reassign */
import theme from '../../../styles/theme';

// Check if the object is a media query object by checking if all the keys are
// breakpoints.
function checkIfMediaQueryObject(obj) {
  const breakpoints = Object.keys(obj);
  const themeBreakpoints = Object.keys(theme.breakpoints);

  return breakpoints.every((breakpoint) =>
    themeBreakpoints.includes(breakpoint)
  );
}

// Takes in the sx object and converts it into the correct format that can be
// used with styled components.
export default function formatStylesObject(sxObject) {
  const rules = Object.keys(sxObject);

  const styleObject = rules.reduce((acc, rule) => {
    if (
      typeof sxObject[rule] === 'object' &&
      checkIfMediaQueryObject(sxObject[rule])
    ) {
      const breakpoints = Object.keys(sxObject[rule]);

      breakpoints.forEach((breakpoint) => {
        const mediaQuery = `@media ${theme.breakpoints[breakpoint]}`;
        const value = sxObject[rule][breakpoint];

        // Deduplicate media queries, if the media query already exists then
        // simply add the style rule to the existing media query.
        if (mediaQuery in acc) {
          acc[mediaQuery] = { ...acc[mediaQuery], [rule]: value };
        } else {
          acc[mediaQuery] = { [rule]: value };
        }
      });
    } else {
      // If the style rule is not in a media query, then simply copy it.
      acc[rule] = sxObject[rule];
    }

    return acc;
  }, {});

  return styleObject;
}
