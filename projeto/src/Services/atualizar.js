import {http} from './api'
export default {
    atualizar:()=>{
        return http.put("hotel");
    }
}