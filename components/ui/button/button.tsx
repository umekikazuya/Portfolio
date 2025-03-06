import styled from "styled-components";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick} type="button">{children}</StyledButton>;
};
const StyledButton = styled.button`
  background-color: #171717;
  color: #fafafa;
  padding: 13px 16px;
  font-size: 14px;
  line-height: 1;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #171717e6;
  }
`;

export default Button;
