import {defaultJson} from 'assets/js/index'
import lodash from 'lodash'


function deepClone(object) {
    return lodash.cloneDeep(object)
}

function getDefaultJson() {
    return deepClone(defaultJson)
}

function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
function uuid(){
    return Date.now() + '_' + S4()
}

export {getDefaultJson,deepClone,uuid}
