import * as TYPES from '../action-types'

let init={
    n:0
}
export default function phoneReducer(state=init,action){
    state=JSON.parse(JSON.stringify(state));
    switch(action.type){
        case '':
        break;
    }

    return state
}