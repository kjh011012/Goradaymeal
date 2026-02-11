export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  includes: string[];
  duration: string;
  availableTime: string;
  reservable: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  menuCount: number;
}

export const CATEGORIES: Category[] = [
  {
    id: "package",
    name: "패키지 식사",
    description: "농촌 체험과 함께하는 특별한 코스 식사",
    image: "https://images.unsplash.com/photo-1761303506087-9788d0a98e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjB0cmFkaXRpb25hbCUyMHRhYmxlJTIwc2V0dGluZyUyMG1lYWx8ZW58MXx8fHwxNzcwNzg3NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    menuCount: 3,
  },
  {
    id: "reservation",
    name: "예약제 한상 차림",
    description: "정성 가득한 전통 한상을 미리 예약하세요",
    image: "https://images.unsplash.com/photo-1769558688746-7ac36d8ce999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjB0cmFkaXRpb25hbCUyMGZvb2QlMjBiYW5jaGFufGVufDF8fHx8MTc3MDc4NzY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    menuCount: 2,
  },
  {
    id: "breakfast",
    name: "아침 식사",
    description: "건강하고 든든한 시골 아침 한 끼",
    image: "https://images.unsplash.com/photo-1658040863302-f529abcf5881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjByaWNlJTIwYnJlYWtmYXN0JTIwdGFibGV8ZW58MXx8fHwxNzcwNzg3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    menuCount: 2,
  },
  {
    id: "seasonal",
    name: "계절 특선 메뉴",
    description: "제철 재료로 만든 한정 메뉴",
    image: "https://images.unsplash.com/photo-1560100927-c32f29063ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjBzZWFzb25hbCUyMHZlZ2V0YWJsZSUyMGRpc2h8ZW58MXx8fHwxNzcwNzg3NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    menuCount: 2,
  },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "m1",
    name: "마을 한상 코스",
    description: "우리 마을 텃밭에서 기른 신선한 재료로 차린 정성 한상",
    price: 35000,
    image: "https://images.unsplash.com/photo-1769558688746-7ac36d8ce999?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjB0cmFkaXRpb25hbCUyMGZvb2QlMjBiYW5jaGFufGVufDF8fHx8MTc3MDc4NzY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "package",
    includes: ["계절 나물 5종", "된장찌개", "구이류", "밥", "후식"],
    duration: "약 90분",
    availableTime: "11:30 ~ 14:00 / 17:30 ~ 20:00",
    reservable: true,
  },
  {
    id: "m2",
    name: "농촌 체험 식사",
    description: "텃밭 수확 체험 후 직접 수확한 재료로 만드는 특별 식사",
    price: 45000,
    image: "https://images.unsplash.com/photo-1635260863511-9279f2166c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjBiaWJpbWJhcCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MDc4NzY3MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "package",
    includes: ["텃밭 체험", "비빔밥", "계절 반찬", "식혜"],
    duration: "약 120분 (체험 포함)",
    availableTime: "10:00 ~ 14:00",
    reservable: true,
  },
  {
    id: "m3",
    name: "특선 구이 코스",
    description: "숯불에 정성껏 구운 고기와 함께하는 풍성한 저녁 코스",
    price: 55000,
    image: "https://images.unsplash.com/photo-1590189599125-67138c6509ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjBCQlElMjBtZWF0JTIwZ3JpbGx8ZW58MXx8fHwxNzcwNzg3NjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "package",
    includes: ["모듬 구이", "된장찌개", "계절 샐러드", "쌈 채소", "후식"],
    duration: "약 100분",
    availableTime: "17:30 ~ 21:00",
    reservable: true,
  },
  {
    id: "m4",
    name: "전통 한상 차림",
    description: "할머니의 손맛이 깃든 전통 한정식 풀코스",
    price: 40000,
    image: "https://images.unsplash.com/photo-1761303506087-9788d0a98e87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjB0cmFkaXRpb25hbCUyMHRhYmxlJTIwc2V0dGluZyUyMG1lYWx8ZW58MXx8fHwxNzcwNzg3NjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "reservation",
    includes: ["전 2종", "나물 반찬 5종", "생선구이", "찌개", "밥", "후식"],
    duration: "약 90분",
    availableTime: "12:00 ~ 14:00 / 18:00 ~ 20:00",
    reservable: true,
  },
  {
    id: "m5",
    name: "계절 두부 한상",
    description: "매일 아침 직접 만드는 손두부로 차린 건강 한상",
    price: 28000,
    image: "https://images.unsplash.com/photo-1760228865341-675704c22a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjB0b2Z1JTIwc3RldyUyMGpqaWdhZXxlbnwxfHx8fDE3NzA3ODc2NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "reservation",
    includes: ["손두부", "두부찌개", "계절 반찬", "밥"],
    duration: "약 60분",
    availableTime: "11:30 ~ 14:00",
    reservable: true,
  },
  {
    id: "m6",
    name: "시골 아침 밥상",
    description: "갓 지은 솥밥과 정갈한 반찬으로 시작하는 하루",
    price: 15000,
    image: "https://images.unsplash.com/photo-1658040863302-f529abcf5881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjByaWNlJTIwYnJlYWtmYXN0JTIwdGFibGV8ZW58MXx8fHwxNzcwNzg3NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "breakfast",
    includes: ["솥밥", "된장국", "계란말이", "김", "나물 반찬"],
    duration: "약 40분",
    availableTime: "07:30 ~ 09:30",
    reservable: true,
  },
  {
    id: "m7",
    name: "건강 죽 아침",
    description: "속이 편안한 전통 방식의 정성 가득한 죽 한 그릇",
    price: 12000,
    image: "https://images.unsplash.com/photo-1724158311225-24875cacdea7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjBwb3JyaWRnZSUyMGp1ayUyMGhlYWx0aHl8ZW58MXx8fHwxNzcwNzg3NjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "breakfast",
    includes: ["계절 죽", "장아찌", "김치"],
    duration: "약 30분",
    availableTime: "07:30 ~ 09:30",
    reservable: true,
  },
  {
    id: "m8",
    name: "봄나물 비빔밥 특선",
    description: "이른 봄, 마을 뒷산에서 채취한 나물로 만든 향긋한 비빔밥",
    price: 22000,
    image: "https://images.unsplash.com/photo-1560100927-c32f29063ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjBzZWFzb25hbCUyMHZlZ2V0YWJsZSUyMGRpc2h8ZW58MXx8fHwxNzcwNzg3NjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "seasonal",
    includes: ["봄나물 비빔밥", "된장국", "계절 김치"],
    duration: "약 50분",
    availableTime: "11:30 ~ 14:00",
    reservable: true,
  },
  {
    id: "m9",
    name: "해물 파전 세트",
    description: "비 오는 날 생각나는, 바삭한 해물 파전과 막걸리 세트",
    price: 25000,
    image: "https://images.unsplash.com/photo-1651375562178-f37f5f0bf857?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLb3JlYW4lMjBwYW5jYWtlJTIwcGFqZW9uJTIwc2F2b3J5fGVufDF8fHx8MTc3MDc4NzY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "seasonal",
    includes: ["해물 파전", "막걸리 1병", "김치전", "도토리묵"],
    duration: "약 60분",
    availableTime: "12:00 ~ 20:00",
    reservable: true,
  },
];
