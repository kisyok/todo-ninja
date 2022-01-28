<template>
  <v-dialog max-width="600px" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text class="success">Add New Project</v-btn>
      </template>
      <v-card>
          <v-card-title>
              <h2>Add New Project</h2>
          </v-card-title>
          <v-card-text>
              <v-form class="px-3" ref="form">
                  <v-text-field label="Title" v-model="title" prepend-icon="mdi-folder" :rules="inputRule"></v-text-field>
                  <v-textarea label="Information" v-model="information" prepend-icon="mdi-pencil" :rules="inputRule"></v-textarea>
                  <v-menu>
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field :value="due" label="Due Date" prepend-icon="mdi-calendar" v-bind="attrs" v-on="on" :rules="inputRule"></v-text-field>
                        </template>
                        <v-date-picker v-model="due"></v-date-picker>
                  </v-menu>
                  <v-btn :loading="loading" text class="success mx-0 mt-3" @click="submit()">Add Project</v-btn>
              </v-form>
          </v-card-text>
      </v-card>
  </v-dialog>

</template>

<script>
import format from 'date-fns/format'
import db from '@/fb.js'

export default {
    data() {
        return {
            title: '',
            information: '',
            due: null,
            inputRule: [
                v => !!v || 'This field is required',
            ],
            loading: false,
            dialog: false
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()){
                this.loading = true; 

                const project = {
                    title: this.title,
                    content: this.information,
                    due: this.due,
                    person: 'Kisyok',
                    status: 'ongoing'
                }
                db.collection('projects').add(project).then(() => {
                    console.log('added to db')
                    this.loading = false;
                    this.dialog = false;
                    this.$emit('projectAdded');
                })
            }
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