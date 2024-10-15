import { FC, useId } from "react";
import Container from "../hoc/Container";
import { ITextInput } from "../types";
import Label from "../hoc/Label";
const TextInput: FC<ITextInput> = ({ label_text, children, ...props }) => {
  const id = useId();

  return (
    <Container {...props}>
      <Label {...props} label_text={label_text} id={id}>
        {children}
      </Label>
    </Container>
  );
};
export default TextInput;
