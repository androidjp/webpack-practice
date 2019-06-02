// import tpl from './layer.html'
import tpl from './layer.ejs'
import style from './layer.less'

function layer() {
    return {
        name: 'layer',
        tpl
    }
}

export default layer;