import create from 'zustand';
import {persist} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserRegisterType} from '@src/apis/registerApis/types';

interface Schools {
  university?: number;
  college?: number;
  major?: number;
}

interface Accounts {
  username: string;
  password: string;
}

export interface RegisterState {
  hasHydrated: boolean;
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
  token?: string;
  nickName?: string;
  mbti?: string[];
  interestList: number[];
  // action
  saveSchool: (school: Schools) => void;
  saveTos: (term1: boolean, term2: boolean) => void;
  saveAccount: (account: Accounts) => void;
  saveUser: (user: UserRegisterType) => void;
  setToken: (token: string) => void;
  clearToken: () => void;
  saveNickName: (nickName: string) => void;
  saveMBTI: (list: string[]) => void;
  saveInterestList: (list: number[]) => void;
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
  token: undefined,
  nickName: undefined,
  mbti: [],
  interestList: [],
};

const useRegisterStore = create(
  persist<RegisterState>(
    set => ({
      hasHydrated: false,
      // state
      ...initialState,

      // action
      saveSchool: school => set({...school}),
      saveTos: (term1, term2) =>
        set({use_agree: term1, information_agree: term2}),
      saveAccount: account => set({...account}),
      saveUser: userInfo => set({user: userInfo}),
      setToken: token => set({token}),
      clearToken: () => set({token: undefined}),

      saveNickName: nickName => set({nickName}),
      saveMBTI: mbtiList => set({mbti: mbtiList}),
      saveInterestList: interestList => set({interestList}),
    }),
    {
      name: 'register-state',
      getStorage: () => AsyncStorage,
      onRehydrateStorage: () => () => {
        useRegisterStore.setState({hasHydrated: true});
      },
    },
  ),
);

export default useRegisterStore;
