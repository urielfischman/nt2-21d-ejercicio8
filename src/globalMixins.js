import Vue from 'vue'

const miMixinGlobal = {
    methods: {
      postUsuario(usuario) {
        this.$store.dispatch('postUsuario',usuario)
      }
    },
    computed: {
      getUsuarios() {
        return this.$store.state.usuarios
      },
    }
}

Vue.mixin(miMixinGlobal)