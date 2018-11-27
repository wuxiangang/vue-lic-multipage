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
      api: 'refund',
      params: {
        access_key: "xu2I7vMfaqDfLm5n9uHXkp1zjWu8t1IQM9H4HUkeiEwBA8DF4Jft41E4Dt8mFEpp3WMTU9944J2X2K48TACjUtaOKdi38JOgCSjiiQ6H8Gew2iz5zy83P9U4",
        amount: '2',
        coin_name: 'BTC',
        user_type: 1
      }
    })
  }
})
