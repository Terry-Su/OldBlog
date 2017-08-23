import {
  getLang
} from '../selector/index'


export function formatLang({
  zh,
  en
}) {
  const langs = {
    zh,
    en
  }
  const lang = getLang()

  try {
    return langs[lang]
  } catch(e) {
    throw(e)
    return ''
  }
}