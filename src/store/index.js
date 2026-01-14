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
        }
    }
})
