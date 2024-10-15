import { ITextInput } from "../types";

export const fieldRadio = (args: ITextInput) => {
  return {
    type: "radio",
    validation_type: "string",
    validations: [],
    ...args,
  };
};
