import File from "../components/File";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldFile = (args: ITextInput) => {
  return {
    type: "file",
    validation_type: "string",
    component: File,
    validations: [
      {
        type: "required",
        params: [required],
      },
    ],
    ...args,
  };
};
