import { create, StateCreator } from 'zustand';
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware';
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
interface FormState {
  reset: () => void;
  firstName: string;
  setFirstName: (value: string) => void;
  lastName: string;
  setLastName: (value: string) => void;
  phoneNumber: string;
  setPhoneNumber: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  date: Date;
  setDate: (value: Date) => void;
  time: string;
  setTime: (value: string) => void;
  partySize: number;
  setPartySize: (value: number) => void;
}

type PersistStore = (
  config: StateCreator<StoreState>,
  options: PersistOptions<StoreState>
) => StateCreator<StoreState>;

type PersistForm = (
  config: StateCreator<FormState>,
  options: PersistOptions<FormState>
) => StateCreator<FormState>;

const today = new Date();
export const useStore = create<StoreState, []>(
  (set): StoreState => ({
    navIsOpen: false,
    setNavIsOpen: (value: any) => set({ navIsOpen: value }),
    modalIsOpen: false,
    setModalIsOpen: (value: boolean) => set({ modalIsOpen: value }),
    shopMenuIsOpen: false,
    setShopMenuIsOpen: (value: any) => set({ shopMenuIsOpen: value }),
  })
);

const initialState: any = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  time: '',
  date: today,
  partySize: 0,
};

export const useFormStore = create<FormState, []>(
  (persist as PersistForm)(
    (set, get): FormState => ({
      firstName: '',
      setFirstName: (value: string) => set({ firstName: value }),
      lastName: '',
      setLastName: (value: string) => set({ lastName: value }),
      email: '',
      setEmail: (value: string) => set({ email: value }),
      phoneNumber: '',
      setPhoneNumber: (value: string) => set({ phoneNumber: value }),
      time: '',
      setTime: (value: string) => set({ time: value }),
      date: today,
      setDate: (value: Date) => set({ date: value }),
      partySize: 0,
      setPartySize: (value: number) => set({ partySize: value }),
      reset: () => {
        set(initialState);
      },
    }),
    {
      name: 'formState',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const formValues = {
  firstName: useFormStore.getState().firstName,
  lastName: useFormStore.getState().lastName,
  email: useFormStore.getState().email,
  phoneNumber: useFormStore.getState().phoneNumber,
  time: useFormStore.getState().time,
  date: useFormStore.getState().date,
};
