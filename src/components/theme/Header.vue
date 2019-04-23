<!-- Menu da Aplicaçãp -->
<template>
  <div class="AppHeader">
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      style="background-color: #193880!important;"
    >
      <!-- Logo -->
      <b-navbar-brand id="logo-main" :to="{name: 'Login'}">
        <img id="logo" src="../../assets/profile.png">
        <h3 class="nome-site">Learning Space</h3>
      </b-navbar-brand>

      <!-- Menu Responsivo -->
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <!-- NavBar -->
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Login'}">
              <b>Login</b>
            </b-nav-item>
            <b-nav-item :to="{name: 'Feed'}">
              <b>Feed</b>
            </b-nav-item>
          </b-navbar-nav>
          <!-- Informações do Usuário -->
          <b-nav-item-dropdown class="userInfo" right>
            <template slot="button-content">
              <em id="nome-user">Fulano da Silva</em>
            </template>
            <b-dropdown-item :to="{name: 'Perfil'}">Perfil</b-dropdown-item>
            <b-dropdown-item href="#logout">Encerrar Sessão</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: "AppHeader"
};
</script>
<!-- /JavaScript -->

<!-- SASS -->
<style lang="scss">
.userInfo {
  background: #0f2966;
  border-radius: 5px;
  margin-left: 20px;
  em {
    color: #fff;
  }
}
#logo {
  height: 60px;
  padding-left: 30px;
}
.nav-link {
  padding-right: 1.5rem !important;
  padding-left: 1.5rem !important;
  color: #fff !important;
}
.nome-site {
  position: relative;
  float: right;
  padding-left: 30px;
  padding-top: 10px;
  font-family: initial;
}

#nome-user {
  font-weight: bold !important;
}
.dropdown-toggle::after {
  margin-left: 15px;
}
.form-group {
  margin-bottom: 2rem;
}
</style>
<!-- /SASS -->