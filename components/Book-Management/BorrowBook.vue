<template>

     <div>

       <v-dialog  persistent max-width="600px" v-model="dialog">
          <v-card style="border-radius:20px">
            <v-layout style="background-color:#49b882">
              <v-card-title>
                <h1 style="color:white">Enter Details</h1>
              </v-card-title>
            </v-layout>
           <v-card-text>
              <v-layout row wrap>
              
                <v-flex class="ma-2">
                  <v-text-field outline type="date"  v-model="startDate"></v-text-field>
                </v-flex>
                <v-flex  class="ma-2" >
                  <v-text-field type="date" outline  v-model="endDate"></v-text-field>
                </v-flex>
            
               <v-flex>
                <v-btn @click="BorrowBook()" color="#49b882" class="mt-0">Submit</v-btn>
                <v-btn @click="closeTheDialog()">Close</v-btn>
                <!-- <v-btn color="#49b882" class="mt-0">Sign In</v-btn>

                <v-btn color="#49b882" class="mt-0">Sign In</v-btn> -->
               </v-flex>
              </v-layout>
           </v-card-text>
          </v-card>

       </v-dialog>
     </div>
</template>

<script>
export default {
    props:['dialog','selectedBook'],
    data(){
      return{
           startDate:'',
           endDate:'',
           
           
      }
    },
    methods:{
      closeTheDialog(){
          this.$emit('closeTheDialog')
      },
      BorrowBook(){
              
               var data={
             book:this.selectedBook,
             startDate:this.startDate,
             endDate:this.endDate,
             userName:this.currentUserName
           }
           this.$store.dispatch('borrowBookFromLibrary',data).then(Response=>{
             
         })  
         this.$emit('closeTheDialog')
      }
    },
  computed:{
    currentUserId:{
      get()
      {
        return this.$store.getters['getCurrentUserId']
      }
    },
    currentUserName:{
      get(){
      return this.$store.getters['getCurrentUserName']
      }
    },
  
  }  
}
</script>

<style>

</style>
