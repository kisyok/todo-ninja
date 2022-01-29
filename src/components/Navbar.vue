<template>
  <nav>

    <v-snackbar v-model="snackbar" :timeout="4000" top>
        <span>Awesome! You added a new project</span>
        <v-btn text color="white" @click="snackbar=false">Close</v-btn>
    </v-snackbar>

    <v-app-bar flat app>
        <v-app-bar-nav-icon class="grey--text" @click=" drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--title">
            <span class="font-weight-light">Todo</span>
            <span>Ninja</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <v-btn text v-bind="attrs" v-on="on">
                    <v-icon left>mdi-menu-down</v-icon>
                    <span>Menu</span>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-item-title>{{ link.text }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        <v-btn text>
            <span>Sign Out</span>
            <v-icon right>mdi-logout-variant</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" color="#4A444EFF" app>
        <v-layout column align-center>
            <v-flex class="mt-5">
                <v-avatar size="100">
                    <img src="avatar-1.png" alt="">
                </v-avatar>
                <p class="white--text subheading mt-1 d-flex justify-center">
                    Kisyok
                </p>
            </v-flex>
            <v-flex>
                <Popup @projectAdded="snackbar=true"/>
            </v-flex>
        </v-layout>
        <v-list>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-list-item-action>
                    <v-icon left class="white--text">{{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './Popup'
export default {
    components: {Popup},
    data(){
        return{
            drawer: false,
            links: [
                {icon: 'mdi-account-box', text: 'Dashboard', route: '/'},
                {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
                {icon: 'mdi-account-group', text: 'Team', route: '/team'},
                {icon: 'mdi-calendar', text: 'Calendar', route: '/calendar'},
            ],
            snackbar: false
        }
    }
}
</script>

<style>

</style>