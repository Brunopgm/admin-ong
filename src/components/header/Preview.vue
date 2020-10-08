<template>
    <div>
        <nav class="nav-menu-mobile" :class="screen">
            <ul class="ul-menu-mobile" :class="screen">
                <li v-for="optionMenu in menu" 
                    :key="optionMenu.description"
                    class="buttonMenu"
                    >
                    <img
                        class="image-logo" 
                        v-if="optionMenu.link" 
                        :src="optionMenu.link" 
                        alt="Logo do cabeçalho">
                    <button 
                        v-if="!optionMenu.link" 
                        :style="{ color: optionMenu.color, background: optionMenu.background }"
                        >{{ optionMenu.description }}</button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    props:{
        readListFieldsMenu:{type: Object},
        screen: {default: ''},
        logoURL: {default: ''}
    },
    data(){
        return{
            menu: []
        }
    },
    watch:{
        readListFieldsMenu(){
            this.menu = this.readListFieldsMenu.menu
            this.menu.splice(0, 0, this.logoURL)
        },
        screen(){   
            if(this.screen === ''){
                    this.menu.splice(3, 1)
                    this.menu.splice(0, 0, this.logoURL)
                }else{
                    this.menu.splice(0, 1)
                    this.menu.splice(3, 0, this.logoURL)
                }
        
        }
    }
}
</script>

<style scoped>

.nav-menu-mobile  .ul-menu-mobile {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    list-style: none;
    text-transform: Capitalize;
    color: white;
    padding: 1rem 0rem 1rem 0rem;
    width: 90%;
}

.nav-menu-mobile{
    background: #327fa8;
    min-width: 330px;
    max-width: 380px;
    width: 90%;
}

.nav-menu-mobile .buttonMenu{
    width: 100%;
    height: 2.3rem;
}
.buttonMenu button{
    border-radius: 8px;
    text-align: start;
    vertical-align:middle;
    height: 100%;
    padding-left: 5px;
    width: 100%;
}
.buttonMenu:nth-child(1){
    height: 100px;
}
.buttonMenu:nth-last-child(1) button{
    height: 2.3rem;
    text-align: center;
    text-transform: uppercase;
}
.buttonMenu:nth-last-child(1){
    margin-top: 4px;
    margin-right: 0px;
}
.buttonMenu :hover{
    background:#5696B8;
    color: white;
}
.buttonMenu:nth-last-child(1) :hover{
    background:#C78C19 !important;
}  

.desktop{
    background: none;
    display: flex;
    flex-direction: row !important;
}

.desktop .buttonMenu{
    color: black;
    height: auto;
    margin: 0 3px 0 3px;
}

.desktop .buttonMenu button{
    text-align: center; 
    height: 3rem;   
}

.desktop .buttonMenu:nth-last-child(1) button{
    height: 3rem;
}
.desktop  .buttonMenu:nth-last-child(1){
    margin-top: 0px;
}

.image-logo{
    width: auto;
    height: 100px;
    margin: 0 auto;
    display: block;
}

.image-logo:hover{
    background: none;
}

@media(min-width: 960px){
    .desktop{
    min-width: none;
    max-width: none;
    width: 100%;
}
}
</style>