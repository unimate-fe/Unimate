import create from 'zustand';

export interface ISchool {
  university?: string;
  college?: string;
  major?: string;
}

export interface IAccount {
  username?: string;
  password?: string;
}

interface RegisterState {
  // state
  school: ISchool;
  agree: boolean;
  account: IAccount;
  email?: string;

  // action
  saveSchool: (school: ISchool) => void;
  saveTos: (tos: boolean) => void;
  saveAccount: (account: IAccount) => void;
  saveEmail: (email: string) => void;
}

const initialState = {
  school: {
    university: undefined,
    college: undefined,
    major: undefined,
  },
  agree: false,
  account: {
    email: undefined,
    password: undefined,
  },
  email: undefined,
};

const useRegisterStore = create<RegisterState>(set => ({
  // state
  ...initialState,
  // action
  saveSchool: school => set({school: school}),
  saveTos: isAgree => set({agree: isAgree}),
  saveAccount: account => set({account: account}),
  saveEmail: email => set({email: email}),
}));

export default useRegisterStore;
