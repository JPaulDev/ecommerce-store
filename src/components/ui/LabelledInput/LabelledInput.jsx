import { useId } from 'react';
import styled, { css } from 'styled-components';

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
      <Label htmlFor={id} hideLabel={hideLabel} labelStyles={labelStyles}>
        {label}
      </Label>
      <Input
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

const Label = styled.label`
  ${({ hideLabel }) => {
    if (hideLabel) {
      return css`
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      `;
    }

    return undefined;
  }};

  ${({ labelStyles }) => labelStyles}
`;

const Input = styled.input`
  ${({ inputStyles }) => inputStyles}
`;
