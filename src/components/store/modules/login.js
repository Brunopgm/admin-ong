export default {
    namespaced:true,
    state:{
       showMenu: false
    }, 
    getters:{
        readShowMenu(state){
            return state.showMenu
        }
    },
    actions:{
        changeShowMenu(context, showMenu){
            context.commit('addInShowMenu', showMenu)
        }
    },

    mutations:{
        addInShowMenu(state, showMenu){
            state.showMenu = showMenu
        }
    }
}