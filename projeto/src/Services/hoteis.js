import {http} from './api'

export default{
    listar:()=>{
        return http.get("hotel")
    }
}