<template>
    <div class="page-content">
        <h3>Sobre a instituição</h3>
        <p class="mb-7">Personalize os textos/imagens sobre a história e missão da instituição</p>
       
        <v-card>
            <v-tabs :vertical=windowSizeMobile>
                <v-tab>
                    Missão
                </v-tab>
                <v-tab>
                    História
                </v-tab>
            <v-tab-item v-for="text in texts" :key="text.name">
                <v-card flat>
                    <v-card-text>
                        <p class="mb-0">{{text.text}}
                        </p>
                    </v-card-text>
                </v-card>
            </v-tab-item>
            </v-tabs>
        </v-card>
    </div>
</template>

<script>
    export default {
        data: () => ({
        windowSizeMobile: false,
        texts:[
            {   
                name: 'mission',
                text:'Criada em Abril de 2019 e com a missão de atender qualquer cidadão em situação de vulnerabilidade, nós trabalhamos a partir da união de pessoas com espírito e vontade de gerar transformação em prol de um grande objetivo comum: ATENDER AO PRÓXIMO. Nós não nos restringimos a uma única causa. Partimos do princípio da empatia com a dor do próximo, buscando não mensurá-las ou compará-las. Através de ações com crianças, jovens, idosos, moradores de rua e qualquer outro grupo, a Próximo ONG já realizou projetos que atingiram mais de 3.000 vidas. Nossa sede está localizada na cidade de Mauá-SP e funciona como escritório administrativo, ponto de arrecadação de doações e local para atendimento à projetos voltados ao esporte e educação.'},
            {
                name: 'history',
                text: 'Antes de ser uma ONG, nosso intuito era arrecadar algumas caixinhas de Bis para entregar para 300 crianças em uma região carente da cidade de Mauá, mas conforme nós lançamos a campanha nas redes sociais percebemos que muita gente queria fazer parte daquilo. No final nós arrecadamos 4.600 caixinhas de Bis e mais de 100 voluntários foram envolvidos no dia. Foi ai que demos início a ONG Próximo e começamos a nós nos envolver em diversos projetos como em asilos e trabalhos voltados para as comunidades carentes.'}
            
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