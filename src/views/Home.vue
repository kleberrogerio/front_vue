<template>
    <div class="text-center">
        <font color="red" v-if="usuario.autorizacao == 'admin'"><h1>Bem vindo Administrador!</h1></font>
        <font color="green" v-if="usuario.autorizacao != 'admin'"><h1>Bem vindo!</h1></font>
        <font color="blue"><h3><p>Esse é um projeto em Vue que utiliza autenticação com JWT.</p></h3></font>
        <font color="blue"><h3><p>Projeto para o curso de Banco de Dados da FATEC - São José dos Campos.</p></h3></font>
        <body>
        <img alt="Vue logo" src="../assets/loja.jpg" width="500px" heigth="700px">       
        </body>
    </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed:{...mapState(['usuario'])},
    created () {
      if (!this.usuario) {
        this.$router.push('/login')
      }
    }
  }


</script>