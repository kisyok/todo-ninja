<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>
    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click="sortBy('title')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn small text color="grey" @click="sortBy('person')" v-bind="attrs" v-on="on">
              <v-icon left small>mdi-folder</v-icon>
              <span class="caption text-lowercase">By person name</span>
            </v-btn>
          </template>
        <span>Sort projects by person name</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat class="pa-3" color="#F1F1F1FF" v-for="project in projects" :key="project.title">
        <v-layout row wrap class="pa-3 project" :class="project.status">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="d-flex justify-center">
              <v-chip small :class="project.status" class="white--text caption">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import db from '@/fb'

  export default {
    name: 'Dashboard',
    data() {
      return{
        // projects: [
        //   {title: 'Web Programming', person: 'Kisyok', due: '21/2/2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio at perferendis, explicabo nesciunt, eveniet beatae quae quos quaerat facere repellendus. Sint sit adipisci nemo, totam necessitatibus ipsa deleniti rem?'},
        //   {title: 'Database', person: 'Haqim', due: '12/2/2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio at perferendis, explicabo nesciunt, eveniet beatae quae quos quaerat facere repellendus. Sint sit adipisci nemo, totam necessitatibus ipsa deleniti rem?'},
        //   {title: 'SQL', person: 'Gujjar', due: '01/4/2021', status: 'completed', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio at perferendis, explicabo nesciunt, eveniet beatae quae quos quaerat facere repellendus. Sint sit adipisci nemo, totam necessitatibus ipsa deleniti rem?'},
        //   {title: 'Backend', person: 'Aisyah', due: '16/6/2021', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio at perferendis, explicabo nesciunt, eveniet beatae quae quos quaerat facere repellendus. Sint sit adipisci nemo, totam necessitatibus ipsa deleniti rem?'}
        // ]
        projects: [],
      }
    },
    methods: {
      sortBy(prop){
        this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
      }
    },
    created(){
      // db.collection('projects').onSnapshot(res => {
      //   const changes = res.docChanges();

      //   changes.array.forEach(change => {
      //     if(change.type === 'added'){
      //       this.projects.push({
      //         ...change.doc.data(),
      //         id: change.doc.id
      //       })
      //     }
      //   });
      // })

    },
    firestore: {
      projects: db.collection('projects'),
    }
  }
</script>

<style>
.project.completed {
  border-left: 4px solid #3cd1c2 !important;
}

.project.ongoing {
  border-left: 4px solid orange !important;
}

.project.overdue {
  border-left: 4px solid tomato !important;
}

.v-chip.completed {
  background: #3cd1c2 !important;
}

.v-chip.ongoing {
  background: #ffaa2c !important;
}

.v-chip.overdue {
  background: #f83e70 !important;
}
</style>
