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
  agree: boolean;

  // action
  saveSchool: (school: Schools) => void;
  saveTos: (tos: boolean) => void;
  saveAccount: (account: Accounts) => void;
}

const initialState = {
  username: undefined,
  email: undefined,
  password: undefined,
  university: undefined,
  major: undefined,
  agree: false,
};

const useRegisterStore = create<RegisterState>(set => ({
  // state
  ...initialState,

  // action
  saveSchool: school => set({...school}),
  saveTos: isAgree => set({agree: isAgree}),
  saveAccount: account => set({...account}),
}));

export default useRegisterStore;
