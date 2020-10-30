<template>
    <div class="page-content">
        <v-container fluid>
            <div class="text-form">
                <h3 class="title-form">Formulário "Equipe de voluntários"</h3>
                <v-icon class="icon-open">
                    mdi-format-quote-open-outline
                </v-icon>            
                <span>{{textWhereToFindUs}}</span>
                <v-icon class="icon-close">
                    mdi-format-quote-close-outline
                </v-icon>
            </div>

            <v-textarea
            class="mt-5"
            name="input-7-1"
            filled
            label="Equipe de voluntários"
            
            v-model="textWhereToFindUs"
            ></v-textarea>
        </v-container>

        <v-container fluid>
            <div class="text-form">
                <h3 class="title-form">Formulário "Onde nos encontrar"</h3>

                <v-icon class="icon-open">
                    mdi-format-quote-open-outline
                </v-icon>
                <span class="text-form">{{textVoluntersTeam}}</span>
                <v-icon class="icon-close">
                    mdi-format-quote-close-outline
                </v-icon>
            </div>
            <v-textarea
            class="mt-5"
            name="input-7-1"
            filled
            label="Equipe de voluntários"
            v-model=textVoluntersTeam
            ></v-textarea>
        </v-container>
    </div>
</template>

<script>
export default {
    data:()=>({
        textVoluntersTeam: "Caso tenha dúvidas, sugestões ou informações entre em contato conosco pelo WhastsApp ou preencha o formulário abaixo e envie-nos uma mensagem",
        textWhereToFindUs:"Somos uma organização que funciona exclusivamente através de doações, inclusive de tempo e dedicação de uma equipe comprometida em ajudar o próximo e fazer a diferença na sociedade. Nossa estrutura conta com Presidente, Vice-Presidente, Secretários, Tesoureiros, Conselho Fiscal e mais de 80 voluntários. Seja um voluntário você também."
    })
}
</script>

<style>
    .icon-open{
        top: -8px;
    }
    .icon-close{
        bottom: -5px
    }
    .text-form{
        min-height: 50px;
        /* padding-bottom: 20px; */
    }

    @media(min-width: 600px){
        .title-form{
            text-align: right;
        }
    }
</style>