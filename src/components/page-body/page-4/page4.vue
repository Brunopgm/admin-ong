<template>
    <div class="page-content">
        <h1 class="title">Contato e formulários</h1>
        <p>Defina os dados para contato e os textos dos formulários</p>
        <contactTable/>
        <contactLogos :listContactData='listContactData'/>
    </div>
</template>

<script>
import contactTable from './contact-table'
import contactLogos from './contact-logos'

import { createNamespacedHelpers } from 'vuex'
import { read } from '@/services/foundation/page-body/page4'

const { mapActions } = createNamespacedHelpers('page4')
export default {
    components: {contactTable, contactLogos},
    data(){
        return{
            listContactData: null 
        }
    },
    methods:{
        ...mapActions(['changeContactInformation'])
    },
    async created(){
        const response = await read()
        this.listContactData = response.contactInformation
        this.changeContactInformation(response.contactInformation)
    } 
}
  
</script>
