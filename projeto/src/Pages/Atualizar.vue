<template>
    <div class="">
        <div class="container-atualizar" v-for="hotel of hoteis" :key="hotel.id">
        <form action="">
        <label>{{hotel.name}}</label>
        <input type="text">
        <label>{{hotel.cnpj}}</label>
        <input type="text"/>
        <label>{{hotel.pais}}</label>
        <input type="text"/>
        <label>{{hotel.estado}}</label>
        <input type="text"/>
        <label>{{hotel.cidade}}</label>
        <input type="text"/>
        <div>
        <button class="btn-button">Atualizar as informações</button>
        </div>
      </form>
    </div>
    </div>
</template>
<script>
import HotelAtualizar from '../Services/atualizar'
export default{
    data(){
        return{
            hotel:[]
        }
    },
    name:'Atualizar',
    methods(){
        HotelAtualizar.atualizar().then(resposta=>{
            this.hotel = resposta.data
        })
    }
}
</script>

<style scoped>
    .container-atualizar{
        display: flex;
        flex-direction: column;
    }
</style>