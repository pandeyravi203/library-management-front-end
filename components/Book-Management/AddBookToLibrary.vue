<template>
   <div
  >
    <v-container>
      <v-layout justify-center>
        <v-flex xs6>
          <v-card style="border-radius:20px">
            <v-layout style="background-color:#49b882" justify-center>
              <v-card-title>
                <h1 style="color:white">Enter Book Details</h1>
              </v-card-title>
            </v-layout>
            <v-card-text>
              <v-layout row wrap justify-space-around>
                 
                <v-flex xs12>
                  <v-text-field outline label="Book Name" v-model="bookName"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field outline label="Publisher" v-model="publisher"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <v-text-field outline label="Writer" v-model="writer"></v-text-field>
                 
                </v-flex>
               
               <v-flex>
               
                <v-btn color="#49b882" class="mt-0" @click="addBookToLibrary()">Add</v-btn>

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
            bookName:'',
            publisher:'',
            writer:''
        }
    },
    methods:{
        addBookToLibrary(){
            var book={
                bookName:this.bookName,
                publisher:this.publisher,
                writer:this.writer
            }
          this.$store.dispatch('addBookToLibrary',book).then((response)=>{
                 
          })  
        }
    }
}
</script>

<style>

</style>
