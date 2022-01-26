<template>
  <v-dialog max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text class="success">Add New Project</v-btn>
      </template>
      <v-card>
          <v-card-title>
              <h2>Add New Project</h2>
          </v-card-title>
          <v-card-text>
              <v-form class="px-3">
                  <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder"></v-text-field>
                  <v-textarea label="Information" v-model="information" prepend-icon="mdi-pencil"></v-textarea>
                  <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field :value="due" label="Due Date" prepend-icon="mdi-calendar" v-bind="attrs" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="due"></v-date-picker>
                  </v-menu>
                  <v-btn text class="success mx-0 mt-3" @click="submit()">Add Project</v-btn>
              </v-form>
          </v-card-text>
      </v-card>
  </v-dialog>

</template>

<script>
import format from 'date-fns/format'

export default {
    data() {
        return {
            title: '',
            information: '',
            due: null
        }
    },
    methods: {
        submit() {
            console.log(this.title, this.information)
        }
    },
    computed: {
        formattedDate(){
            return this.due ? format(this.due, 'Do MMM YYYY'): ''
        }
    }
}
</script>

<style>

</style>