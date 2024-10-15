/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import FormTemplate from "@/UI/form/templates/FormTemplate";
import clsx from "clsx";
import style from "./Promo.module.scss";
import { PressBtn } from "@/UI/button/PressElement";

const Promo: FC = () => {
  return (
    <div className={clsx(style.promo, "container")}>
      <FormTemplate />
      <PressBtn
        label="Кнопка"
        type="submit"
        form="form"
        style={{ marginTop: "2rem" }}
      />
    </div>
  );
};

export default Promo;
