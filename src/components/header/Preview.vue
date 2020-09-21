<template>
    <div>
        <nav>
            <ul>
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
        read: Object
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

<style>
    nav{
            background: #327fa8;
    }
    ul {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        list-style: none;
        text-transform: Capitalize;
        color: white;
        padding: 1rem 0rem 1rem 0rem !important;
        width: 90%;
    }
    .buttonMenu{
        width: 100%;
        height: 2rem;
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

    @media(min-width: 860px){
        nav, ul{
            background: none;
            color: black;
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .buttonMenu:nth-last-child(1) button, .buttonMenu{
            height: 3rem;
        }
        .buttonMenu:nth-last-child(1){
            margin-top: 0px;
        }

        .buttonMenu button{
            text-align: center;    
        }
    }
</style>