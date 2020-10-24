<template>
    <div> 
        <v-container fluid>
            <v-row dense class="container-images">
                <v-col
                v-for="card in cards"
                :key="card.title"
                :cols="card.flex"
                >
                <v-card>
                    <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                    width="100%"
                    >
                    <v-card-title v-text="card.title"></v-card-title>
                    </v-img>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
 export default {
    data: () => ({
      cards: [
       
        { title: 'Endereço', src: 'https://firebasestorage.googleapis.com/v0/b/ong-proximo.appspot.com/o/page-body%2Fpage-4%2Fendereco.png?alt=media', flex: 6},
        { title: 'E-mail', src: 'https://firebasestorage.googleapis.com/v0/b/ong-proximo.appspot.com/o/page-body%2Fpage-4%2Femail.png?alt=media', flex: 6},
      ],
    }),
  }
</script>

<style>
    .container-images{
        flex-direction: column;
    }
</style>