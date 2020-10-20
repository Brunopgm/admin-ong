export default {
    namespaced:true,
    state:{
       readListFieldsMenu: []
    }, 
    getters:{
        readList(state){
            return state.readListFieldsMenu
        }
    },
    actions:{
        changeList(context, newList){
            console.log(newList);
            context.commit('changeList', newList)
        }
    },

    mutations:{
        changeList(state, newList){
            state.readListFieldsMenu = newList
        }
    }
}