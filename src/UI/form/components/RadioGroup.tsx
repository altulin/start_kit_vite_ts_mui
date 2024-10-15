import { FC, useId } from "react";
import Container from "../hoc/Container";
import { ITextInput } from "../types";
import Label from "../hoc/Label";
import clsx from "clsx";
import style from "../Form.module.scss";

const RadioGroup: FC<ITextInput> = ({ radio_list, children, ...props }) => {
  const id = useId();
  return (
    <Container {...props}>
      {radio_list &&
        radio_list.map((item, i) => (
          <Label
            {...props}
            key={i}
            label_text={item.label}
            id={`${id}_${i}`}
            value={item.value}
          >
            <span className={clsx(style.radio__mark)}></span>
            {children}
          </Label>
        ))}
    </Container>
  );
};
export default RadioGroup;
