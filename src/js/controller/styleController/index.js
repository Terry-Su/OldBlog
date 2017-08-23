import autoSwitchTheme from './autoSwitchTheme'
import updateBodyBackGroundColor from './updateBodyBackGroundColor'


class StyleController {
  autoSwitchTheme() {
    return autoSwitchTheme()
  }

  updateBodyBackGroundColor(backgroundColor) {
    return updateBodyBackGroundColor(backgroundColor)
  }
}

export default new StyleController()