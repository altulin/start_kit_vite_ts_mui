import MyDatePicker from "../components/Datepicker";
import { ITextInput } from "../types";

export const fieldDatePicker = (args: ITextInput) => {
  return {
    component: MyDatePicker,
    ...args,
  };
};
