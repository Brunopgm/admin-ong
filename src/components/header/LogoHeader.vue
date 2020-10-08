<template>
    <div>
        <h3 class="subtitle">Modifique o logo do cabeçalho.</h3>
        
        <v-file-input 
            label="Alterar imagem do logo"
            filled
            prepend-icon="mdi-camera" 
            @change="fileSelected"       
        ></v-file-input>

        <div class="text-center">
            <v-row justify="center">
                <v-btn
                color="grey"
                class="white--text"
                @click.stop="[dialog = true]"
                >
                Mostrar imagem
                </v-btn>

                <v-dialog
                v-model="dialog"
                max-width="400"
                >
                    <v-card>
                        <img class="image-logo" :src="logoURL">
                    </v-card>
                </v-dialog>
            </v-row>
        </div>
        <transition name="fade" :key="typeAlert" >
            <v-alert  
                :type="typeAlert"
                v-show="showAlert"
                class="mt-3 alert"
                >
                {{messageAlert}}
            </v-alert>
        </transition>
    </div>
</template>

<script>
    import { uploadFile, downloadFile } from '@/services/foundation/header'
    export default {
        data: () => ({
            dialog: false,
            typeAlert: null,
            messageAlert: null,
            showAlert: false,
            logoURL : ""
    }),
    watch:{
        showAlert(){
             setTimeout(() => {
                    this.showAlert = false
            }, 3000);
        },
        logoURL(){
            const objectLogo = { link : this.logoURL}
            this.$emit('passarLogo', objectLogo)
        }
    },
        methods:{
            fileSelected(event){
                if(event === undefined){
                    return
                } 
                uploadFile(event, 'logoHeader')
                    .then(()=>{
                        this.alertOfUpload(
                            true,
                            'success',
                            'Imagem alterada com sucesso'
                        )
                        this.updateLogoURL('header/logoHeader') 
                    })
                    .catch(()=>{
                        this.alertOfUpload(
                            true,
                            'error',
                            'Falha no upload. Tente novamente'
                        )
                    })
            },
            alertOfUpload(showAlert, typeAlert, messageAlert){
                this.typeAlert = typeAlert
                this.messageAlert = messageAlert
                this.showAlert = showAlert
            },
            async updateLogoURL(){
                this.logoURL = await downloadFile('header/logoHeader')
            }
        },
        async created(){
            this.logoURL = await downloadFile('header/logoHeader')
        }
  }
</script>

<style>
.image-logo{
    width: 100%;
    height: 100%;
}
.fade-enter, .fade-leave-to{
    opacity: 0;
}
.fade-enter-active, .fade-leave-active{
    transition: opacity 2s !important;
}

.alert{
    position: absolute !important;
    z-index: 1 ; 
    width: 100%;
}

</style>