<template>
    <v-container>
      
      <v-layout justify-center>
        <v-flex xs10>
          <v-card style="border-radius:20px">
            <v-layout style="background-color:#49b882" justify-center>
              <v-card-title>
                <h1 style="color:white">Book Borrowed By You</h1>
                
              </v-card-title>
          
            </v-layout>
            <v-card-text>
              <v-container grid-list-xl> 
          <v-layout row wrap justify-space-around>
            <v-flex  xs4 v-for="book in bookBorrowedByUser" :key="book">
              <v-card v-if="bookBorrowedByUser.length>0">
                <v-toolbar height="40px" color="#49b882">
                  <h3 style="color:white">{{book.bookName}}</h3>
                </v-toolbar>
                <v-card-media>
                  <v-img
                    src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-and-the-chamber-of-secrets-poster-1545148861.jpg"
                  ></v-img>
                </v-card-media>
                <v-card-text>
                  <v-layout>
                    <v-flex xs6>
                      <h3 class="text-sm-left">Written By:</h3>
                    </v-flex>
                    <v-flex xs6>
                      <h3 class="text-sm-left">{{book.writer}}</h3>
                    </v-flex>
                  </v-layout>

                  <v-layout>
                    <v-flex xs6>
                      <h3 class="text-sm-left">Publisher:</h3>
                    </v-flex>
                    <v-flex xs6>
                      <h3 class="text-sm-left">{{book.publisher}}</h3>
                    </v-flex>
                  </v-layout>
                   <v-layout>
                    <v-flex xs6>
                      <h3 class="text-sm-left">Issue Date:</h3>
                    </v-flex>
                    <v-flex xs6>
                      <h3 class="text-sm-left">{{book.startDate}}</h3>
                    </v-flex>
                  </v-layout>
                   <v-layout>
                    <v-flex xs6>
                      <h3 class="text-sm-left">Return Date</h3>
                    </v-flex>
                    <v-flex xs6>
                      <h3 class="text-sm-left">{{book.endDate}}</h3>
                    </v-flex>
                  </v-layout>
                  <v-layout>
                    <span>
                      <v-btn class="ma-2" @click="returnBook(book)" color="green">Return</v-btn>
                      <v-btn v-if="fineToPay" class="ma-2" color="red">Pay Fine</v-btn>
                    </span>
                  </v-layout>

                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
         </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
export default {
    mounted(){
        console.log(this.userName)
        this.getBookBorrowedByUser()
    },
    data(){
         return{
           fineToPay:true
         }
    },
     methods:{
           getBookBorrowedByUser(){
             this.$store.dispatch('getBookBorrowedByUser',this.userName).then(response=>{
          
            this.$store.commit('updateBookBorrowedByUser',response.data[0].books)
          }) 
           },
        returnBook(book){
          var todayDate=(new Date()).getDate();
          if(todayDate>book.endDate)
          {
                
          }
          else{
              this.$store.dispatch('returnBookToLibrary',{userName:this.userName,bookName:book.bookName}).then(respone=>{
                  this.$store.commit('updateBookBorrowedByUser',respone.data)
              }) 
            
          }
        }   
     }, 
    computed:{
         userName:{
           get()
           {
             return this.$store.getters['getCurrentUserName']
           }
         },
         bookBorrowedByUser:{
           get()
           {
             return this.$store.getters['getBookBorrowedByUser']
           }
         }

    }  
}
</script>

<style>

</style>
