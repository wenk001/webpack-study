import $ from 'jQuery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
import Vue from 'vue'
import App from './components/App.vue'

$(function(){
    $('li:odd').css('backgroundColor','yellow')
    $('li:even').css('backgroundColor','green')
})

class person{
    static aaa = '123'
}
console.log(person.aaa)

const vm = new Vue({
    el: '#app',
    render: h => h(App)
})