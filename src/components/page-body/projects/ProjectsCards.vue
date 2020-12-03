<template>
    <div>
        <v-card
            max-width="100%"
            outlined
            class="pa-4 rounded-lg"
        >
            <div class="content-card">
                <v-img            
                    src="https://picsum.photos/id/11/500/300"
                    class="image-card"
                ></v-img>
            
                <div class="container-project-text">
                    <div
                        class="button-featured mobile-featured"
                    >
                        <v-btn
                            icon
                            color="pink"
                        >
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                    </div>
                    
                    <h3 class="text-justify">Ensinar programação é a nova alfabetização | Camila Achutti | TEDxSaoPaulo</h3>

                    <p class="project-text">Em pleno século XXI, era da tecnologia, não podemos nos dar o luxo de não saber programar e esse aprendizado deve começar cedo.
                    Em pleno século XXI, era da tecnologia, não podemos nos dar o luxo de não saber programar e esse aprendizado deve começar cedo.
                    Em pleno século XXI, era da tecnologia, não podemos nos dar o luxo de não saber programar e esse aprendizado deve começar cedo.

                    </p>

                </div>
                

            </div>

         
         
            <v-divider class="my-4"></v-divider>
            
            <div class="container-buttons">
                <div class="buttons-edit">
                    <v-btn 
                        text
                    >
                        <v-icon class="mr-1">mdi-pencil</v-icon>
                        Editar
                    </v-btn>
                    <v-btn 
                        text
                    >
                        <v-icon class="mr-1">mdi-trash-can</v-icon>
                        Excluir
                    </v-btn>
                </div>

                <div
                    class="button-featured desktop-featured"
                >
                    <v-btn
                        icon
                        color="pink"
                    >
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                </div>
            </div>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .image-card{
        max-width: 100%;
        height:180px;
        border-radius: 10px !important;
    }
    .container-project-text{
        margin-top:10px;
    }
    .project-text{
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .button-featured{
            text-align: end;
        }
    .desktop-featured{
        display: none;
    }
    @media(min-width: 370px){
        .container-buttons{
            display: block;
        }
        .container-buttons{
            display: flex;
            justify-content: space-between;
        }   
    }
    @media(min-width: 700px){
        .image-card{
            max-width: 40%;
            height:180px;
            border-radius: 10px !important;
        }   
        .content-card{
            display: flex;
        }

        .container-project-text{
            margin: 0px 10px 0px 10px;
        }
        .mobile-featured{
            display: none;
        }
        .desktop-featured{
            display: inline-block;
    }
    }
</style>