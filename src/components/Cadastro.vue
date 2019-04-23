<!-- Template da tela de login -->
<template>
  <div class="container">
    <div class="row">
      <!-- Formulário de Login -->
      <div class="col-sm-12 formulario">
        <!-- Form -->
        <b-form @submit="onSubmit" v-if="show">
          <div class="row">

            <div class="col-sm-6">
              <!-- Nome -->
              <b-form-group id="input-group-2" label="Nome Completo:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.name"
                  required
                  placeholder="Digite seu nome"
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-sm-6">
              <!-- Nome -->
              <b-form-group id="input-group-2" label="CPF:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.cpf"
                  required
                  placeholder="Digite seu CPF"
                ></b-form-input>
              </b-form-group>
            </div>

            <div class="col-sm-6">
              <!-- E-mail -->
              <b-form-group
                id="input-group-1"
                label="Seu E-mail:"
                label-for="input-1"
              >
              <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Digite seu E-mail"
                ></b-form-input>
              </b-form-group> 
            </div>

            <div class="col-sm-6">
              <!-- Senha -->
              <b-form-group
                id="input-group-1"
                label="Senha:"
                label-for="input-1"
              >
              <b-form-input
                  id="input-1"
                  v-model="form.password"
                  type="password"
                  required
                  placeholder="Digite sua senha"
                ></b-form-input>
              </b-form-group>
            </div>
            
            <div class="col-sm-12">
              <!-- Botões -->
              <b-button type="submit" variant="primary">Cadastrar</b-button>
            </div>
          </div>
        </b-form>
      </div>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: 'Cadastro',
    data() {
      return {
        form: {
          name: '',
          cpf: '',
          email: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
    }
  }
</script>
<!-- /JavaScript -->

<!-- SASS -->
<style lang="scss">
body{
  height: 100%;
}


</style>
<!-- /SASS -->