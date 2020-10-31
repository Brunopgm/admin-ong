<template>
    <div class="page-content">
        <v-container fluid v-for="item in readFormText.formsText" :key="item.title">
            <div class="text-form">
                <h3 class="title-form">{{ item.title }}</h3>
                <v-icon class="icon-open">
                    mdi-format-quote-open-outline
                </v-icon>            
                <span>{{item.text}}</span>
                <v-icon class="icon-close">
                    mdi-format-quote-close-outline
                </v-icon>
            </div>

            <v-textarea
                class="mt-5"
                name="input-7-1"
                filled
                :label="item.title"
                v-model="item.text"
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