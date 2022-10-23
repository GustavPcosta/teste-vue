<template>
  <div id="app">
    <Header/>
    <Cadastro/>
    <Atualizar/>
  <div>
    <Hospede/>
  </div>
    <nav>
      <div class="nav-wrapeer blue-dark-1">
      <a href="#" class="btn">Hotéis e Reservas</a>
    </div>
    </nav>
    <div class="container-form" v-for="produto of produtos" :key="produto.id">
      <form action="">
        <label>{{produto.name}}</label>
        <input type="text">
        <label>{{produto.cnpj}}</label>
        <input type="text"/>
        <label>{{produto.pais}}</label>
        <input type="text"/>
        <label>{{produto.estado}}</label>
        <input type="text"/>
        <label>{{produto.cidade}}</label>
        <input type="text"/>
        <div>
        <button class="btn-button">Salvar</button>
        </div>
        <a href="/cadastro">Não tem conta? Clique aqui!</a>
      </form>
    </div>
  </div>
</template>

<script>
import './Styles/styles.css'
import Atualizar from './Pages/Atualizar'
import Hospede from './Pages/Hospede'
import Produto from './Services/hoteis.js'
import Cadastro from './Pages/Cadastro'
import Header from './components/Header'
export default {
    data() {
        return {
            produto: []
        };
    },
    comments: {
        Header
    },
    name: "App",
    mounted() {
        Produto.listar().then(resposta => {
            console.log(resposta.data);
            this.produto = resposta.data;
        });
    },
    components: { Header,Cadastro,Atualizar,Hospede }
}

</script>

<style>
#app{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  background-color:#fafafa;
  
}
nav{
display:flex;
flex-direction:column;
}
label{
  display: flex;
  font-weight: 200;

}
</style>
