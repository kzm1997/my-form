import Vuex from './vuex'
import {getDefaultJson} from "@/utils";

export default new Vuex.Store({
    state:{
        select:{},
        data:getDefaultJson(),
    },
    mutations:{
        SET_SELECT(state,select){
            if (state.select===select)return;
            state.select=select;
        },
        DELETE_ELEMENT(state, { list, index }) {
            if (list.length - 1 === index) {
                state.select = index ? list[index - 1] : {}
            } else {
                state.select = list[index + 1]
            }

            list.splice(index, 1)
        }
    }
})
