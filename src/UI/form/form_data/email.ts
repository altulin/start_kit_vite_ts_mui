import { ITextInput } from "../types";
import { required, valid } from "../validation/errText";

export const fieldEmail = (args: ITextInput) => {
  return {
    type: "email",
    validation_type: "string",
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "matches",
        params: [/@[^.]*\./, valid],
      },
      {
        type: "email",
        params: [valid],
      },
    ],
    ...args,
  };
};
