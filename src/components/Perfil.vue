<!-- Template da tela de Perfil -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-md-5">
            <div class="bg profile">
              <div class="col-sm-12">
                <div class="row">
                  <div class="col-sm-12">
                    <b-img center rounded="circle" src="https://picsum.photos/125/125/?image=58" alt="Center image"></b-img>
                  </div>
                  <div class="col-sm-12">
                    <h3 class="m-3">Fulano da Silva</h3>
                    <p>Aluno do curso de <b>Ciência da Computação</b>, atualmente no <b>8º período.</b></p>
                  </div>
                  <div class="col-sm-12">
                    <b-table stacked :items="items"></b-table>
                  </div>
                  <div class="col-sm-12">
                    <b-button variant="primary">SEGUIR</b-button>
                    <b-button variant="outline-primary">ENVIAR MENSAGEM</b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <div class="bg">
              <div class="row">
                <div class="col-sm-12">
                  <h2 class="pull-left m-3">Últimas Atualizações</h2>
                </div>
                <div class="col-sm-12">
                  <b-card
                    title="Lista de Exercícios"
                    img-src="http://professor.ufop.br/sites/default/files/styles/os_files_medium/public/jcesares/files/intsphericalcilindrical.png?itok=cquGqPAI"
                    img-alt="Image"
                    img-top
                    tag="article"
                    class="mb-2"
                  >
                    <b-card-text>
                      Lista de exercícios da disciplina Cálculo 2.
                    </b-card-text>

                    <b-button href="#" variant="primary">Curtir</b-button>
                    <b-button href="#">Compartilhar</b-button>
                    <b-button href="#" variant="outline-primary">Download</b-button>
                  </b-card>
                </div>
                <div class="col-sm-12">
                  <b-card title="Vídeo Aula sobre Execução do Algoritmo Min-Max">
                    <b-card-text>
                      É um algoritmo muito usado no campo de Teoria de Jogos para desenvolver a inteligência artificial de jogos competitivos, principalmente os chamados jogos de soma zero, onde se um jogador vence, o outro necessariamente perde.
                    </b-card-text>
                    <div class="m-3">
                      <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/zp3VMe0Jpf8"
                      allowfullscreen
                      ></b-embed>
                    </div>

                    <b-button href="#" variant="primary">Curtir</b-button>
                    <b-button href="#">Compartilhar</b-button>
                    <b-button href="#" variant="outline-primary">Download</b-button>
                  </b-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- JavaScript -->
<script>
export default {
  name: 'Perfil',
    data() {
      return {
        items: [
          { seguidores: '120', seguindo: '99', contribuições: 12,},
        ],
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
.bg {
  background: #fff;
  width: 100%;
  padding: 1.25rem;
  border-radius: 5px;
}
.profile {
  border-top: 3px solid #007bff;
  flex: 1 1 auto;
}


</style>
<!-- /SASS -->