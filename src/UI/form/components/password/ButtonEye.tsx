import IconEye from "@/images/svg/eye.svg?react";
import IconEyeOff from "@/images/svg/eye-off.svg?react";
import style from "../../Form.module.scss";
import clsx from "clsx";
import { FC } from "react";

interface IButtonEye {
  isTypeText: boolean;
  setType: (type: boolean) => void;
}

const ButtonEye: FC<IButtonEye> = ({ isTypeText, setType }) => {
  return (
    <button
      type="button"
      onClick={() => setType(!isTypeText)}
      className={clsx(style.button)}
    >
      {isTypeText && <IconEye stroke="red" />}
      {!isTypeText && <IconEyeOff stroke="red" />}
    </button>
  );
};

export default ButtonEye;
