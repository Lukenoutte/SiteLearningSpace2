<!-- Template da tela de login -->
<template>
  <div class="container">
    <div class="row">
      <!-- Imagem Learning Space -->
      <div class="col-sm-7">
        <div
          class="thumb"
          :style="{'background-image': 'url(' + require('../assets/students.jpeg') + ')'}"
        >
          <div class="shadow">
            Sua plataforma de aprendizado colaborativo
            <b-button variant="primary" @click="showModal">Crie Já Sua Conta</b-button>
          </div>
        </div>
      </div>

      <!-- Formulário de Login -->
      <div class="col-sm-5 formulario">
        <!-- Form -->
        <b-form @submit="onSubmit" v-if="show">
          <!--Head-->
          <div align="center">
            <h1 id="h1-login">Login</h1>
          </div>
          <div align="center" style="font-size: 15px; color:#0B1737;">
            <p>Insira seus dados para acessar sua área de aprendizado</p>
          </div>
          <br>

          <!-- E-mail -->
          <div style="margin-bottom:10px;" align="center">
            <b-form-group>
              <span class="d-inline-block icons">
                <font-awesome-icon icon="graduation-cap"/>
              </span>
              <b-form-input
                id="matricula"
                v-model="form.matricula"
                type="text"
                required
                placeholder="Matrícula"
                class="d-inline-block field"
              ></b-form-input>
            </b-form-group>
          </div>

          <!-- Senha -->
          <div style="margin-bottom:10px;">
            <b-form-group>
              <span class="d-inline-block icons">
                <font-awesome-icon icon="lock"/>
              </span>
              <b-form-input
                id="password"
                v-model="form.password"
                type="password"
                required
                placeholder="Senha"
                class="d-inline-block field"
              ></b-form-input>
            </b-form-group>
          </div>

          <div id="remember" align="center">
            <b-form-checkbox
              id="rememberMe"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
              class="d-inline-block"
            >Lembrar de mim</b-form-checkbox>
            <b-link id="forgotPassword" href="#" class="d-inline-block">Esqueceu a senha?</b-link>
          </div>

          <!-- Botões -->
          <div align="center" style="margin-bottom:10px;">
            <!--<b-button type="submit" variant="light">Esqueci Minha Senha</b-button>-->
            <b-button id="login" type="submit" variant="primary">Acessar o Learning Space</b-button>
          </div>
        </b-form>
      </div>
    </div>

    <!-- ########################### MODAL CADASTRO  ###########################3-->
    <div>
      <b-modal ref="my-modal" hide-footer title="Cadastre-se">
        <b-form>
          <div class="d-block text-center">
            <h5>Bem Vindo a sua plataforma de aprendizado!</h5>
          </div>

          <b-form-group>
            <!-- Matrícula -->
            <div style="margin-top:20px; margin-bottom:10px;" align="center">
              <b-form-group>
                <span id class="d-inline-block icons">
                  <font-awesome-icon icon="graduation-cap"/>
                </span>
                <b-form-input
                  id="matriculaRegister"
                  type="matricula"
                  required
                  placeholder="Matrícula"
                  class="d-inline-block field"
                ></b-form-input>
              </b-form-group>
            </div>

            <!-- Nome -->
            <div style="margin-top:20px; margin-bottom:10px;" align="center">
              <b-form-group>
                <span id class="d-inline-block icons">
                  <font-awesome-icon icon="user"/>
                </span>
                <b-form-input
                  id="name"
                  type="text"
                  required
                  placeholder="Nome"
                  class="d-inline-block field"
                ></b-form-input>
              </b-form-group>
            </div>

            <!-- E-mail -->
            <div style="margin-top:20px; margin-bottom:10px;" align="center">
              <b-form-group>
                <span id class="d-inline-block icons">
                  <font-awesome-icon icon="at"/>
                </span>
                <b-form-input
                  id="emailRegister"
                  type="email"
                  required
                  placeholder="E-mail"
                  class="d-inline-block field"
                ></b-form-input>
              </b-form-group>
            </div>

            <!-- Curso -->
            <div style="margin-bottom:10px;">
              <b-form-group>
                <span id class="icons" style="margin-right:10px;">
                  <font-awesome-icon icon="book"/>
                </span>
                <select id="course" v-model="selected" class="d-inline-block form-control">
                  <option selected>Selecione seu curso</option>
                  <option v-for="user in options" :value="user.id">{{user.name}}</option>
                </select>
                <!-- <b-form-input
                  id="course"
                  type="text"
                  required
                  placeholder="Curso"
                class='d-inline-block '></b-form-input>-->

                <b-form-input
                  id="period"
                  type="number"
                  max="10"
                  required
                  placeholder="Período"
                  class="d-inline-block"
                ></b-form-input>
              </b-form-group>
            </div>

            <!-- Senha -->
            <div style="margin-bottom:10px;">
              <b-form-group>
                <span id class="d-inline-block icons">
                  <font-awesome-icon icon="lock"/>
                </span>
                <b-form-input
                  id="password"
                  type="password"
                  required
                  placeholder="Senha"
                  class="d-inline-block field"
                ></b-form-input>
              </b-form-group>
            </div>

            <!--
            <div>
              <b-form-group>
                <b-button id='signUpGoogle' type="submit" variant="primary">Cadastrar com o Google</b-button>
                <b-button id='signUpFacebook' type="submit" variant="primary">Cadastrar com o Facebook</b-button>
              </b-form-group>
            </div>
            -->
            <div align="center">
              <b-form-group>
                <b-button id="signUp" type="submit" variant="outline-primary">Cadastrar</b-button>
              </b-form-group>
            </div>
          </b-form-group>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      selected: null,
      options: [],
      form: {
        matricula: "",
        password: ""
      },
      show: true
    };
  },
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => (this.options = response.data));
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    showModal() {
      this.$refs["my-modal"].show();
    }
  }
};
</script>
<!-- /JavaScript -->

<!-- SASS -->
<style lang="scss">
.container {
  padding-bottom: 10px;
}

.thumb {
  width: 100%;
  height: 400px;
  background-size: cover !important;
  position: relative;
  .shadow {
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    width: 100%;
    color: #ffff !important;
    font-size: 24px;
  }
}
.formulario {
  margin-top: 50px;
}
#email {
  width: 95%;
}
#login {
  margin-top: 30px;
  background-color: #193880;
  border-color: #193880;
}
#remember {
  margin-left: -150px;
  font-size: 13px;
  width: 100%;
  display: inline-block;
}
#rememberMe {
  margin-left: -200px;
  float: left;
  display: inline-block;
}
#forgotPassword {
  float: right;
  display: inline-block;
  color: #193880;
}
.field {
  float: right;
  width: 95%;
}
.icons {
  margin-top: 7px;
  float: left;
}
.userIcon {
  margin-top: 7px;
  float: left;
}
#course {
  width: 58.5%;
}
#period {
  width: 35%;
}
#h1-login {
  font-weight: bold;
}

.custom-control-input:checked ~ .custom-control-label::before {
  color: #fff;
  border-color: #193880;
  background-color: #193880;
}
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before {
  border-color: #193880;
}
.btn-primary {
  color: #fff;
  background-color: #193880;
  border-color: #193880;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0b1737;
  border-color: #0b1737;
}
</style>
<!-- /SASS -->