export default {
    namespaced:true,
    state:{
       bannerFields: []
    }, 
    getters:{
        readBannerFields(state){
            return state.bannerFields
        }
    },
    actions:{
        changeBannerFields(context, newList){
            context.commit('addInBannerFields', newList)
        }
    },

    mutations:{
        addInBannerFields(state, newList){
            state.bannerFields = newList
        }
    }
}