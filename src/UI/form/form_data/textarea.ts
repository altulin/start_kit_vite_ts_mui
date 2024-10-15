import TextArea from "../components/TextArea";
import { ITextInput } from "../types";
import { required } from "../validation/errText";

export const fieldTextArea = (args: ITextInput) => {
  return {
    type: "textarea",
    validation_type: "string",
    component: TextArea,
    validations: [
      {
        type: "required",
        params: [required],
      },
      {
        type: "max",
        params: [50, "Не более 50 символов"],
      },
    ],
    ...args,
  };
};
