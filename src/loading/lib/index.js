import LoadingComponent from './components/loading'

let $vm

export default {
  install (Vue, options) {
    if (!$vm) {
      // 通过Vue.extend()，创建构造器
      const LoadingPlugin = Vue.extend(LoadingComponent)

      // 创建$vm实例，并挂载到div元素上
      $vm = new LoadingPlugin({
        el: document.createElement('div')
      })

      document.body.appendChild($vm.$el)
    }

    // 默认不显示
    $vm.show = false

    // 封装方法
    let loading = {
      show (text) {
        $vm.show = true
        if (text) {
          $vm.text = text
        }
      },
      hide () {
        $vm.show = false
      }
    }

    if (!Vue.$loading) {
      Vue.$loading = loading
    }

    // Vue.prototype.$loading = Vue.$loading

    Vue.mixin({
      created () {
        this.$loading = Vue.$loading
      }
    })
  }
}
