import Vue from 'vue'
import Vuex from 'vuex'
import book from './book-store'
import user from './user-store'
Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
       book,
       user  
    },
    state:{
        optionsForLibrarian: [
            { title: "Search Book", icon: "dashboard" },
            { title: "UserManagement", icon: "account_box" }, 
            { title: "sendMailToUserForFine", icon: "gavel" },  
            { title: "AddBookToLibrary", icon: "gavel" },
            { title: "Show All Books", icon: "gavel" },
          ],
          optionsForUser: [
           { title: "Search Book", icon: "dashboard" },
           { title: "BorrowerBookHistory", icon: "gavel" },
           { title: "Show All Books", icon: "gavel" },
           { title: "Return A Book", icon: "gavel" },

          ],
       selectedItem:'Search Book',
       welcomeMessage:''   
    },
    mutations:{
        updateSelectedItem:(state,val)=>{
            state.selectedItem=val
        }
    },
    getters:{
       getSelectedItem:(state)=>{
           return state.selectedItem
       }
    }
})