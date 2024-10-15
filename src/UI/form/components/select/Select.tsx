/* eslint-disable @typescript-eslint/no-explicit-any */
import clsx from "clsx";
import { FC } from "react";
import style from "../../Form.module.scss";
import Select from "react-select";
import { FieldProps, useField } from "formik";
import { ITextInput } from "../../types";
import useCheckError from "../../hook/checkError";
import IconArrow from "@/images/svg/rule.svg?react";
import { class_names } from "./data";

interface IMySelect extends FieldProps, Omit<ITextInput, "form"> {}

const MySelect: FC<IMySelect> = ({ ...props }) => {
  const {
    field: { name },
    options,
    placeholder,
  } = props;

  const [, field, helpers] = useField(name);
  const { isError } = useCheckError(field);

  return (
    <Select
      defaultMenuIsOpen={false}
      options={options}
      placeholder={placeholder}
      className={clsx(style.select)}
      classNames={{
        control: () =>
          clsx(
            style.select__control,
            isError && style["select__control--error"],
          ),
        ...class_names,
      }}
      name={name}
      onBlur={() => helpers.setTouched(true)}
      onChange={(val: any) => helpers.setValue(val.value)}
      value={
        options &&
        options.find((el: any) => el.value.toString() === field.value)
      }
      components={{
        DropdownIndicator: () => <IconArrow />,
      }}
    />
  );
};
export default MySelect;
