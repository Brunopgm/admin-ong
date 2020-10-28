export default {
    namespaced:true,
    state:{
       readContactIcons: ['e'],
    }, 
    getters:{
        readList(state){
            return state.readContactIcons
        }
    },
    actions:{
        changeList(context, newList){
            context.commit('changeList', newList)
        }
    },

    mutations:{
        changeList(state, newList){
            state.readContactIcons = newList
        }
    }
}