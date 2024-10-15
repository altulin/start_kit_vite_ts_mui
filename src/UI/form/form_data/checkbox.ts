import { ITextInput } from "../types";
import { required, requiredCheck } from "../validation/errText";

export const fieldCheckbox = (args: ITextInput) => {
  return {
    type: "checkbox",
    validation_type: "boolean",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "oneOf",
        params: [[true], requiredCheck],
      },
    ],
    ...args,
  };
};
