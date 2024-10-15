import { IModalState } from "@/store/modal/initialState";

const useGetCurrentModal = (modalState: IModalState | null) => {
  if (!modalState) return;

  const key = Object.keys(modalState)[0];

  let modal;

  switch (key) {
    case "error":
      modal = key;
      break;

    default:
      modal = `${key}-${modalState[key]["step"]}`;
  }

  return modal;
};

export default useGetCurrentModal;
