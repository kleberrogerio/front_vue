<template>
  <div>
    <form @submit.prevent="atualizar">
      <h2>Marcas</h2>    
        <button @click="listarMarcas">Listar Marcas</button>
    </form>
    <br>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>nome</th>
          <th>Produtos</th>          
        </tr>
      </thead>
      <tbody>
        <tr v-for="marca in marcas" :key="marca.id">
          <td>{{ marca.id }}</td>
          <td>{{ marca.nome }}</td>
          <td>{{ marca.produto.nome }}</td>         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'loja',
  data() {
    return {
      nome: '',
      marca: '',
      marcas: []
    }
  },
  computed: {
    ...mapState([
      'usuario'
    ])
  },
  methods: {    
    atualizar () {
      axios.get('/marca'+ this.usuario, 
          { headers: { Accept: 'application/json' } })
        .then(res => {
          console.log(res)
          this.marcas = res.data
        })
        .catch(error => console.log(error))
    }
  },
  created () {
    this.atualizar()
  },
  listarMarcas(){
    this.$router.push('/marca')
  }

}
</script>