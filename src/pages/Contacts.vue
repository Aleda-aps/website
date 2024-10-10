<template>
    <!-- text and center it  -->
    <v-container fluid>
        <!-- https://www.csscodelab.com/login-form-vertical-wave-animation-effect/ -->
        <Form />
    </v-container>

</template>
<script>
import Form from '../components/Contacts/Form.vue'
export default {
    components: {
        Form
    } 
}
</script>
<style lang="css" scoped src="../style/vars.css"></style>
<style scoped>

.v-container{
    /*background-color: var(--background-color);*/
    background-image: url("../assets/blobs/blob-1-dark.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    height: 100vh;
    min-height: 100vh;

}
@media screen and (max-width:600px) {

    .v-container{
        background-image: url("../assets/blobs/blob-mobile.svg");
        
    }
    

}
</style>