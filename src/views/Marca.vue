<template>
  <div>
    <form @submit.prevent="cadastrar">
      <h2>Marcas</h2>
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" id="nome"
            class="form-control" required autofocus
            v-model="nome">
            <button @click="listarMarcas">Listar Marcas</button>
      </div>
      <div class="form-group">
        <label for="marca">Marca</label>
        <textarea id="marca"
            class="form-control" required
            v-model="marca">
        </textarea>
      </div>
      <button class="btn btn-lg btn-primary btn-block" 
        type="submit">Salvar</button>
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
          <td>{{ Produto.nome }}</td>         
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'anotacoes',
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
    cadastrar() {
      axios.post('marca',
          {
            nome: this.nome,
            produto: this.produto
          })
        .then(res => {
          console.log(res);
          this.nome = '';
          this.marca = '';
          this.atualizar();
        })
        .catch(error => console.log(error))
    },
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