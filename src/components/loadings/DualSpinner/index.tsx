import React from "react";
import { Container, IStyledProps } from "./styles";

const DualSpinner: React.FC<IStyledProps> = ({ size, color }) => {
  return (
    <Container size={size} color={color}>
      &nbsp;
      <div className="large-spinner" />
      <div className="into-spinner" />
    </Container>
  );
};

export default DualSpinner;
