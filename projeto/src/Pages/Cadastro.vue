<template>
    <div class="container-cadastro" v-for="hotel of hoteis" :key="hotel.id">
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
        <button class="btn-button">Salvar</button>
        </div>
      </form>
    </div>
</template>

<script>

import Hoteis from '../Services/cadastro'
export default {
    data(){
        return{
            hoteis:[]
        }
    },
    name:'Cadastro',
    methods(){
        Hoteis.cadastrar().then(resposta=>{
            this.hotel = resposta.data
        })
    }
}
</script>
<style scoped>
    .container-cadastro{
        display: flex;
        flex-direction: column;
    }
    form{
        margin: 0 25px;
    }
</style>