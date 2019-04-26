<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs4 v-for="book in totalBooks" :key="book">
        <v-card>
          <v-toolbar height="40px" color="#49b882">
              <h3 style="color:white">{{book.bookName}}</h3>
          </v-toolbar>
          <v-card-media>
              <v-img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/harry-potter-and-the-chamber-of-secrets-poster-1545148861.jpg">
              </v-img>
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

            <!-- <li><h3 class="text-sm-left">Pub:{{book.publisher}}</h3></li> -->
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    var data={
      token:this.jwtToken,
      bookName:''
    }
    this.$store.dispatch("getBookFromLibrary",data).then(response => {
      this.$store.commit("updateTotalBooks", response.data[0].bookCollection);
    });
  },
  computed: {
    totalBooks: {
      set(val) {
        this.$store.commit("updateTotalBooks", data);
      },
      get() {
        return this.$store.getters["getTotalBooks"];
      }
    },
    jwtToken:{
      get()
      {
        return localStorage.getItem("jwtToken")
      }
    }
  }
};
</script>

<style>
</style>
