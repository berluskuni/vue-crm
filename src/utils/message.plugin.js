import localizeFilter from '@/filters/localize.filter'
/* eslint-disable */
export default {
  install(Vue, optionc) {
    Vue.prototype.$message = function(html) {
      M.toast({html})
    }

    Vue.prototype.$error = function(html) {
      M.toast({html: `[${localizeFilter('Error')}]: ${html}`})
    }
  }
}
