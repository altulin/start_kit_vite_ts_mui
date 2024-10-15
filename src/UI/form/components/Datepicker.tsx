import { FieldProps, useField } from "formik";
import { FC } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { ITextInput } from "../types";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";
import style from "../Form.module.scss";
import { ru } from "date-fns/locale/ru";

registerLocale("ru", ru);

interface IMyDatePicker extends FieldProps, Omit<ITextInput, "form"> {}

const MyDatePicker: FC<IMyDatePicker> = ({ ...props }) => {
  const {
    field: { name },
  } = props;

  const [meta, field, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <DatePicker
      {...field}
      locale="ru"
      selected={value}
      onChange={(date) => setValue(date)}
      placeholderText={props.placeholder}
      className={clsx(style.datepicker)}
      wrapperClassName={clsx(style.datepicker__wrapper)}
      dateFormat={"dd MMMM yy"}
      showIcon={true}
      icon={
        <svg
          className={clsx(style.datepicker__icon)}
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L7 7L13 1" stroke="#718EBF" strokeWidth="1.5" />
        </svg>
      }
    />
  );
};

export default MyDatePicker;
