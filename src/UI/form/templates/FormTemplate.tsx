import { Form, Formik } from "formik";
import { FC } from "react";
import { formData, radio_list } from "./form_data";
import { makeInitialValues } from "../initialValues";
import FieldComponent from "../hoc/FieldComponent";
import { validateSchema } from "../validation/yupSchemaCreator";

const FormTemplate: FC = () => {
  return (
    <Formik
      initialValues={{
        ...makeInitialValues(formData),
        rule: true,
        radio: radio_list[0].value,
        date: new Date(),
      }}
      validationSchema={validateSchema(formData)}
      onSubmit={(val) => {
        console.log(val);
      }}
    >
      {() => {
        // console.log(formik.values);
        return (
          <Form id="form">
            {formData.map((item, i) => (
              <FieldComponent key={i} {...item} />
            ))}
          </Form>
        );
      }}
    </Formik>
  );
};
export default FormTemplate;
