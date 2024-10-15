import clsx from "clsx";
import { FC } from "react";
import style from "../Form.module.scss";
import { ITextInput } from "../types";
import { Field, useField } from "formik";
import useCheckError from "../hook/checkError";

const Label: FC<ITextInput> = ({ ...props }) => {
  const {
    modifier,
    label_text,
    name = "",
    id,
    children,
    ...input_props
  } = props;
  const [meta, fields] = useField(name);
  const { isError } = useCheckError(fields);

  return (
    <label
      className={clsx(style.label, modifier && style[`label--${modifier}`])}
      htmlFor={id}
    >
      {label_text && (
        <span
          className={clsx(
            style.label__text,
            modifier && style[`label__text--${modifier}`],
          )}
        >
          {label_text}
        </span>
      )}

      <div className={clsx(style.input__wrapper)}>
        <Field
          className={clsx(
            style.input,
            modifier && style[`input--${modifier}`],
            isError && style[`input--error`],
          )}
          id={id}
          {...input_props}
          name={name}
        />

        {children}
      </div>
    </label>
  );
};
export default Label;
