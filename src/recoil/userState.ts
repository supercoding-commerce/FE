import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface UserType {
  email: string;
  role: 'USER' | 'SELLER' | '';
  // TODO-YD: admin 계정의 auth 가 어떻게 내려오는지 확인 후 추가예정
}

export const userState = atom<UserType>({
  key: 'userState',
  default: {
    email: '',
    role: '',
  },
  effects_UNSTABLE: [persistAtom],
});
