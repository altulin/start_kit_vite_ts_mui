/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC, useEffect } from "react";
import style from "../Form.module.scss";
import { FieldProps, useField } from "formik";
import { ITextInput } from "../types";
import { checkObj } from "@/service/checkObj";
import useCheckError from "../hook/checkError";
interface IMyTextArea extends FieldProps, Omit<ITextInput, "form"> {}

const File: FC<IMyTextArea> = ({ ...props }) => {
  const {
    field: { name },
    modifier,
    id,
    multiple = false,
  } = props;

  const [meta, field, helpers] = useField(name);
  const { isError } = useCheckError(field);

  const checkValue = () => {
    if (!checkObj(field.value)) return false;

    if (field.value.constructor.name === "File") {
      return true;
    }

    return false;
  };

  return (
    <div
      className={clsx(
        style.file,
        modifier && style[`file--${modifier}`],
        isError && style["file--error"],
      )}
    >
      <input
        id={id}
        name={name}
        type="file"
        onBlur={() => helpers.setTouched(true)}
        onChange={(e: any) => {
          helpers.setValue(e.target.files[0]);
        }}
        multiple={multiple}
      />

      {checkValue() ? <span>{field.value.name}</span> : <span>Загрузить</span>}
    </div>
  );
};
export default File;
