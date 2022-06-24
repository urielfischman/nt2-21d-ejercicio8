import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        usuarios : [],
        url: 'https://627da4d7dd8aafd4fa80f897.mockapi.io/users'
    },
    actions : {
        getUsuarios({commit}) {
            commit('getUsuarios')
        }, 
        postUsuario({commit},usuario) {
            commit('postUsuario',usuario)
        },
    },
    mutations : {
        getUsuarios(state) {
            axios(state.url)
            .then(({ data:respuesta }) => {
                state.usuarios = respuesta
            })
            .catch( error => console.error('Error en Axios:', error))
        }, 
        async postUsuario(state,usuario){
            try {
                await axios.post(state.url, usuario, {'content-type':'application/json'} )
             }
             catch(error) {
               console.error('Error en postUsuario', error.message)
             }
        }
    }
})