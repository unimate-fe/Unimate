export const strings = {
  NEXT: '다음',
};

export interface TermType {
  id: number;
  title: string;
  content: string;
}

export const termList: TermType[] = [
  {
    id: 1,
    title: '이용약관 (필수)',
    content: '**제25조 (회원의 고충처리 및 분쟁해결)** ① 유니메이트는',
  },
  {
    id: 2,
    title: '개인정보 수집 및 이용 동의 (필수)',
    content: '**제25조 (회원의 고충처리 및 분쟁해결)** ① 유니메이트는',
  },
];
