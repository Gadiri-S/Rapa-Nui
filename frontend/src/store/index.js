import { createStore } from 'vuex';
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
import VueJwtDecode from "vue-jwt-decode";



//import api from '../services/api' ;

const api = axios.create(
  {
      baseURL:`http://localhost:3000/api/`,
     // Authorization: `Bearer ${store.state.token}`

  }
);

export default createStore({
  strict: true,
  plugins: [
    createPersistedState()
  ],
  state: {
    //status: '',
    user: '',
    isUserLoggedIn: false,
    token:'',
    isAdmin:'',
    firstname:'',
    error:''
  },
  mutations: {
    setToken: function(state,token){
      state.token = token

      if (token) {
        state.isUserLoggedIn = true;
      } else {
        state.isUserLoggedIn = false;
      }
    },
   logUser: function(state,user) {
     state.user = user;
   }, 
   logout: function (state) {
    state.user = {
      userId:null,
      token:null,
      isUserLoggedIn : false,
          error:''

    }
   // localStorage.clear();
  },
  setStatus: function(state,status){
    state.status = status;
  }
  },
  
 getters : {
 
},
  actions: {
  signup: ({commit},user) => {
    commit;
    api.post('signup',user)
    .then(function (response) {
      const token = response.data.token
      commit('setToken', token);
       console.log(token)
      commit('logUser',response.data);

    })
    .catch (function (error) {
        console.log(error.response.data.message)
    })
  },
 login: ({commit},user) => {
    api.post('login',user)
    .then(function (response) {
      const token = response.data.token
     commit('setToken', token);
      console.log(response)
     commit('logUser',response.data);
    // commit('setStatus', '');
    })
    .catch (function (error) {
      console.log(error.response.data.error)
     // commit('setStatus',error.response.data.error);


    })
  },
  

  setToken ({commit}, token) {
    commit('setToken', token)
  },
 
  },
  modules: {
  }
})

