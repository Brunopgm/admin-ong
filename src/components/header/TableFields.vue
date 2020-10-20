<template>
    <div class="tableFields">
        <v-data-table
            :headers="headers"
            :items="tabsMenu"
            class="elevation-1"
            hide-default-footer
            disable-sort
            :loading='showLoading'
            loading-text="Aguarde... os dados estão sendo carregados"
        >   
            <template v-slot:top>
            <v-toolbar flat color="grey">
                <v-toolbar-title class="white--text">Modifique as abas e o botão do cabeçalho</v-toolbar-title>
                <v-divider
                class="mx-4"
                inset
                vertical
                ></v-divider>
                <v-spacer></v-spacer>       

                <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
                        <v-card-title>
                            <span class="headline">Editar Item</span>
                            <p class="subtitleCardEdit">Preencha abaixo com as alterações desejada.</p>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <template v-if="editedItem.url">
                                <v-row>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.description" label="Nome da aba"></v-text-field>
                                    </v-col>
                                </v-row>
                                  <v-row>
                                      <v-col cols="12" sm="6" md="8">
                                      <v-text-field v-model="editedItem.url" label="Url"></v-text-field>
                                  </v-col>
                                  </v-row>
                                </template>

                                <template v-if="editedItem.color">
                                  <v-row>
                                    <v-col cols="12" sm="6" md="8">
                                        <v-text-field v-model="editedItem.description" label="Descrição do botão"></v-text-field>
                                    </v-col>
                                </v-row>
                                  <v-row>
                                      <v-col cols="12" sm="6" md="8">
                                      <v-text-field v-model="editedItem.color" label="Cor da fonte"></v-text-field>
                                  </v-col>
                                  </v-row>
                                  <v-row>
                                      <v-col cols="12" sm="6" md="8">
                                      <v-text-field v-model="editedItem.background" label="Cor de fundo"></v-text-field>
                                  </v-col>
                                  </v-row>
                                </template>

                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                            <v-btn color="blue darken-1" text @click="save">Salvar</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    @click="editItem(item)">
                    mdi-pencil
                </v-icon>
            </template>     
        </v-data-table>
    </div>
</template>

<script>
  import { read, create } from "@/services/foundation/header"

  export default {
    data: () => ({
      dialog: false,
      headers: [
        {
          text: 'Campos ou botão do menu',
          align: 'start',
          sortable: false,
          value: 'description',
          width: 200
        },
        { text: 'URL do campo', value: 'url',width: 300 },
        { text: 'Editar', value: 'actions', sortable: false, width: 100 },
      ],
      tabsMenu: [],
      editedIndex: -1,
      editedItem: {
        description: '',
        url: '',
        color:'',
        background:''
      },
      defaultItem: {
        description: '',
        url: '',
        color:'',
        background:''
      },
      showLoading: true
    }),
    watch: {
      dialog (val) {
        val || this.close()
      }
    },
    created () {
      this.initialize()
    },
    methods: {
      async initialize () {
        const response = await read()
        this.tabsMenu = response.menu
        this.showLoading = false
      },

      editItem (item) {
        this.editedIndex = this.tabsMenu.indexOf(item)
        this.editedItem = {...item}
        this.dialog = true
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      async save () {
        Object.assign(this.tabsMenu[this.editedIndex], this.editedItem)
        await create(this.tabsMenu)
        this.close()
      },
    },
  }
</script>
<style >
.subtitleCardEdit{
    font-weight:300;
    margin-top: 10px;
    font-size: 18px;
}

.tableFields{
  margin: 2rem 0 2rem 0;
}

</style>