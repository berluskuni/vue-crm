/* eslint-disable */
import localizeFilter from '@/filters/localize.filter'

export default {
  bind (el, {value}) {
    M.Tooltip.init(el, {html: localizeFilter(value)})
  },
  unbind (el) {
    const tooltip = M.Tooltip.getInstance(el);
    
    if (tooltip && tooltip.destroy) {
      tooltip.destroy()
    }

  }
}
