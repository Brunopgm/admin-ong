<template>
    <div class="page-content">
        <h1 class="title">Contato e formulários</h1>
        <p>Defina os dados para contato e os textos dos formulários</p>
        <contactTable/>
        <contactLogos/>
    </div>
</template>

<script>
import contactTable from './contact-table'
import contactLogos from './contact-logos'

export default {
    components: {contactTable, contactLogos} 
}
  
</script>
<style>
</style>