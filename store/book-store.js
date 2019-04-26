import axios from "axios";
export default {
    namesoace:true,
    state:{
        totalBooks:[],
        bookBorrowedByUser:[]

    },
    mutations:{
         updateTotalBooks:(state,data)=>{
             state.totalBooks=data
         },
         updateBookBorrowedByUser:(state,data)=>{
             state.bookBorrowedByUser=data
         }
    },
    actions:{
         addBookToLibrary:({state,commit},payload)=>{
              return new Promise((resolve,reject)=>{
                  axios({
                      url: 'http://localhost:3000/addBookToLibrary',
                      data:payload,
                      responseType: 'application/json',
                      method:'POST'
                  }).then(response=>{
                      resolve(response)
                  }).catch(err=>{
                      reject(err)
                  })
              })
         },
         getBookFromLibrary:({state,commit},data)=>{
             return new Promise((resolve,reject)=>{
                 axios({
                    url:'http://localhost:3000/getBookFromLibrary',
                    responseType: 'application/json',
                    method:'GET',
                    params:{
                        bookName:data.bookName,
                        token:data.token
                    }
                 }).then((response)=>{
                     resolve(response)
                 }).catch(err=>{
                     reject(err)
                 })
             })
         },
        getBookBorrowedByUser:({state,commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios({
                    url:'http://localhost:3000/userBookManager',
                    responseType: 'application/json',
                    method:'GET',
                    params:{
                        userName:payload
                    }
                 }).then((response)=>{
                     resolve(response)
                 }).catch(err=>{
                     reject(err)
                 })
            })
        }, 
        borrowBookFromLibrary:({state,commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios({
                    url:'http://localhost:3000/userBookManager',
                    responseType: 'application/json',
                    method:'POST',
                    data:payload
                 }).then((response)=>{
                     resolve(response)
                 }).catch(err=>{
                     reject(err)
                 })
            })
        },
        returnBookToLibrary:({state,commit},payload)=>{
            return new Promise((resolve,reject)=>{
                axios({
                    url:'http://localhost:3000/userBookManager',
                    responseType: 'application/json',
                    method:'put',
                    data:payload
                 }).then((response)=>{
                     resolve(response)
                 }).catch(err=>{
                     reject(err)
                 })
            })
        }  

     
    },

    getters:{
       getTotalBooks:(state)=>{
           return state.totalBooks
       },
       getBookBorrowedByUser:(state)=>{
           return state.bookBorrowedByUser;
       }
    }
}