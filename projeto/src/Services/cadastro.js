
import {http} from './api'
export default {
    cadastrar:()=>{
        return http.post("hotel");
    }
}