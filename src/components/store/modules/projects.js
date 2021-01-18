export default {
    namespaced:true,
    state:{
       allProjects: [],
       
    }, 
    getters:{
        readLastProjects(state){
            return state.allProjects.lastProject
        },
        readOngoingProjects(state){
            return state.allProjects.ongoingProject
        }
    },
    actions:{
        changeLastProjects(context, newList){
            context.commit('addLastProjects', newList)
        },
        changeOngoingProjects(context, newList){
            context.commit('addOngoingProjects', newList)
        },
        changeAllProjects(context, newList){
            context.commit('addAllProjects', newList)
        }
    },
    mutations:{
        addLastProjects(state, newList){
            state.allProjects.lastProject = newList
        },
        addOngoingProjects(state, newList){
            state.allProjects.ongoingProject = newList
        },
        addAllProjects(state, newList){
            state.allProjects = newList
        }
    }
}