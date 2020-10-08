<template>
    <div>      
        <v-container>
            <v-row>
                <v-col class="d-flex ">
                    <v-color-picker v-model="color"></v-color-picker>
                </v-col>
                
            </v-row>
        </v-container>

    </div>
</template>

<script>
  export default {
    data: () => ({    
      type: 'hex',
      hex: '#FF00FF',
      rgba: { r: 255, g: 0, b: 255, a: 1 }
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
    margin: 1.8rem 0 0.5rem 0;
}
</style>