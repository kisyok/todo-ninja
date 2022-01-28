<template>
  <div class="projects">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>
            {{ project.title}}
          </v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">due by {{ project.due }}</div>
            <div>{{ project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb'

  export default {
    name: 'Projects',
    data() {
      return {
        // projects: [
        //   {title: 'Web Programming', person: 'Kisyok', due: '21/2/2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio at perferendis, explicabo nesciunt, eveniet beatae quae quos quaerat facere repellendus. Sint sit adipisci nemo, totam necessitatibus ipsa deleniti rem?'},
        //   {title: 'Database', person: 'Haqim', due: '12/2/2022', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio at perferendis, explicabo nesciunt, eveniet beatae quae quos quaerat facere repellendus. Sint sit adipisci nemo, totam necessitatibus ipsa deleniti rem?'},
        //   {title: 'SQL', person: 'Gujjar', due: '01/4/2021', status: 'completed', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio at perferendis, explicabo nesciunt, eveniet beatae quae quos quaerat facere repellendus. Sint sit adipisci nemo, totam necessitatibus ipsa deleniti rem?'},
        //   {title: 'Backend', person: 'Aisyah', due: '16/6/2021', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, optio at perferendis, explicabo nesciunt, eveniet beatae quae quos quaerat facere repellendus. Sint sit adipisci nemo, totam necessitatibus ipsa deleniti rem?'}
        // ]
        projects: []
      }
    },
    computed: {
      myProjects(){
        return this.projects.filter(project => {
          return project.person === 'Kisyok'
        })
      }
    },
     created(){
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges();

        changes.array.forEach(change => {
          if(change.type === 'added'){
            this.projects.push({
              ...change.doc.data(),
              id: change.doc.id
            })
          }
        });
      })
    }
  }
</script>
