export default {
    namespaced:true,
    state:{
       readContactInformation: []
    }, 
    getters:{
        listContactInformation(state){
            return state.readContactInformation
        }
    },
    actions:{
        changeContactInformation(context, newList){
            context.commit('changeContactData', newList)
        }
    },
    mutations:{
        changeContactData(state, newList){
            state.readContactInformation = newList
        }
    }
}