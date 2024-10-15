import { FC } from "react";
import clsx from "clsx";
import style from "../Form.module.scss";
import IconRule from "@/images/svg/rule.svg?react";
import TextInput from "./TextInput";
import { useField } from "formik";
import { ITextInput } from "../types";
import useCheckError from "../hook/checkError";

const Checkbox: FC<ITextInput> = ({ children, ...props }) => {
  const { modifier } = props;
  const [meta, field] = useField(props.name || "");
  const { isError } = useCheckError(field);

  return (
    <TextInput {...props} type="checkbox">
      <div
        className={clsx(
          style.checkbox,
          modifier && style[`checkbox--${modifier}`],
        )}
      >
        <span
          className={clsx(
            style.checkbox__icon,
            isError && style["checkbox__icon--error"],
          )}
        >
          {meta.value && <IconRule />}
        </span>

        {children}
      </div>
    </TextInput>
  );
};
export default Checkbox;
