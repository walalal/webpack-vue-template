import Vue from 'vue'
import App from './App.vue'
import './styles/test.css'
import './styles/style.styl'
import './assets/zebra.png'

const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
    render: h => h(App)
}).$mount(root)