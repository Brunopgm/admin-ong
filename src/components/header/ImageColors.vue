<template>
    <div>
        <h3 class="subtitle">Edite e estilize o botão.</h3>
        <!-- background,
        cor da letra,
        renomear botão -->
        
        <v-container>
            <v-row>
                <v-col class="d-flex ">
                    <v-color-picker v-model="color"></v-color-picker>
                </v-col>
                
            </v-row>
        </v-container>
        
        <h3 class="subtitle">Modifique o logo do cabeçalho.</h3>

        <v-file-input
            label="File input"
            filled
            prepend-icon="mdi-camera"
        ></v-file-input>
    </div>
</template>

<script>
  export default {
    data: () => ({
      
      type: 'hex',
      hex: '#FF00FF',
      hexa: '#FF00FFFF',
      rgba: { r: 255, g: 0, b: 255, a: 1 },
      hsla: { h: 300, s: 1, l: 0.5, a: 1 },
      hsva: { h: 300, s: 1, v: 1, a: 1 },
    }),

    computed: {
      color: {
        get () {
          return this[this.type]
        },
        set (v) {
          this[this.type] = v
        },
      },
      showColor () {
        if (typeof this.color === 'string') return this.color

        return JSON.stringify(Object.keys(this.color).reduce((color, key) => {
          color[key] = Number(this.color[key].toFixed(2))
          return color
        }, {}), null, 2)
      },
    },
  }
</script>

<style>
    .subtitle{
    margin: 1.8rem 0 0.4rem 0;
    margin-bottom: 0.5rem;
}
</style>