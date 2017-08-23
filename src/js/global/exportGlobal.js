/**
 * Export global varibles
 */
import { formatLang } from '../lang/index'
import { getLang } from '../selector/index'


export default function exportGlobal({
  ...props
}) {
  const targets = {
    ...props,
    formatLang,
    getLang
  }

  Object.keys(targets).map(key => {
    window[key] = targets[key]
  })
}