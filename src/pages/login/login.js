import Vue from 'vue'

import { fetch } from '@/assets/js/http'
import HelloWorld from '../../components/HelloWorld'

Vue.prototype.$fetch = fetch

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { HelloWorld },
  created () {
    this.$fetch({
      api: 'internationCode'
    })

    this.$fetch({
      url: '/api/v1/common/get_country',
      method: 'get'
    })
  }
})
