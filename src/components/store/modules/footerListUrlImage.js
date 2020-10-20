export default {
    namespaced:true,
    state:{
       readListURLImage: []
    }, 
    getters:{
        readList(state){
            return state.readListURLImage
        }
    },
    actions:{
        changeUrlList(context, newList){
            context.commit('changeList', newList)
        }
    },

    mutations:{
        changeList(state, newList){
            state.readListURLImage = newList
        }
    }
}