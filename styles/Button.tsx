import {
  ArrowBarRight,
  ArrowRight,
  CaretRightFill,
} from "react-bootstrap-icons";
import styled from "styled-components";

type Props = {
  intent: "submit" | "edit" | "delete";
  theme: any;
  children?: any;
};

const StyledButton = styled.button<Props>(
  ({ intent, theme }) => {
    switch (intent) {
      case "submit":
        return {
          background: "transparent",
          color: "#333",
        };
      default:
        return {
          background: "transparent",
          color: theme.accent,
        };
    }
  },
  {
    minWidth: "150px",
    width: "fit-content",
    cursor: "pointer",
    border: "0",
    borderRadius: "2px",
    padding: "10px",
    fontSize: "1rem",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    transition: "0.3s all",
  },
  `&:hover {
    transition: 0.3s all;
    scale: 1.05;
  }`
);

export const Button = ({
  intent,
  children,
  icon,
  onClick,
}: {
  intent: "submit" | "edit" | "delete";

  children?: string;
  icon?: any;
  onClick?: any;
}) => {
  return (
    <StyledButton intent={intent} onClick={onClick}>
      {icon}
      {children}
      {!icon && <ArrowRight size={25} color="#3f64c9" />}
    </StyledButton>
  );
};
