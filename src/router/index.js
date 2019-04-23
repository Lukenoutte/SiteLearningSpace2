//Esse arquivo é responsável para traçar as rotas da aplicação
//Aqui fazemos a importação dos componentes
import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Cadastro from '@/components/Cadastro'
import Perfil from '@/components/Perfil'
import Feed from '@/components/Feed'

Vue.use(Router)

/*
Aqui definimos a rota, cada rota é um objeto que conta com:
path: Caminho da rota onde vai aparecer na barra de endereço (www)
name: Nome da rota
component: Componente que deve ser chamado na rota

*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/perfil',
      name: 'Perfil',
      component: Perfil
    },
    {
      path: '/feed',
      name: 'Feed',
      component: Feed
    },
  ]
})
