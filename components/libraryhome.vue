<template>
  <div
    style="background-image: url('https://img.freepik.com/free-photo/wooden-table_36051-46.jpg?size=626&ext=jpg');height:1000px;background-repeat:repeat"
  >
    <v-layout>
      <v-flex xs2>
        <v-navigation-drawer class="blue lighten-3" dark permanent height="1000px">
          <v-list>
            <v-list-tile v-for="item in options" :key="item.title" @click="btnToggle(item.title)">
              <v-list-tile-action>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-tile-action>

              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
      </v-flex>
      <v-flex>
        <v-window v-model="selectedItem">
          <v-window-item :value="'Search Book'">
            <SearchBook></SearchBook>
          </v-window-item>
          <v-window-item :value="'UserManagement'">
            <UserManagementByLibrarian></UserManagementByLibrarian>
          </v-window-item>
          <v-window-item :value="'MyProfile'">ravi</v-window-item>
          <v-window-item :value="'BorrowBook'">
            <BorrowBook></BorrowBook>
          </v-window-item>
          <v-window-item lazy :value="'BorrowerBookHistory'">
            <BorrowerBookHistory></BorrowerBookHistory>
          </v-window-item>
          <v-window-item :value="'AddBookToLibrary'">
            <AddBookToLibrary></AddBookToLibrary>
          </v-window-item>
          <v-window-item :value="'Show All Books'">
            <getAllBooksFromLibrary></getAllBooksFromLibrary>
          </v-window-item>
        </v-window>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import SearchBook from "./Book-Management/SearchBook.vue";
import libraybody from "./librarybody.vue";
import BorrowBook from "./Book-Management/BorrowBook.vue";
import BorrowerBookHistory from "./Book-Management/BorrowerBookHistory.vue";
import AddBookToLibrary from "./Book-Management/AddBookToLibrary.vue";
import getAllBooksFromLibrary from "./Book-Management/getAllBooksFromLibrary.vue";
import UserManagementByLibrarian from "./User-Management/UserManagementByLibrarian.vue";
export default {
  data() {
    return {};
  },
  methods: {
    btnToggle(item) {
      this.$store.commit("updateSelectedItem", item);
    }
  },
  computed: {
    selectedItem: {
      get() {
        return this.$store.getters["getSelectedItem"];
      },
      set(val) {
        this.$store.commit("updateSelectedItem", val);
      }
    },
    options: {
      get() {
        if (this.currentUserRole == "User")
          return this.$store.state.optionsForUser;
        else return this.$store.state.optionsForLibrarian;
      }
    },
    currentUserRole: {
      get() {
        return this.$store.getters["getCurrentUserRole"];
      }
    },
    currentUserId: {
      get() {
        this.$store.getters["getCurrentUserId"];
      }
    }
  },
  components: {
    libraybody,
    SearchBook,
    BorrowBook,
    BorrowerBookHistory,
    AddBookToLibrary,
    getAllBooksFromLibrary,
    UserManagementByLibrarian
  }
};
</script>
