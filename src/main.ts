import {createApp} from 'vue'
import './style.css'
import App from './App.vue'

/** 引入uno.css，不引入不生效 */
import 'uno.css'


createApp(App).mount('#app').$nextTick(() => {
  // Remove Preload scripts loading
  postMessage({ payload: 'removeLoading' }, '*')

  // Use contextBridge
  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message)
  })
})
