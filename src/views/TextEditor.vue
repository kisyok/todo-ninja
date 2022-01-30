<template>
  <div>
        <h1>Text Editor</h1>
        <rich-text-editor @update="onUpdate"/>
  </div>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    methods: {
        onUpdate (text) {
            this.text = text
        }
    }
}
</script>

<style>

</style>