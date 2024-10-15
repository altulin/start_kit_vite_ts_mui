import { useAppSelector } from "@/hooks/hook";
import ModalAuth1 from "./auth/ModalAuth1";
import ModalError from "./error/ModalError";
import useGetCurrentModal from "@/hooks/getCurrentModal";
import { FC } from "react";
import { IModalState } from "@/store/modal/initialState";

interface IModalElements {
  modalState: IModalState;
}

const ModalElements: FC<IModalElements> = ({ modalState }) => {
  const modal = useGetCurrentModal(modalState);

  return (
    <>
      {modal === "auth-1" && <ModalAuth1 />};
      {modal === "error" && <ModalError />}
    </>
  );
};

const ModalManager = () => {
  const { modalState } = useAppSelector((state) => state.modal);
  return modalState ? <ModalElements modalState={modalState} /> : null;
};

export default ModalManager;
