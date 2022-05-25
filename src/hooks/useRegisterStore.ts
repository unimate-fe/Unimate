import {UserRegisterType} from '@src/apis/registerApis/types';
import create from 'zustand';

interface Schools {
  university?: number;
  college?: number;
  major?: number;
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
  university?: number;
  college?: number;
  major?: number;
  use_agree: boolean;
  information_agree: boolean;
  user?: UserRegisterType;

  // action
  saveSchool: (school: Schools) => void;
  saveTos: (term1: boolean, term2: boolean) => void;
  saveAccount: (account: Accounts) => void;
  saveUser: (user: UserRegisterType) => void;
}

const initialState = {
  username: undefined,
  email: undefined,
  password: undefined,
  university: undefined,
  major: undefined,
  use_agree: false,
  information_agree: false,
  user: undefined,
};

const useRegisterStore = create<RegisterState>(set => ({
  // state
  ...initialState,

  // action
  saveSchool: school => set({...school}),
  saveTos: (term1, term2) => set({use_agree: term1, information_agree: term2}),
  saveAccount: account => set({...account}),
  saveUser: userInfo => set({user: userInfo}),
}));

export default useRegisterStore;
