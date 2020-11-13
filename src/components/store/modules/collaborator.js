export default {
    namespaced:true,
    state:{
       dialog: {
           openDialog: false,
           newDialog: false
       },
       collaborators: []
    }, 
    getters:{
        readDialog(state){
            return state.dialog
        },
        readCollaborators(state){
            return state.collaborators
        }
    },
    actions:{
        changeDialog(context, dialog){   
            dialog.newDialog = dialog.newDialog === true   
            context.commit('addValueDialog', dialog)
        },
        changeListCollaborators(context, newList){
            context.commit('addCollaboratos', newList)
        }
    },
    mutations:{
        addValueDialog(state, openDialog){
            state.dialog.openDialog = openDialog.openDialog
            state.dialog.newDialog = openDialog.newDialog
        },
        addCollaboratos(state, newList){
            state.collaborators = newList
        }
    }
}