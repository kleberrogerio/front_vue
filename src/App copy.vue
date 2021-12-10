<template>
  <div id="app" class="container">
    <div id="nav" class="row text-center">
      <router-link to="/">Home</router-link> | 
      <router-link to="/marca">Marca</router-link> | 
      <router-link to="/produto">Produto</router-link> | 
      <router-link to="/venda">Venda</router-link> | 
      <router-link to="/usuario">Usuario</router-link> | 
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>
