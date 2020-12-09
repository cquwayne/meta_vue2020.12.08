// store.js 是一个实现了浏览器的本地存储的 JavaScript 封装 API
// import...from...的from命令后面可以跟很多路径格式，
// 若只给出vue，axios这样的包名，则会自动到node_modules中加载；
// 若给出相对路径及文件前缀，则到指定位置寻找。
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    // root: 'http://10.1.1.230:8000/api/manage/',
    // root: 'http://localhost:8000/api/manage/',
    // root: 'http://39.106.151.147/api/',
    // rootApi: 'http://39.106.151.147/api/',
    // root: 'http://47.92.117.58/api/',
    // rootApi: 'http://47.92.117.58/api/',
    root: 'http://localhost:8000/api/',
    rootApi: 'http://localhost:8000/api/',
    posting: false,
    pageLoading: false,
    scrollLoading: false,
    loginTime: JSON.parse(localStorage.getItem('loginTime')) || null,
    systemTime: JSON.parse(localStorage.getItem('systemTime')) || null,
    auth: JSON.parse(localStorage.getItem('auth')) || null,
    token: JSON.parse(localStorage.getItem('auth')) ? JSON.parse(localStorage.getItem('auth')).token : null,
    metadata: JSON.parse(localStorage.getItem('metadata')) || null,
    systemTable: JSON.parse(localStorage.getItem('systemTable')) || null,
    categories: JSON.parse(localStorage.getItem('categories')) || null,
    cateId: JSON.parse(localStorage.getItem('cateId')) || null,
    baseTableMap: JSON.parse(localStorage.getItem('baseTableMap')) || null,
    breadcrumbList: JSON.parse(localStorage.getItem('breadcrumbList')) || null
  },
  mutations: {
    clear (state) {
      localStorage.removeItem('systemTable')
      localStorage.removeItem('categories')
      localStorage.removeItem('baseTableMap')
      state.systemTable = null
      state.categories = null
      state.baseTableMap = null
    },
    setBreadcrumbList (state, breadcrumbList) {
      localStorage.setItem('breadcrumbList', JSON.stringify(breadcrumbList))
      state.breadcrumbList = JSON.parse(localStorage.getItem('breadcrumbList'))
    },
    setSystemTime (state) {
      localStorage.setItem('systemTime', JSON.stringify(new Date().getTime()))
      state.systemTime = JSON.parse(localStorage.getItem('systemTime'))
    },
    setSystemTable (state, systemTable) {
      localStorage.setItem('systemTable', JSON.stringify(systemTable))
      state.systemTable = JSON.parse(localStorage.getItem('systemTable'))
    },
    removeSystemTable (state) {
      localStorage.removeItem('systemTable')
      state.systemTable = null
    },
    setCategories (state, categories) {
      localStorage.setItem('categories', JSON.stringify(categories))
      state.categories = JSON.parse(localStorage.getItem('categories'))
    },
    removeCategories (state) {
      localStorage.removeItem('categories')
      state.categories = null
    },
    setBaseTableMap (state, baseTableMap) {
      localStorage.setItem('baseTableMap', JSON.stringify(baseTableMap))
      state.baseTableMap = JSON.parse(localStorage.getItem('baseTableMap'))
    },
    removeBaseTableMap (state) {
      localStorage.removeItem('baseTableMap')
      state.baseTableMap = null
    },
    setMetadata (state, metadata) {
      localStorage.setItem('metadata', JSON.stringify(metadata))
      state.metadata = JSON.parse(localStorage.getItem('metadata'))
    },
    removeMetadata (state) {
      localStorage.removeItem('metadata')
      localStorage.removeItem('categories')
      state.metadata = null
    },
    setLoginTime (state) {
      localStorage.setItem('loginTime', JSON.stringify(new Date().getTime()))
      state.loginTime = JSON.parse(localStorage.getItem('loginTime'))
    },
    login (state, auth) {
      localStorage.setItem('auth', JSON.stringify(auth))
      // state.token = JSON.parse(localStorage.getItem('auth')).token
      state.auth = JSON.parse(localStorage.getItem('auth'))
      this.commit('setLoginTime')
    },
    logout (state) {
      localStorage.removeItem('auth')
      localStorage.removeItem('loginTime')
      state.auth = null
      state.loginTime = null
    },
    updateAuth (state, user) {
      let auth = JSON.parse(localStorage.getItem('auth'))
      auth['user'] = user
      localStorage.setItem('auth', JSON.stringify(auth))
      state.auth = JSON.parse(localStorage.getItem('auth'))
    }
  }
})
