<template>
  <v-container fill-height>
    <v-layout justify-center row wrap>
      <v-flex xs10>
        <v-card style="border-radius:20px">
          <v-layout>
            <v-card-text>
              <v-flex>
                <v-text-field outline label="Enter Book Name" v-model="bookName"></v-text-field>
                <v-btn class="mt-0" small round @click="searchBook()">
                  <font-awesome-icon icon="coffee"/>
                </v-btn>
                <SearchBookDialog v-if="selectedBook" :selectedBook="selectedBook"></SearchBookDialog>
              </v-flex>
            </v-card-text>
          </v-layout>
         <v-container grid-list-xl> 
          <v-layout row wrap>
            <v-flex xs4 v-for="book in bookFound" :key="book">
              <v-card>
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
                  <v-layout >
                    <v-flex  class="text-lg-right" >
                    <v-btn @click="checkInYourCart(book)" color="#49b882">Borrow</v-btn>
                    <v-alert :value="infoMessage"
                      type="success"
                      transition="scale-transition"><h4 style="color:red">{{infoMessage}}</h4></v-alert>
                    </v-flex>
                  </v-layout>
                 <BorrowBook @closeTheDialog="closeTheDialog()" :selectedBook="book" :dialog="dialog"></BorrowBook>
                  <!-- <li><h3 class="text-sm-left">Pub:{{book.publisher}}</h3></li> -->
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
         </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BorrowBook from './BorrowBook.vue'
export default {
  data() {
    return {
      bookName: "",
      bookFound: [],
      dialog:false,
      infoMessage:''
    };
  },
  methods: {
    closeTheDialog(){
       this.dialog=false
    },
    checkInYourCart(book){
       this.infoMessage=''
         let vm=this
          this.bookBorrowedByUser.forEach(currentBook => {
                      if(currentBook.bookName==book.bookName)
                      {
                           vm.infoMessage="Book is Already in Your Cart"
                           return
                      }
                                    
               });
            if(this.infoMessage!='')
             return
             else    
             this.dialog=true  
    },
    searchBook() {
      let vm = this;
      if(this.bookFound.length!=0)
      {
          this.bookFound=[]
      }
      this.totalBooks.forEach(element => {
        if ((element.bookName).toLowerCase() == (vm.bookName).toLowerCase()) {
          this.bookFound.push(element);
        }
      });
    }
  },
  computed: {
    totalBooks: {
      get() {
        return this.$store.getters["getTotalBooks"];
      }
    },
      bookBorrowedByUser:{
       get(){
         return this.$store.getters['getBookBorrowedByUser']
       }
    }
  },
  components: {
    BorrowBook
  }
};
</script>

<style>
</style>
