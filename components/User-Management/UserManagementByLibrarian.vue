<template>
    <div>
      <v-container style="background-color:lightskyblue" fill-height>
        <v-layout row wrap>
          <v-flex xs12 class="text-lg-left">
            <h2>User Management</h2>
          </v-flex>
          <v-flex xs12 style="background-color:white">
           <v-container>
             <v-layout row wrap>
               <v-flex xs12 class="ma-2" style="background-color:lightcyan">
                 <v-layout>
                   <v-flex xs2>
                    <h4 style="color:blue;margin:25px"  class="text-lg-left">Search</h4>
                   </v-flex>
                   <v-flex class="text-lg-left">
                     <input v-model="userName"  type="text" style="margin-top:20px;height:35px;width:200px;border:1px solid blue">
                   </v-flex>
                 </v-layout>
               </v-flex>
                <v-flex xs12  class="ma-2">
                 <v-btn @click="searchUser()" color="blue">Search</v-btn>
               </v-flex>
               <v-flex xs12  class="mt-5 text-lg-left">
                 <v-btn @click="addNewUserToLibrary()">
                   <v-layout>
                     <v-flex>
                      <i style="color:#45C816;" class="fas fa-plus ma-2"></i>
                     </v-flex>
                     <v-flex>
                       <h4 class="ma-2" style="color:#45C816">Create New</h4>
                     </v-flex>
                   </v-layout>
                   </v-btn>
               </v-flex>
                <AddNewUserToLibraryDialog @closeTheDialog="closeTheDialog()" :userData="data" :dialog="dialog"></AddNewUserToLibraryDialog> 
             <v-flex>
               <v-container v-if="selectedUser">
               <v-layout row wrap>
                 <v-flex xs12>
                   <table class="custom-table-header">
                     <thead>
                       <tr>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Email</th>
                         <th></th>
                       </tr>
                     </thead>
                     <tbody>
                       <tr>
                         <td>{{selectedUser.firstName}}</td>
                         <td>{{selectedUser.lastName}}</td>
                         <td>{{selectedUser.email}}</td>
                         <td><v-btn @click="deleteUser()" flat><i class="fas fa-trash-alt"></i></v-btn></td>
                       </tr>
                     </tbody>
                   </table>
                 </v-flex>
               </v-layout>
               
               </v-container>
               <v-snackbar right v-model="snackBar">
               <h3 style="color:red"> {{snackBarMessage}}</h3>
               </v-snackbar>
             </v-flex>  
             </v-layout>
           </v-container>
          </v-flex>
        </v-layout>

    <!-- <v-layout justify-center row wrap>
      <v-flex xs10>
        <v-card style="background-color:lightskyblue">
          <v-layout style="margin:20px;height:100px;width:500px;background-color:white">
            <v-card-text>
              <v-flex>
                <v-layout row wrap>
                  <v-flex xs8>
                  <v-text-field outline label="Enter User Name" v-model="userName"></v-text-field>
                 </v-flex>
                 <v-flex xs4>
                <v-btn class="mt-0" small round @click="searchUser()">
                 <i class="fas fa-search"></i>
                </v-btn>    
                 </v-flex>
                 <v-flex xs12>
                   {{userNotFound}}
                 </v-flex>
                </v-layout>
              </v-flex>
            </v-card-text>
          </v-layout>
        <v-layout v-if='selectedUser'>
          <v-flex xs3>
            <h3>{{selectedUser.firstName}}</h3>
          </v-flex>
          <v-flex xs3>
               <h3>{{selectedUser.email}}</h3>
          </v-flex>

          <v-flex xs3>
            <span>
              <v-btn @click="deleteUser()" flat small round><i class="fas fa-edit" small></i></v-btn>
            </span>
          </v-flex>
        </v-layout>   
        </v-card>
      </v-flex>
    </v-layout> -->
    
  </v-container>
   <!-- <AddNewUserToLibraryDialog :dialog="dialog"></AddNewUserToLibraryDialog> -->
    </div>
</template>

<script>
import AddNewUserToLibraryDialog from './addNewUserToLibraryDialog.vue'
export default {
   data(){
     return{
       userData:'',
       selectedUser:'',
       dialog:false,
      snackBarMessage:'',
       userName:'',
       snackBar:false
     }
   },
  methods:{
    closeTheDialog(){
        this.dialog=false
    },
    searchUser(){
       let vm=this
     
      this.$store.dispatch('userManagement',{userName:this.userName,method:'GET'}).then((response)=>{
        if(response.data=="")
        {
         vm.snackBarMessage="User Not Found"
           this.snackBar=true
        }
        else
        {
        this.selectedUser=response.data
       this.userName=''
        }
       
      })
    },
    addNewUserToLibrary(){
        this.dialog=true;
        
    },
    deleteUser(){
        this.$store.dispatch('userManagement',{userName:this.userName,method:'delete'}).then((response)=>{
         this.selectedUser=''
         this.snackBarMessage="User Deleted SuccessFully"
          this.snackBar=true
        console.log(response)
      })
    }
  },
  components:{
    AddNewUserToLibraryDialog
  } 
}
</script>

<style>
.custom-table-header{
  width: 100%
}
.custom-table-header thead tr th {
  padding: 10px 15px;
  font-weight: 400;
  color: grey;
}
.custom-table-header tbody tr td {
  padding: 10px 15px;
  font-weight: 300;
  color: black;
}
</style>
