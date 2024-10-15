export interface IModalState {
  auth?: { step: number };
  error?: { text: string };
  success?: { text: string };
}

interface IInitialState {
  modalState: IModalState | null;
}

export const initialState: IInitialState = {
  modalState: null,
  // modalState: { error: { text: "Ошибка" } },
};
