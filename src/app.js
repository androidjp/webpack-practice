import Layer from './components/layer/layer'

const App = function() {
    let dom = document.getElementById('app')
    let layer = new Layer()
    // dom.innerHTML = layer.tpl
    dom.innerHTML = layer.tpl({
        name: 'john',
        arr: ['apple', 'banana']
    })
}

new App()