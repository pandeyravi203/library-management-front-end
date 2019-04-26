<template>
  <div
  >
    <v-dialog persistent max-width="600px" v-model="dialog">

      <v-layout justify-center>
        <v-flex>
          <v-card style="border-radius:20px">
            <v-layout style="background-color:#49b882" justify-center>
              <v-card-title>
                <h1 style="color:white">Enter User Details</h1>
              </v-card-title>
            </v-layout>
            <v-card-text>
              <v-layout row wrap justify-space-around>
                <v-flex xs12>
                  <v-text-field outline label="Username" v-model="userName"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field outline label="Firsr Name" v-model="firstName"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field outline label="Last Name" v-model="lastName"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field outline label="Email" v-model="email"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field type="password"  outline label="Password" v-model="password"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field type="password" outline label="Confirm Password" v-model="confirmPassword"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <h3 style="color:red">{{passErrorMessage}}</h3>
                </v-flex>
                <v-flex>
                   <v-btn color="#49b882" @click="closeDialog()" class="mt-0">close</v-btn>

                  <v-btn color="#49b882" @click="userSignUp()" class="mt-0">Save</v-btn>
                  <!-- <v-btn color="#49b882" class="mt-0">Sign In</v-btn>

                  <v-btn color="#49b882" class="mt-0">Sign In</v-btn>-->
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
   
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      email: "",
      confirmPassword: "",
      passErrorMessage:'',
 
    };
  },
  props:['dialog'],
  mounted(){
   
  },
  methods: {
    closeDialog(){
       this.$emit('closeTheDialog',this.dialog)
    },
    userSignUp() {
      
      var data = {
        role:"User",
        userName: this.userName,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
      }
      if(this.password!=this.confirmPassword)
      {
        this.passErrorMessage="Password Do Not Match"
      }
      else
      {
             this.$store.dispatch('userManagement',{data:data,method:'POST'}).then(response=>{
             this.dialog=false
             this.$emit('closeTheDialog')
             })
             
             
      }
  
    }
  }
};
</script>

<style>
.panel {
  background-color: white;
  opacity: 0.9;

  border-radius: 10px;
}
</style>
