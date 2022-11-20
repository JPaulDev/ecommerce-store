import { useId } from 'react';
import * as Styled from './styles';

/**
 * Label is hidden using bootstraps screen reader only styles, the label is
 * still read out to sight impaired users via screen readers.
 *
 * https://getbootstrap.com/docs/4.0/utilities/screenreaders/
 */
export default function InputWithLabel({
  label,
  styles,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) {
  const id = useId();

  return (
    <>
      <Styled.Label htmlFor={id}>{label}</Styled.Label>
      <Styled.Input
        id={id}
        styles={styles}
        autoCapitalize="off"
        spellCheck="false"
        autoCorrect="off"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        {...rest}
      />
    </>
  );
}
