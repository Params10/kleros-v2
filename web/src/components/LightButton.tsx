import React from "react";
import styled from "styled-components";
import { Button } from "@kleros/ui-components-library";

const StyledButton = styled(Button)`
  background-color: transparent;
  padding-left: 0;
  .button-text {
    color: ${({ theme }) => theme.primaryText};
    font-weight: 400;
  }
  .button-svg {
    fill: ${({ theme }) => theme.secondaryPurple};
  }

  :focus,
  :hover {
    background-color: transparent;
  }
`;

interface ILightButton {
  text: string;
  icon?: (className: string) => React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

const LightButton: React.FC<ILightButton> = ({
  text,
  icon,
  onClick,
  disabled,
  className,
}) => (
  <StyledButton
    variant="primary"
    small
    {...{ text, icon, onClick, disabled, className }}
  />
);

export default LightButton;
