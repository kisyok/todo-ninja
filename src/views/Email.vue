<template>
    <div>
        <v-card class="mt-5 mx-auto" max-width="500">
            <v-container>
                <form @submit.prevent="sendEmail" ref="form">
                    <v-text-field name="name" v-model="name" type="text" label="Your Name *"></v-text-field>
                    <v-text-field name="email" v-model="email" type="email" label="Email *"></v-text-field>
                    <v-text-field name="message" v-model="message" type="text" label="Message *"></v-text-field>
                    <v-btn type="submit" color="primary" class="mr-4">Send Email</v-btn>
                </form>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    data () {
        return {
            name: '',
            email: '',
            message: '',
        }
    },
    methods: {
        sendEmail() {
            emailjs.sendForm('service_1h5jsi7', 'template_o6rtl5i', this.$refs.form, 'user_jvLeQb739RUHlJlW95NsB')
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
            }, function(error) {
                console.log('FAILED...', error);
            });

            // Reset form field
            this.name = ''
            this.email = ''
            this.message = ''
        },
    }

}
</script>

<style>

</style>