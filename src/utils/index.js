import {defaultJson} from 'assets/js/index'
import lodash from 'lodash'


function deepClone(object) {
    return lodash.cloneDeep(object)
}

function getDefaultJson() {
    return deepClone(defaultJson)
}


export {getDefaultJson}
