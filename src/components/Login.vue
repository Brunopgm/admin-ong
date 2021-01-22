<template>
    <div class="container">
        <div class="container-form">
            <form class="form rounded-lg">
            <img 
                src="../assets/logo-proximo.png" 
                alt="Logo da Ong Proximo"
                class="logo-ong"
                >
                <h2 class="text-center title-form">Entrar</h2>
                <v-text-field
                    outlined
                    v-model="email"
                    :error-messages="emailErrors"
                    label="E-mail"
                    required
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                ></v-text-field>
                <v-text-field
                    type="password"
                    outlined
                    v-model="password"
                    :error-messages="passwordErrors"
                    label="Senha"
                    required
                    @input="$v.password.$touch()"
                    @blur="$v.password.$touch()"
                ></v-text-field>

                <v-btn
                    class="mt-8 pa-7"
                    @click="submit"
                    width="100%"
                >
                Entrar
                </v-btn>
            </form>
        </div>
    </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, email } from 'vuelidate/lib/validators'

  export default {
    mixins: [validationMixin],

    validations: {
      password: { required },
      email: { required, email },
     
    },

    data: () => ({
      password: '',
      email: ''
    }),

    computed: {
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('A senha é obrigatória')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('É obrigatório um e-mail válido')
        !this.$v.email.required && errors.push('O e-mail é obrigatório')
        return errors
      },
    },

    methods: {
      submit () {
        this.$v.$touch()
      }
    },
  }
</script>

<style>
    .container{
        width: 100%;
        height: 100%;
        background-image: url('../assets/background-login.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .container-form{
        width: 600px;
        margin: 0 auto;
    }
    .logo-ong{
        display: block;
        margin: 0 auto 15px auto;
        width: 130px;
    }

    .form{
        margin-top: 30%;
        background: rgb(199, 199, 199);
        padding: 2rem;
    }
    .title-form{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;

    }
</style>