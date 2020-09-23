<template>
    <div>
        <nav class="nav-menu-mobile" :class="screen">
            <ul class="ul-menu-mobile" :class="screen">
                <li v-for="optionMenu in menu" 
                    :key="optionMenu.description"
                    class="buttonMenu"
                    >
                    <button :style="{ color: optionMenu.colorTextButton, background: optionMenu.backgroundButton }">{{ optionMenu.description }}</button>
                </li>
            </ul>
        </nav>
    </div>
</template>
<script>
export default {
    props:{
        read: {type: Object},
        screen: {default: ''}
    },
    data(){
        return{
            menu: [],
        }
    },
    watch:{
        read(){
            this.menu = this.read.menu
        }
    }
}
</script>

<style scoped>
.nav-menu-mobile{
    background: #327fa8;
}
.nav-menu-mobile  .ul-menu-mobile {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    list-style: none;
    text-transform: Capitalize;
    color: white;
    padding: 1rem 0rem 1rem 0rem !important;
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
.buttonMenu:nth-last-child(1) button{
    height: 2.3rem;
    text-align: center;
    text-transform: uppercase !important;
}
.buttonMenu:nth-last-child(1){
    margin-top: 4px;
}
.buttonMenu button:hover{
    background:#5696B8 !important;
    color: white;
}
.buttonMenu:nth-last-child(1) button:hover{
    background:#C78C19 !important;
}  

.desktop{
    background: none;
    color: black !important;
    display: flex;
    flex-direction: row !important;
}

.desktop .buttonMenu:nth-last-child(1) button{
    height: 3rem !important;
}
.desktop  .buttonMenu:nth-last-child(1){
    margin-top: 0px;
}

.desktop .buttonMenu button{
    text-align: center;    
}

.desktop .buttonMenu{
    height: auto;
}

</style>