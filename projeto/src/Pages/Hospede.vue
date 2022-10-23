<template>
    <div class='container-hospede' v-for="hospede of hospedes" :key="hospede.id">
        <form>
        <label>{{hotel.numeroReserva}}</label>
        <input type="text">
        <label>{{hotel.apartamento}}</label>
        <input type="text"/>
        <label>{{hotel.dataCheckin}}</label>
        <input type="text"/>
        <label>{{hotel.dataCheckout}}</label>
        <input type="text"/>
        <label>{{hotel.status}}</label>
        <input type="text"/>
        <div>

            
        </div>
        </form>
    </div>
</template>
<script>
import listarHospede from '../Services/hospede'
export default {
    data(){
        return{
            hospede:[]
        }
    },
    name:'Hospede',
    methods(){
        listarHospede.listar().then(resposta=>{
            this.hospede = resposta.data
        });
    }

}

</script>
<style scoped>
.container-hospede{
    display: flex;
    flex-direction: column;
}
form{
    display: flex;
    flex-direction: column;
}
</style>