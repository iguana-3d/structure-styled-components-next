import React, { HTMLAttributes } from "react";
import { Button } from "./styles";
import DualSpinner from "../../loadings/DualSpinner";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isLoading?: boolean;
  buttonSize?: number;
  isFullWidth?: boolean;
  loadingSpinnerSize?: number;
}

const ButtonDefault: React.FC<IProps> = ({
  buttonText,
  isLoading,
  buttonSize,
  isFullWidth,
  loadingSpinnerSize,
  ...props
}) => {
  return (
    <Button
      isLoading={isLoading}
      buttonSize={buttonSize}
      isFullWidth={isFullWidth}
      disabled={isLoading}
      {...props}
    >
      <span className="text">{buttonText}</span>
      <span className="spinner">
        <DualSpinner size={loadingSpinnerSize || 30} />
      </span>
    </Button>
  );
};

export default ButtonDefault;
