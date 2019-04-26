import axios from 'axios'

export default {
    state:{
        roleList:['Librarian','User'],
        userLoggedInStatus:"inactive",
        currentUserId:'',
        currentUserRole:'',
        currentUserName:'',
        jwtToken:''
    },
    getters:{
        getCurrentUserName:(state)=>{
             return state.currentUserName
        },
        getCurrentUserRole:(state)=>{
          return  state.currentUserRole;
        },
        getRoleList:(state)=>{
            return state.roleList;
        },
        getUserLoggedInStatus:(state)=>{

            return localStorage.getItem("currentUserSession").userLoggedInStatus
        },
        getCurrentUserId:(state)=>{
           return state.currentUserId
        },
        getUserLoggedInStatus:(state)=>{
            return state.userLoggedInStatus
        },
        getJwtToken:(state)=>{
            return state.jwtToken;
        }
    },
    mutations:{
        updatejwtToken:(state,token)=>{
           state.jwtToken=token
        },
        updateCurrentUserRole:(state,data)=>{
               state.currentUserRole=data
        },
        updateUserLoggedInStatus:(state,status)=>{
             state.userLoggedInStatus=status
        },
        updateCurrentUserId:(state,id)=>{
           state.currentUserId=id
        },
        updateCurrentUserName:(state,userName)=>{
            state.currentUserName=userName
        }
    },
    actions:{
        
        userManagement:({state,commit,getters},data)=>{
           return new Promise((resolve,reject)=>{
            axios({
                url: 'http://localhost:3000/userManagement',
                method: data.method,
                responseType: 'application/json',
                params:{
                  userName:data.userName
                },
                data:data
                }).then(response=>{
               resolve(response)
        })
           }) 
            
        },
        userSignIn:({state,commit,getters},data)=>{
          
            return new Promise((resolve,reject)=>{
             axios({
                 url: 'http://localhost:3000/signin',
                 method:'POST',
                 responseType: 'application/json',
                 data:data
                 }).then(response=>{ 
                 resolve(response)
         })
            }) 
             
         },
    
    }
}