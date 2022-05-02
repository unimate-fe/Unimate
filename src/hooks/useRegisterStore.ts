import create from 'zustand';

interface Schools {
  university?: string;
  major?: string;
}

interface Accounts {
  username: string;
  password: string;
}

interface RegisterState {
  // state
  username?: string;
  email?: string;
  password?: string;
  university?: string;
  major?: string;
  use_agree: boolean;
  information_agree: boolean;

  // action
  saveSchool: (school: Schools) => void;
  saveTos: (term1: boolean, term2: boolean) => void;
  saveAccount: (account: Accounts) => void;
}

const initialState = {
  username: undefined,
  email: undefined,
  password: undefined,
  university: undefined,
  major: undefined,
  use_agree: true,
  information_agree: true,
};

const useRegisterStore = create<RegisterState>(set => ({
  // state
  ...initialState,

  // action
  saveSchool: school => set({...school}),
  saveTos: (term1, term2) => set({use_agree: term1, information_agree: term2}),
  saveAccount: account => set({...account}),
}));

export default useRegisterStore;
