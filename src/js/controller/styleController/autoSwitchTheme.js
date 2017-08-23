import { getTheme } from '../../selector/index'
import { themes } from '../../store/initialState'
import action from '../../action/index'

import updateBodyBackGroundColor from './updateBodyBackGroundColor'

import { getThemeSetting } from '../../style/theme'


const {
  MODIFY_INNERSTATE
} = action

function* themesIteratorMaker() {
  while (true) {
    let theme = getTheme()
    const index = (themes.indexOf(theme) + 1) % themes.length
    yield themes[index]
  }
}

const themesMaker = themesIteratorMaker()

export default function autoSwitchTheme() {
  // const newTheme = themesMaker.next()
  const newTheme = themesMaker.next().value
  MODIFY_INNERSTATE('theme', newTheme)
  
  const themeSetting = getThemeSetting(newTheme)
  updateBodyBackGroundColor(
    themeSetting.backgroundColor
  )  
}

