const BASE = import.meta.env.BASE_URL

export const NAV_LINKS = [
  { label: 'Обо мне', href: `${BASE}#about` },
  { label: 'Роадмап', href: '/roadmap/' },
  { label: 'Услуги', href: `${BASE}#services` },
  { label: 'Отзывы', href: `${BASE}#reviews` },
  { label: 'FAQ', href: `${BASE}#faq` },
]

export const SECTIONS = [
  { id: 'about', num: '01', title: 'Обо мне' },
  { id: 'for-who', num: '02', title: 'Кому подойдёт' },
  { id: 'services', num: '03', title: 'Услуги и цены' },
  { id: 'reviews', num: '04', title: 'Отзывы' },
  { id: 'faq', num: '05', title: 'Вопросы и ответы' },
]

export const ROADMAP_MINI = [
  { num: '00', title: 'Старт и введение в профессию' },
  { num: '02', title: 'SQL и данные' },
  { num: '06', title: 'Метрики и BI' },
  { num: '08', title: 'Python' },
  { num: '09', title: 'Подготовка к собеседованиям' },
  { num: '★', title: 'Оффер', offer: true },
]
