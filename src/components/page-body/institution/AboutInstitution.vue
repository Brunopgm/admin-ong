<template>
    <div class="page-content">
        <h3>Sobre a instituição</h3>
        <p class="mb-7">Personalize os textos/imagens sobre a história e missão da instituição</p>
        <v-card v-resize="onResize">
            <v-tabs :vertical=windowSizeMobile>
                <v-tab v-for="texts in textsAboutInstitution" :key="texts.name">
                    {{ texts.name }}
                </v-tab>
                <v-tab-item v-for="(texts) in textsAboutInstitution" :key="texts.name">
                    <v-card flat>
                        <v-card-text>
                            <p class="mb-0 text-justify">
                                {{ texts.text }}
                            </p>
                        </v-card-text>
                    </v-card>

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
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field
                                            label="Função/Ocupação*"
                                            :value="texts.title"
                                            required
                                            ></v-text-field>
                                        </v-col>                          
                                    <v-col cols="12">
                                        <v-textarea
                                            name="input-7-1"
                                            label="Modifique o texto"
                                            :value="texts.text"
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


            <v-card-actions>
            <v-btn
                outlined
                text
                color="white"
                class='info'
                @click="dialog = true"
                >
                Editar
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
        dialog: false,
        windowSizeMobile: false,
        textsAboutInstitution:[
            {name: 'Missão', title: 'Vontade de gerar transformação em prol de um grande objetivo', text:'Criada em Abril de 2019 e com a missão de atender qualquer cidadão em situação de vulnerabilidade, nós trabalhamos a partir da união de pessoas com espírito e vontade de gerar transformação em prol de um grande objetivo comum: ATENDER AO PRÓXIMO. Nós não nos restringimos a uma única causa. Partimos do princípio da empatia com a dor do próximo, buscando não mensurá-las ou compará-las. Através de ações com crianças, jovens, idosos, moradores de rua e qualquer outro grupo, a Próximo ONG já realizou projetos que atingiram mais de 3.000 vidas. Nossa sede está localizada na cidade de Mauá-SP e funciona como escritório administrativo, ponto de arrecadação de doações e local para atendimento à projetos voltados ao esporte e educação.'},
            {name: 'História', title: '+ de 4 mil pessoas já receberam ajuda através da Próximo ', text:'Antes de ser uma ONG, nosso intuito era arrecadar algumas caixinhas de Bis para entregar para 300 crianças em uma região carente da cidade de Mauá, mas conforme nós lançamos a campanha nas redes sociais percebemos que muita gente queria fazer parte daquilo. No final nós arrecadamos 4.600 caixinhas de Bis e mais de 100 voluntários foram envolvidos no dia. Foi ai que demos início a ONG Próximo e começamos a nós nos envolver em diversos projetos como em asilos e trabalhos voltados para as comunidades carentes.'}
        ]
        }),
        mounted () {
        this.onResize()
        },
        methods: {
        onResize () {
            const windowSize = window.innerWidth
            windowSize <=550? this.windowSizeMobile = false : this.windowSizeMobile = true
        },
        },
    }
</script>

<style>

</style>