<template>
    <div>
        <h3>Galeria de fotos</h3>
        <p>Altere as fotos da galeria do site.</p>

        <v-row>
            <v-col
            v-for="(image, indexImage) in imagesGalery"
            :key="image.id"
            class="d-flex child-flex"
            cols="4"
            >
                <v-img
                    :src="image.image"
                    aspect-ratio="1"
                    class="grey lighten-2 image"
                    width="100%"
                >
                <v-icon 
                    right 
                    class='icone-close' 
                    color="red"
                    @click="deleteImage(image.id, indexImage)"
                    >
                        mdi-close-circle
                </v-icon>
            
                <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
                </template>
            </v-img>
            </v-col>
            <v-snackbar
                v-model="hasSaved"
                :timeout="2000"
                absolute
                bottom
                left
                :color="typeAlert"
                >
                {{ messageAlert }}
            </v-snackbar>
        </v-row>

        <div :class="{containerButtonAdd: !imagesGalery[0]}">
            <v-btn
            elevation="2"
            fab  
            class="info mb-5"
            >
                <label for="input-galera">
                    <v-icon>mdi-plus</v-icon>
                </label>
                <input 
                    type="file" 
                    @change="addImage"
                    name="input-galera"
                    id="input-galera"
                    class="input-galera"
                >
            </v-btn>
            <span v-if="!imagesGalery[0]"
                >Adicione a sua primeira foto na Galeria de imagens!! :)
            </span>
        </div>
    </div>
</template>

<script>
import 
    {read, uploadImage, downloadImage, update, deletePhotoStorage} 
    from '@/services/foundation/page-body/galery/imagesGalery'
export default {
    data(){
        return{
            imagesGalery: [],
            idImage: null,
            hasSaved :false,
            messageAlert: '',
            typeAlert: ''
        }
    },
    methods:{
        addImage(){
            const sizeImagesGalery = this.imagesGalery.length
            this.idImage = sizeImagesGalery ? this.imagesGalery[sizeImagesGalery - 1].id + 1 : 1
            const file = event.target.files[0]    
            uploadImage(file, `image-${this.idImage}`)
                .then(()=>{
                    this.updateImage()
                    this.showAlertMessage(true, 'success', 'Imagem salva com sucesso!!')
                })
                .catch(()=>
                    this.showAlertMessage(
                        true, "error", "Erro ao salvar, tente novamente mais tarde!"
                    ))
        },
         updateImage(){
             downloadImage(`page-body/galery/image-${this.idImage}`)
                .then(urlImage => {
                this.pushInImagesGalery(urlImage)
                })
            this.hasSaved = true
        },
        async pushInImagesGalery(newUrl){
            this.imagesGalery.push({image: newUrl, id: this.idImage})
            await update(this.imagesGalery)
        },
        async deleteImage(idImageSelected, indexImage){
            this.imagesGalery.splice(indexImage, 1)
            update(this.imagesGalery)
            await deletePhotoStorage(idImageSelected)
            this.showAlertMessage(true, 'success', 'Imagem deletada com sucesso!!')

        },
        showAlertMessage(hasSaved, typeAlert, messageAlert){
            this.hasSaved = hasSaved;
            this.typeAlert = typeAlert;
            this.messageAlert = messageAlert
        }
    },
    async created(){
        const response = await read()
        this.imagesGalery = response.galery
    }
}
</script>

<style scoped>
    
    .icone-close{
        position: absolute;
        right: 0px;
        cursor: pointer;
    }

    .containerButtonAdd{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .input-galera{
        display: none;
        
    }

    .icon-add{
      cursor: pointer;
    }

</style>