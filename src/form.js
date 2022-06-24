import Vue from 'vue'
import VueForm from 'vue-form'

let options = {
    validators : {
        'maxlength-con-cartel' : function(value,maxLenght) {
            return value.length <= maxLenght
        }
    }
}

Vue.use(VueForm,options)