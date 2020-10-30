<template>
    <div class="page-content">
        <v-container fluid>
            <div class="text-form">
                <h3 class="title-form">Formulário "Equipe de voluntários"</h3>
                <v-icon class="icon-open">
                    mdi-format-quote-open-outline
                </v-icon>            
                <span>{{readFormText.formsText.whereToFindUs}}</span>
                <v-icon class="icon-close">
                    mdi-format-quote-close-outline
                </v-icon>
            </div>

            <v-textarea
                class="mt-5"
                name="input-7-1"
                filled
                label="Equipe de voluntários"
                v-model="readFormText.formsText.whereToFindUs"
            >
            </v-textarea>
            <v-btn
                color="grey"
                class="white--text save-button"
                @click="save()"
                >
                Salvar
            </v-btn>
            <hr>
            <div class="text-form">
                <h3 class="title-form pt-10">Formulário "Onde nos encontrar"</h3>

                <v-icon class="icon-open">
                    mdi-format-quote-open-outline
                </v-icon>
                <span class="text-form">{{readFormText.formsText.voluntersTeam}}</span>
                <v-icon class="icon-close">
                    mdi-format-quote-close-outline
                </v-icon>
            </div>
            <v-textarea
            class="mt-5"
            name="input-7-1"
            filled
            label="Equipe de voluntários"
            v-model='readFormText.formsText.voluntersTeam'
            ></v-textarea>
            <v-btn
                color="grey"
                class="white--text save-button"
                @click="save()"
                >
                Salvar
            </v-btn>
        </v-container>

    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { create } from '@/services/foundation/page-body/page4'

const { mapGetters } = createNamespacedHelpers('page4') 
export default {
    computed:{
        ...mapGetters({readFormText: 'listContactInformation'})
    },
    methods: {
        save () {
            this.isEditing = !this.isEditing
            this.hasSaved = true
            this.uploadContactData(this.readFormText)
        },
        async uploadContactData(newFormText){
            await create(newFormText)
    }
    }
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
        text-align: justify;
    }
    .save-button{
        top: -20px;
    }

    @media(min-width: 600px){
        .title-form{
            text-align: right;
        }
    }
</style>