import { 
  themes,
  langs
} from '../store/initialState'
import action from '../action/index'
import { getLang } from '../selector/index'

const {
  MODIFY_INNERSTATE
} = action

function* langIteratorMaker() {
  while (true) {
    let lang = getLang()
    const index = (langs.indexOf(lang) + 1) % langs.length
    yield langs[index]
  }
}

const langMaker = langIteratorMaker()

export function autoSwitchLang() {
  const lang = langMaker.next().value

  MODIFY_INNERSTATE('lang', lang)
}

class LangController {
  autoSwitchLang() {
    return autoSwitchLang()
  }
}


export default new LangController()