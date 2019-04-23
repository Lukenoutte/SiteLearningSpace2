<!-- Template da tela de Perfil -->
<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-4">
            <div class="row">
              <div class="col-sm-12 m-3">
                <div class="bg profile">
                  <div class="col-sm-12">
                    <h3 class="left">Amigos</h3>
                  </div>
                  <div class="col-sm-12">
                    <div class="row">
                      <div class="col-sm-4">
                        <b-img
                          center
                          fluid
                          rounded="circle"
                          src="https://cdn.networkrail.co.uk/wp-content/uploads/2016/12/Adriana-300x300.jpg"
                          alt="Center image"
                        ></b-img>
                        <h6 class="m-2">Alice Oliveira</h6>
                      </div>
                      <div class="col-sm-4">
                        <b-img
                          center
                          fluid
                          rounded="circle"
                          src="https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg"
                          alt="Center image"
                        ></b-img>
                        <h6 class="m-2">Janaina Silva</h6>
                      </div>
                      <div class="col-sm-4">
                        <b-img
                          center
                          fluid
                          rounded="circle"
                          src="https://erc.europa.eu/sites/default/files/images/researchers/Profile%20photo%20-%20JBouyer.jpg"
                          alt="Center image"
                        ></b-img>
                        <h6 class="m-2">Heitor Prado</h6>
                      </div>
                      <div class="col-sm-4">
                        <b-img
                          center
                          fluid
                          rounded="circle"
                          src="https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754"
                          alt="Center image"
                        ></b-img>
                        <h6 class="m-2">Renato Santos</h6>
                      </div>
                      <div class="col-sm-4">
                        <b-img
                          center
                          fluid
                          rounded="circle"
                          src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2018/07/facebook-profile-pic99-300x291.jpg"
                          alt="Center image"
                        ></b-img>
                        <h6 class="m-2">Laura Lima</h6>
                      </div>
                      <div class="col-sm-4">
                        <b-img
                          center
                          fluid
                          rounded="circle"
                          src="http://yaffa-cdn.s3.amazonaws.com/adnews/live/images/yafNews/featureImage/ollie_ward2.jpg"
                          alt="Center image"
                        ></b-img>
                        <h6 class="m-2">Carlos Henrique</h6>
                      </div>
                      <div class="col-sm-12">
                        <b-button variant="primary">Ver Todos</b-button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 m-3">
                <div class="col-sm-12">
                  <h3 class="left">Disciplinas</h3>
                </div>
                <div class="col-sm-12">
                  <b-list-group>
                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                      Cálculo II
                      <b-badge variant="primary" pill>14</b-badge>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                      Compiladores
                      <b-badge variant="primary" pill>2</b-badge>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                      Redes de Computadores I
                      <b-badge variant="primary" pill>5</b-badge>
                    </b-list-group-item>
                  </b-list-group>
                </div>
              </div>
              <div class="col-sm-12 m-3">
                <div class="col-sm-12">
                  <h3 class="left">Materiais</h3>
                </div>
                <div class="col-sm-12">
                  <b-list-group>
                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                      Vídeo Aulas
                      <b-badge variant="primary" pill>5</b-badge>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                      Listas de Exercícios
                      <b-badge variant="primary" pill>22</b-badge>
                    </b-list-group-item>

                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                      Provas
                      <b-badge variant="primary" pill>5</b-badge>
                    </b-list-group-item>
                  </b-list-group>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="bg">
              <div class="row">
                <div class="col-sm-12">
                  <h2 class="left m-3">Feed</h2>
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
                    <b-card-text>Lista de exercícios da disciplina Cálculo 2.</b-card-text>

                    <b-button href="#" variant="primary">Curtir</b-button>
                    <b-button href="#">Compartilhar</b-button>
                    <b-button href="#" variant="outline-primary">Download</b-button>
                  </b-card>
                </div>
                <div class="col-sm-12">
                  <b-card title="Vídeo Aula sobre Execução do Algoritmo Min-Max">
                    <b-card-text>É um algoritmo muito usado no campo de Teoria de Jogos para desenvolver a inteligência artificial de jogos competitivos, principalmente os chamados jogos de soma zero, onde se um jogador vence, o outro necessariamente perde.</b-card-text>
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
                <div class="col-sm-12">
                  <b-card title="PDF">
                    <b-card-text>É um algoritmo muito usado no campo de Teoria de Jogos para desenvolver a inteligência artificial de jogos competitivos, principalmente os chamados jogos de soma zero, onde se um jogador vence, o outro necessariamente perde.</b-card-text>
                    <div class="m-3">
                      <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.grupotiradentes.com/international/wp-content/uploads/2019/01/Edital-ProMAI-2019.1-14.02.pdf"
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
  name: "Feed",
  data() {
    return {
      show: true
    };
  },
  methods: {}
};
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
  border-top: 3px solid #193880;
  flex: 1 1 auto;
}
.left {
  text-align: left;
}
.badge-primary {
  color: #fff;
  background-color: #193880;
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

.btn-outline-primary {
  color: #193880;
  border-color: #193880;
}
.btn-outline-primary:hover {
  color: #fff;
  background-color: #193880;
  border-color: #193880;
}
</style>
<!-- /SASS -->