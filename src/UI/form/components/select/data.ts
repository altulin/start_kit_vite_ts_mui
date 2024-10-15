import clsx from "clsx";
import style from "../../Form.module.scss";

export const class_names = {
  valueContainer: () => clsx(style.select__valueContainer),
  placeholder: () => clsx(style.select__placeholder),
  indicatorsContainer: ({
    selectProps: { menuIsOpen },
  }: {
    selectProps: { menuIsOpen: boolean };
  }) =>
    clsx(
      style.select__indicatorsContainer,
      menuIsOpen && style["select__indicatorsContainer--menu_open"],
    ),

  indicatorSeparator: () => clsx(style.select__indicatorSeparator),
  menuList: () => clsx(style.select__menuList),
  option: ({ isFocused }: { isFocused: boolean }) =>
    clsx(style.select__option, isFocused && style["select__option--focused"]),
  singleValue: () => clsx(style.select__singleValue),
  input: () => clsx(style.select__input),
};
