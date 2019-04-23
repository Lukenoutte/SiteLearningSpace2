<!-- Aqui é a view principal onde roda toda a aplicação -->
<template>
  <!-- Aplicação -->
  <div id="app">
    <!-- Menu -->
    <AppHeader/>
    <!-- Conteúdo -->
    <div id="content">
      <router-view/>
    </div>
    <!-- Rodapé -->
    <AppFooter/>
  </div>
</template>

<!-- JavaScript -->
<script>
//Aqui é onde devemos importar os componentes para mostrar na aplicação
import AppHeader from "./components/theme/Header";
import AppFooter from "./components/theme/Footer";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  }
};
</script>
<!-- /JavaScript -->

<!-- SASS -->
<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0b1737;
}
#content {
  padding: 203px 0px;
  background: #ececec;
}
</style>
<!-- /SASS -->