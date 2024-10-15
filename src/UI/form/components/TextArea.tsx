/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { FieldProps, useField } from "formik";
import { ITextInput } from "../types";
import TextareaAutosize from "react-textarea-autosize";
import useCheckError from "../hook/checkError";

interface IMyTextArea extends FieldProps, Omit<ITextInput, "form"> {}

const TextArea: FC<IMyTextArea> = ({ ...props }) => {
  const {
    field: { name },
    modifier,
    minRows,
  } = props;
  const [, field, helpers] = useField(name);
  const { isError } = useCheckError(field);

  return (
    <TextareaAutosize
      className={clsx(
        style.textarea,
        modifier && style[`textarea--${modifier}`],
        isError && style["textarea--error"],
      )}
      name={name}
      onBlur={() => helpers.setTouched(true)}
      onChange={(e: any) => helpers.setValue(e.target.value)}
      value={field.value}
      placeholder={props.placeholder}
      minRows={minRows}
    />
  );
};
export default TextArea;
