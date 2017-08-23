import { getTheme } from '../../selector/index'
import { themes } from '../../store/initialState'
import action from '../../action/index'

import updateBodyBackGroundColor from './updateBodyBackGroundColor'

import { getThemeSetting } from '../../style/theme'


const {
  MODIFY_INNERSTATE
} = action

function* themeIteratorMaker() {
  while (true) {
    let theme = getTheme()
    const index = (themes.indexOf(theme) + 1) % themes.length
    yield themes[index]
  }
}

const themeMaker = themeIteratorMaker()

export default function autoSwitchTheme() {
  const theme = themeMaker.next().value

  MODIFY_INNERSTATE('theme', theme)
  
  const themeSetting = getThemeSetting(theme)
  updateBodyBackGroundColor(
    themeSetting.backgroundColor
  )  
}

