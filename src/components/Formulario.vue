<template lang="html">

  <section class="src-components-formulario">
    <div class="container-fluid mt-3">
    <h3><b>Ingresar usuario</b></h3>
      <br />

      <vue-form :state="formstate" @submit.prevent="enviar()">
        <validate tag="div">
          <label for="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            v-model="formData.nombre"
            required
            name="nombre"
            autocomplete="off"
            class="form-control"
            :minlength="textMinLength"
            :maxlength-con-cartel="textMaxLength"
          />

          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              El campo es requerido
            </div>
            <div slot="minlength" class="alert alert-danger mt-1">
              El campo debe contar con al menos 3 caracteres
            </div>
            <div slot="maxlength-con-cartel" class="alert alert-danger mt-1">
              El campo debe contar como maximo con 15 caracteres
            </div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label for="edad">Edad</label>
          <input
            type="number"
            id="edad"
            v-model.number="formData.edad"
            required
            name="edad"
            autocomplete="off"
            class="form-control"
            :min="minEdad"
            :max="maxEdad"
          />

          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Este campo es obligatorio
            </div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad minima es 18
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad maxima es 120
            </div>
          </field-messages>
        </validate>
        <br />

        <validate tag="div">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="formData.email"
            required
            name="email"
            autocomplete="off"
            class="form-control"
          />

          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">
              Este campo es obligatorio
            </div>
          </field-messages>
        </validate>
        <br />


        <button
          class="btn btn-success my-3"
          :disabled="formstate.$invalid"
          type="submit"
        >
          Enviar
        </button>
      </vue-form>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate: {},
        formData: this.obtenerDataInicial(),
        textMinLength: 3,
        textMaxLength: 15,
        minEdad: 18,
        maxEdad: 120
      };
    },
    methods: {
      obtenerDataInicial() {
        return {
          nombre: null,
          edad: null,
          email: null,
        };
      },
      enviar() {
        let usuarioNuevo =  {...this.formData}
        this.postUsuario(usuarioNuevo)
        this.formData = this.obtenerDataInicial()
        this.formstate._reset()
      },
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
