<template>
    <div>
        <v-card
            max-width="100%"
            outlined
            class="pa-4 mb-3 rounded-lg"
        >
            <div class="content-card">
                <v-img            
                    :src="image"
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
                            <v-icon>mdi-star</v-icon>
                        </v-btn>
                    </div>
                    <h3 class="text-justify">{{ title }}</h3>
                    <p class="project-text">{{ text }}</p>
                </div>
            </div>
         
            <v-divider class="my-4"></v-divider>
            
            
            
            <div>

                <v-row justify="center">
                    <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="800px"
                    >
                        <template v-slot:activator="{ on, attrs }" class="container-buttons-card">
            
                        <div class="container-buttons">
                            <div class="buttons-edit">
                                <v-btn
                                    v-bind="attrs"
                                    v-on="on" 
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
                                    <v-icon>mdi-star</v-icon>
                                </v-btn>
                            </div>
                        </div>
                    
                    
                        </template>
                    
                        <v-card>
                            <v-card-title>
                                <span>Modifique o projeto</span>
                            </v-card-title>
                        
                            <v-divider class="mb-4"></v-divider>

                            <div class="container-image-modal">
                                <v-img
                                    class="mb-4 rounded"
                                    max-height="500px"
                                    max-width="100%"
                                    :src="image"
                                ></v-img>
                            </div>

                            <v-card-text>
                                <v-container>
                                    <p>Título</p>
                                    <v-text-field
                                        outlined
                                        dense
                                        required
                                        v-model="title"
                                    ></v-text-field>

                                    <p>Digite aqui o texto do projeto</p>
                                    <v-textarea
                                        auto-grow
                                        outlined
                                        rows="5"
                                        row-height="30"
                                        required
                                        v-model="text"
                                    ></v-textarea>
                            
                                </v-container>
                            </v-card-text>
                        
                            <v-divider class="mb-4"></v-divider>
                            <v-card-actions class="container-buttons-modal">
                                <v-spacer></v-spacer>

                                <v-btn
                                color="blue darken-1"
                                text
                                @click="[dialog = false]"
                                >
                                Fechar
                                </v-btn>
                                <v-btn
                                color="blue darken-1"
                                text
                                >
                                Salvar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </div>
        
        </v-card>
        
    </div>
</template>

<script>
export default {
    props:{
        image: {type: String},
        title: {type: String},
        text: {type: String},
        featured: {type: Boolean}
    },
    data: () => ({
        dialog: false
    })
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
    .container-buttons{
            width: 100%;
    }

    .button-featured{
            text-align: end;
        }
    .desktop-featured{
        display: none;
    }
    .container-image-modal{
        width: 95%;
        margin: 0 auto;
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