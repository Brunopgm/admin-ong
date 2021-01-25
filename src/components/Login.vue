<template>
    <div class="container">
        <div class="container-form">
            <form class="form rounded-lg">
            <img 
                src="../assets/logo-proximo.png" 
                alt="Logo da Ong Proximo"
                class="logo-ong"
                >
                <h2 class="text-center title-form">Bem-vindo ao admin Ong Próximo</h2>
                <v-divider class="mb-10"></v-divider>
                <p>Preencha os dados para entrar e gerênciar seu site:</p>
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
                    class="mt-8 pa-7 white--text"
                    @click="submitLogin"
                    width="100%"
                    color="#5a8de8"
                >
                Entrar
                </v-btn>
                <div class="container-icon">
                    <v-icon 
                        class="form-icon"
                        color="#f53b2f"
                        >mdi-heart-multiple</v-icon>
                </div>
            </form>

        </div>
    </div>
</template>

<script>
    import {createNamespacedHelpers } from 'vuex'
    import { validationMixin } from 'vuelidate'
    import { required, email } from 'vuelidate/lib/validators'
    import { submitUserData } from '../services/foundation/login'

    const { mapActions } = createNamespacedHelpers('login')
    export default {
        mixins: [validationMixin],

        validations: {
            password: { required },
            email: { required, email }
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
        }
        },
        methods: {
            ...mapActions(['changeShowMenu']),
            submitLogin (){
                this.$v.$touch()
                const emailError = !this.emailErrors[0]? true:false
                const passwordError = !this.passwordErrors[0]? true:false
                if (emailError & passwordError) {
                    submitUserData(this.email,this.password)
                        .then(() => {
                            this.$router.push('/')
                            this.changeShowMenu(true)
                        })
                }else{
                    alert('Usuário ou senha incorreta'); 
                    return
                }             
            }
        },
    }
</script>

<style scoped>
    .container-form{
        width: 95%;
        margin: 0 auto;
    }
    .form .logo-ong{
        display: block;
        margin: 0 auto 5px auto;
        width: 130px;
    }
    
    .form{
        margin-top: 10%;
        background: rgb(199, 199, 199);
        padding: 2rem 1rem 0 1rem;
    }
    .title-form{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    .container-icon{
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    .form-icon{
        display: block;
        right: 0px;
        margin: 1.3rem 0 0.9rem 0;
    }

    @media (min-width: 680px) {
        .container-form{
            width: 80%;
            margin: 0 auto;
        }
        .form{
            padding: 2rem 2rem 0 2rem;
        }
    }

    @media (min-width: 880px) {
        .container-form{
            width: 60%;
            margin: 0 auto;
        }
    }
</style>