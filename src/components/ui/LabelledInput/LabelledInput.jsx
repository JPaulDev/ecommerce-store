import { useId } from 'react';
import * as Styled from './styles';

/**
 * A component that renders a label and an input. The label can be hidden using
 * bootstraps screen reader only styles, the label is still read out to sight
 * impaired users via screen readers.
 *
 * @link https://getbootstrap.com/docs/4.0/utilities/screenreaders/
 */
export default function LabelledInput({
  label,
  hideLabel = false,
  labelStyles,
  inputStyles,
  name,
  type,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  ...rest
}) {
  const id = useId();

  return (
    <>
      <Styled.Label
        htmlFor={id}
        hideLabel={hideLabel}
        labelStyles={labelStyles}
      >
        {label}
      </Styled.Label>
      <Styled.Input
        id={id}
        inputStyles={inputStyles}
        name={name}
        type={type}
        placeholder={placeholder}
        autoCapitalize="off"
        spellCheck="false"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        {...rest}
      />
    </>
  );
}
