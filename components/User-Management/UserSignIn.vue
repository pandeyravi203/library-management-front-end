<template>

  <div
    style="background-image: url('https://img.freepik.com/free-photo/wooden-table_36051-46.jpg?size=626&ext=jpg');height:1000px;background-repeat:repeat"
  >
    <v-container>
      <v-layout justify-center>
        <v-flex xs6>
          <v-card style="border-radius:20px">
            <v-layout style="background-color:#49b882" justify-center>
              <v-card-title>
                <h1 style="color:white">Sign In Here</h1>
              </v-card-title>
            </v-layout>
            <v-card-text>
              <v-layout row wrap justify-space-around>
                 <v-flex xs12>
                 <v-select :items="roleList"  outline v-model="role"></v-select>
                </v-flex>
                <v-flex xs12>
                  <v-text-field outline label="Username" v-model="userName"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field outline label="Password" v-model="password"></v-text-field>
                </v-flex>
                <v-flex xs12>
                 <h3 style="color:red"> {{invalidUserMessage}}</h3>
                </v-flex>
               <v-flex>
               
                <v-btn color="#49b882" class="mt-0" @click="userSignIn()">Sign In</v-btn>

                <!-- <v-btn color="#49b882" class="mt-0">Sign In</v-btn>

                <v-btn color="#49b882" class="mt-0">Sign In</v-btn> -->
               </v-flex>
              </v-layout>
         
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data(){
    return{
       invalidUserMessage:'',
       userName:'',
       password:'',
       role:''
    }
  },
  methods:{
       userSignIn(){
         var data={
           role:this.role,
           userName:this.userName,
           password:this.password
         }
         let vm=this
         this.$store.dispatch('userSignIn',data).then((response)=>{
           if(response.data.id==undefined)
         {
          vm.invalidUserMessage="Invalid User Please Try Again"   
         }
         else
         {
        
         
         var currentUserSession=JSON.stringify(response.data)
         localStorage.setItem("currentUserSession",currentUserSession)

         vm.$router.push('/home')
         }
         })
        
         
       }
  },
  computed:{
    roleList:{
      
      get(){
       return this.$store.getters["getRoleList"]
      }
    },
   currentUserId:{
     get()
     {
       this.$store.getters['getCurrentUserId']
     }
   },
   currentUserRole:{
     get(){
        return this.$store.getters['getCurrentUserRole']
     },
     set(val){
     this.$store.commit('updateCurrentUserRole',val)
     }
   } 
  }
  
};
</script>

<style>

</style>
