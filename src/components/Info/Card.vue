<template>

    <v-container class="d-flex align-center flex-column pa-5  rounded-xl">
        <v-img 
        :width="100"
        aspect-ratio="1/1"
        src="../../assets/icons/family.png" />
        <h1>{{ CardTitle }}</h1>
        <p>{{ CardDescription }}</p>
    </v-container>
    <!-- <v-container class="card" >
        <v-img 
        :width="100"
        aspect-ratio="1/1"
        src="../../assets/icons/family.png" />
        <h1>{{ CardTitle }}</h1>
        <p>{{ CardDescription }}</p>
    </v-container> -->
    <!-- <v-card class="ma-5 pa-5">
        <v-row>
            <v-col class="shrink">
                <v-img src="../../assets/icons/family.png" max-width="80" class="ml-3"></v-img>
           </v-col>
        </v-row>
        <v-row align="start">
            
            <v-col>
                 <v-card-title class="pa-0">Title</v-card-title>
                 <v-card-subtitle>Author</v-card-subtitle>
             </v-col>
         </v-row>
    </v-card> -->
</template>
<style lang="css" scoped src="../../style/vars.css"></style>

<script>
export default{
    name: "Card",
    props: {
        CardTitle: {
            type: String,
            default: "Card Title"
        },
        CardDescription: {
            type: String,
            default: "Card Description"
        }
    }
}
</script>

<style scoped>
*{
    --card-transition-time: 0.3s;
}
.v-container{
    background-color: var(--text-color); /*to change*/
    border-bottom: none;
    z-index: 10;
    position: relative;
    height: 30vh;
    transition: var( --card-transition-time);
    text-align: center;
    font-family: "inclusive";

}
.v-img{
    transition: var( --card-transition-time);

}

.v-container:hover{
    background-color: var(--secondary-500);
    color: var(--text-color);
    box-shadow: 0px 0px 10px var(--accent-color);
    transform: translateY(-20px);


    .v-img{
        /*https://codepen.io/sosuke/pen/Pjoqqp*/
        filter: invert(90%) sepia(27%) saturate(73%) hue-rotate(225deg) brightness(99%) contrast(93%);
    }
    
}


</style>