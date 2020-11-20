<template>
    <div>
        <h3 class="mt-5">Sobre a instituição</h3>
        <p class="mb-7">Personalize os textos/imagens sobre a história e missão da instituição</p>
        <v-card v-resize="onResize">
            <v-tabs :vertical=windowSizeMobile>
                <v-tab v-for="field in fields" :key="field.name">
                    {{ field.name }}
                </v-tab>
                <v-tab-item v-for="(field, indexFields) in fields" :key="field.name">
                    <v-card flat>
                        <v-card-text>
                            <p class="mb-0 text-justify title">
                                {{ field.title }}
                            </p>
                        </v-card-text>
                        <v-card-text>
                            <p class="mb-0 text-justify">
                                {{ field.text }}
                            </p>
                        </v-card-text>
                    </v-card>
                    <v-card-actions>
                    <v-btn
                        outlined
                        text
                        color="white"
                        class='info'
                        @click="[dialog = true,indexTextCurrent = indexFields]"
                        >
                        Editar
                    </v-btn>
                    </v-card-actions>

                    <v-row justify="center">
                    <v-dialog
                        v-model="dialog"
                        persistent
                        max-width="600px"
                        >
                            <v-card class="modal">
                            <v-card-title>
                                <span class="headline">Editar</span>
                            </v-card-title>
                            <hr> 
                            <v-card-text>
                                <v-container>
                                <p class='text-justify'>Modifique a imagem que acompanha o texto</p>
                                <v-img
                                    max-height="250"
                                    src="https://picsum.photos/id/11/500/300"
                                ></v-img>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field
                                            label="Titulo"
                                            :value="fields[indexFieldCurrent].title"
                                            required
                                            ></v-text-field>
                                        </v-col>                          
                                    <v-col cols="12">
                                        <v-textarea
                                            name="input-7-1"
                                            label="Modifique o texto"
                                            :value="fields[indexFieldCurrent].text"
                                        ></v-textarea>
                                    </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"
                                    >
                                    Fechar
                                </v-btn>
                                <v-btn
                                    color="blue darken-1"
                                    text
                                    @click="dialog = false"                        
                                >
                                Salvar
                                </v-btn>
                                </v-card-actions>
                            </v-card>

                            </v-dialog>
                    </v-row>
                </v-tab-item>
            </v-tabs>

        </v-card>
    </div>
</template>

<script>
    import { read } from '@/services/foundation/page-body/aboutInstitution'
    export default {
        data: () => ({
        dialog: false,
        windowSizeMobile: false,
        indexFieldCurrent: 0,
        fields:null
        }),
        mounted () {
            this.onResize()
        },
        methods: {
        onResize () {
            const windowSize = window.innerWidth
            windowSize <=550? this.windowSizeMobile = false : this.windowSizeMobile = true
        }
        },
        async created(){
            const response = await read()
            this.fields = response.fields
        }
    }
</script>

<style>

</style>