import { onNameInput } from "../masks/name";
import { ITextInput } from "../types";
import { nameMax, nameMin, required } from "../validation/errText";

export const fieldName = (args: ITextInput) => {
  return {
    type: "text",

    onInput: onNameInput,
    validation_type: "string",

    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "min",
        params: [2, nameMin],
      },
      {
        type: "max",
        params: [50, nameMax],
      },
    ],
    ...args,
  };
};
