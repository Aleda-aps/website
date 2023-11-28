<!-- landing -->
<template>
    <kinesis-container :active="(!isMobile)" >
        <v-container fluid >
            <Header  :class="(hasLoaded) ? 'slidein': ''"/>
            <Content />
                  
                
        </v-container>
    </kinesis-container>
</template>
<script>
import Header from "@/components/Home/Header.vue"
import Content from "@/components/Home/Content.vue"
import script from "@/plugins/scripts"

export default {
    components: {
        Header,
        Content,
    },
    methods: {
       
    },
    data(){
        return{
            isMobile: false,
            hasLoaded: false,
        }
    },
    mounted(){
        this.isMobile = script.isMobileDevice()
        // check if this component got the class "loaded"
        // if not, add it
        this.hasLoaded = script.Loaded("Home")
    }
}

</script>
<style lang="css" scoped src="../style/vars.css"></style>
<style scoped>



.v-container{
    height: 100vh;
    z-index: 3;
    
    background: var(--background-color);
    background-image: radial-gradient(rgb(229, 224, 217,0.1) 5%, transparent 10%);
    background-color: var(--background-color);
    background-size: 12vmin 12vmin;
    background-position: -19px -0px;
    left:0;
    top: 0;
}   




</style>