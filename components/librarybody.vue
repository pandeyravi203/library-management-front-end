<template>
  <div>
  <v-layout row wrap >
    <v-flex class="ma-2">
      <v-carousel >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
  <v-layout row wrap>
    <v-flex xs12 class="ma-3">
        <h1>Meet our team!</h1>
    </v-flex>
  </v-layout>
 <v-container grid-list-xl>
  <v-layout  justify-center row wrap>
    <v-flex xs4 >
       <v-card >
         <span >
        <v-img  src="data:image/png;base64,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"></v-img>
         </span>
     <v-card-title class="justify-center" ><h1>Heading</h1></v-card-title>
       <v-card-text class="ma-0">
         Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
           porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
       </v-card-text>

       </v-card>
    </v-flex>
    <v-flex xs4>
  <v-card >
         <span >
        <v-img  src="data:image/png;base64,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"></v-img>
         </span>
     <v-card-title class="justify-center" ><h1>Heading</h1></v-card-title>
       <v-card-text class="ma-0">
         Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
           porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
       </v-card-text>

       </v-card>
    </v-flex>
    <v-flex xs4>
      <v-card >
         <span >
        <v-img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAS1BMVEWZmZn///+VlZWTk5Oampqfn5/w8PCQkJD5+fm0tLTb29v29vasrKzt7e2lpaXBwcHR0dHFxcXl5eXd3d24uLjU1NTn5+ewsLDMzMwm5QuKAAAH6ElEQVR4nO2d6XajMAyFXbPvEJbw/k86JDRN04AL17LU4XD/zunAFxlLlmVLfRxdiuk5cTi0aV/f1fftZciYHsxCWPTNNS+DwFf6LqX8oCzzbmw5MB0TZsWYa+8G9S6tvcjv+tAxpkvCrK3yZbhvmJ6fjJfY4Vu4Iyyq0v8F70EZ5KM7RkeEWV962/AepkxcGdIJYVjn3g68mVEnqRNGF4R9uRdvZvTzi4O3oSdMg932+5JX0jNSExbVns9vwZBNSPxGxIR1aQc4IZY97SuREoYJPkCfijpSM1ISptYGnKXLlPCtCAlrn4TvJr+mey0ywrCjMeAsTTdSqQjDnBJwQsypEIkIB2LAG+JA82o0hO3GGHuX/Jbk3UgIW3q8u0gQKQjbwBFhQIFIQJg64ruJwDHaEw4OAZWyn26sCQtsqbRVZSFNGBJFamvSpa1ftCVM3AJOiIks4egacEIcJQlTumB7Xb7dhGpFmOUMgErlVjljK0LLjMVW6U6KsI1YAKdVv01sY0HINEZvshmnFoQ1G6BSFmt+nLBwFW8vKcBDG5yQaZqZpSt+wowTcEKEv0SYkDTxtIEQ9hgooeMlxbvgRQZKWPOacDIiOp2ChBm3CScjgl8iSNhym3AyIhjYgITM88ydEJxrMMKYKyL9rgjbBMcIe34TTkbENhYxQoFBCg9TiDDkn0lvwpJSEGHLkbx4F7aRAREy5J+WhOWkEMLYeQpxRQkymyKEQp8h+CEihIWQCZVGom+EUMQb3gkRj4gQsq7uXwiRlT5CyJdj+6mciVAMUEFvC/yNRNg9K+IhDCmK1zB5gLsACC+ChED5KUAo5iwwdwEQCkWld0IgMgUIG0HChoVQzOFjLh8gFFngfxICy3yAMBEDnNZPLIRXQcIrC6GkDXkITxu61Pkd0hAe34bH94fHJzx+1Hb8yPv4qyf2IoVvhEC5AkCYChICxbRnnmZBhSAhsHEBEGaC+VKgpubMCC/+jZyYCKU2SJUqmQjlFhfI+RmEUCxsQ4I2iFAsqIEqMBHCVsohekhBzVmpsKSQ8xzCdwVc1SaMh2VeBR2dgWqihPIYuuOqiZLKY2DHSs7KvUW5PIFvEnSYFCK8yEymAXRNFkTIfmBmFnZsBiKMZdxFDhXrY5XsMpszwLYMTCjiLsAziBihyOoCPNuFEYokFJFUIkwoUrwXYXeAgCe7RM49Ya8KEkq4/ICVUMJdYM4CJRRIRkFpKJxQoMYUPJyHEgq4C9BZoIQFO6BS4HF1kFAgGQWloXBCgWQUeoMLSBjz711AR/MsCNlXF7riJeR3iKg7PO/FWFXPDAg7fJiQP6HITch+YB2+cxclZE+ZYsnSk/AkPAlPwpNQlPD4/pA9amOPaY4feR9+9ZQJrPF5sxgCl/Cgl7ODhINARhhsIgASCmwCo9fQ/kd7Tz4n4fH3gA9fi8HSMOBdWAsBqPpSrL6Uq/rSWF4aWBWf6s40PKDbL5Hzh8ZpprfbeCuMd9l7LOcPe+OvXH1kNtPQNTO7Wn//CmMvYVyZLHgPjy3qa+81skZEb/cGzU7Ci7lL5T3ssJhp59nS+CV7yU63uIsw7kyxjP7s0TDgAU9wjz1j89Is2FfQvp0wu3TmJtuPjoUW647H+mEw/hdad5ftS6mthMUvTcR1WT9+WYv72r/uXc+awPg0nVdbCxe2EmajMnyBnmqeP6oN4XMNGCamX9RT41Yr7vgO6+vy76qD/GUOt6gCf6nkzpqV5uw6uO7wi3tmmvjSXP2Xlula6yAZf0xuFqnUH0nRrG1y9WpK7fnXZlcb9p3eIgvTiTKapcuJLnwbLTabp2+xdVakVa6iyJs0PTGv+vcHkhJ+PXjS2r9ZrP9X1/FZOAlLRdn2znuXVesLtImFQfSEVq0v0CYWBtET2uUZkfPoZpETWh4Sho76GkVNaF3SZ9cKcEHUhNaJVIvuXMsiJqTYdEO30VZESxiSJOFoxykpIdG5RPsewN9FSVhQZRlzSkRCwpis+bEuwWrZJdERDsY1607EwL4f90NkhCntnmlJ0FV9FhVhTb2V4Vu0Hn0RDWHhoLeOTmjmGxLC1kmDdV2SxKgEhHHlarPNR08gkBLGqTmLaiWtU2tGW8LWcXcrndgOVTvCsFrO91Ei+hVYSENAGP6S5qdi1J0NI044mBPvpIxBg8c4KGFRsfHNjJv3KUgIs0sZsdcmRuWODSc7wmLMhW5RykeOG1rTzkkAs5Gx7HZH5LsIs6FSnhzfndFT1bBrtG4njNvxyuIdfpPW17HdHupsJbw0OevkaZYO8mZrwcIGwjjsEy08ON81vVHShxtM+RthkTZJ8OfwZmkvSJr0t+nVRBi3Tb6y0fxnpP0yb4xf5RphNjRl9Edt91Pai8pmdYJdJLwZ7z+he0h7a6ZcIIzH/I8PzWVpPx8XGN8Ii4o95KSTjt4DdPWT778031PTgrkwEdaCMSeVdFmvEhaBXF8HSnlBsUzYS13xTK+gXyJ0lvWUkF+9EcbdMUboQ95Xma16AEq/ErkeiJ+ElfT7OFD1nbCWa6ziTlH9JLSoPf/LmjeSb4QCF3fx6H492I1wPNY0+pQ3fhIeyRG+yp8JBTvFudbtJJiyq+n96yqziVDoQCiP/HQiFGy66V66+lCHHqS3YaoEbkfglB7UgWfSm3StjhrPPJSoY4akTx2d79SpU6dOnTp16tSpU6dObdQ/Y/GEDLNvwf0AAAAASUVORK5CYII="></v-img>
         </span>
     <v-card-title class="justify-center" ><h1>Heading</h1></v-card-title>
       <v-card-text class="ma-0">
         Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
          Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus,
           porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.
       </v-card-text>

       </v-card>
    </v-flex>
  </v-layout>
 </v-container>
 <v-layout>
   
 </v-layout>
  </div>
</template>
<script>
export default {
    data(){
        return{
          items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
        }
    }
};
</script>
