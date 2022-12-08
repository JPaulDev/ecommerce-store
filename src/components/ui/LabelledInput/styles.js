import styled, { css } from 'styled-components';

export const Label = styled.label`
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

export const Input = styled.input`
  ${({ inputStyles }) => inputStyles}
`;
