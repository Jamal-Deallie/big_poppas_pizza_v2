import { create, StateCreator } from 'zustand';
import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

interface IFormValues {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  date: Date;
  time: string;
  partySize: number;
}

interface StoreState {
  navIsOpen: boolean;
  setNavIsOpen: (value: boolean) => void;
  shopMenuIsOpen: boolean;
  setShopMenuIsOpen: (value: boolean) => void;
  modalIsOpen: boolean;
  setModalIsOpen: (value: boolean) => void;
}

export const useStore = createWithEqualityFn<StoreState, []>(
  (set): StoreState => ({
    navIsOpen: false,
    setNavIsOpen: (value: any) => set({ navIsOpen: value }),
    modalIsOpen: false,
    setModalIsOpen: (value: boolean) => set({ modalIsOpen: value }),
    shopMenuIsOpen: false,
    setShopMenuIsOpen: (value: any) => set({ shopMenuIsOpen: value }),
  }),
  shallow
);
