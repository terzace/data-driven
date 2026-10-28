export const LINKS = {
  privateTg: 'https://t.me/b_ivanov_kz',
  groupTg: 'https://t.me/data_driven_bogdan'
}

const BOT = 'https://t.me/datadrivenbogdanBot'

// Метка после start попадает в источник лида и видна в /stats бота: site_book_* для записи, site_materials_* для топ-20
export const bookTg = (place: string) => `${BOT}?start=site_book_${place}`
export const materialsTg = (place: string) => `${BOT}?start=site_materials_${place}`