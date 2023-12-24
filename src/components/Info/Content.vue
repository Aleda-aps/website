<template>
    
    <v-container id="InfoContainer" >
        <v-row>
            <div class="InfoTitle">
                    <svg id="ItalianHand" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M18.2,30.3c2.2-3.1,5.1-7.8,7-11.5l3.6-7.9c0.2-0.4,0.5-0.6,0.8-0.8c0.4-0.1,0.8-0.1,1.1,0c1.2,0.5,2.8,1.6,4.1,3.1l2.1-3  c0.5-0.7,1.4-0.8,2-0.4c0.1,0.1,3.2,2.1,4.5,5.3c0.8-0.1,1.6-0.2,2.4-0.2c0.7,0,1.3,0.6,1.4,1.4l1,12l9.4,15.8  c2.7,1,15.2,6.2,24.7,17.9c0.5,0.6,0.4,1.6-0.2,2.1c-0.3,0.2-0.6,0.3-0.9,0.3c-0.4,0-0.9-0.2-1.2-0.6c-10-12.3-23.7-17.1-23.9-17.1  c-0.3-0.1-0.6-0.3-0.8-0.7l-9.9-16.6c-0.1-0.2-0.2-0.4-0.2-0.6l-0.9-10.9c-1.8,0.2-3.2,1.2-4.2,2.9c-2.5,4.3-1.8,12.3,1.5,17.3  c0,0,0,0.1,0.1,0.1c3.3,6,4.4,19.1,4.5,19.6c0.1,0.8-0.6,1.5-1.4,1.6c-0.8,0.1-1.5-0.5-1.6-1.4c0,0-0.1-1.4-0.4-3.3l-5.8-2  c-0.3-0.1-0.6-0.3-0.8-0.6c0-0.1-3.8-5.7-6.3-9.3c-0.5-0.7-0.3-1.6,0.3-2.1c4.2-3.2,4.5-8.2,4.7-11.9c0.2-3.3-1.5-5.7-2.9-7.1  l-3,6.3c-1.6,3.2-4.3,7.2-8.2,11.9c-0.8,1-0.6,2.6,0,3.7l16,29.5c0.7,1,1.8,1.7,3,2c1.5,0.3,3.6,0.6,6,1c9.7,1.5,24.4,3.7,35,11.3  c0.7,0.5,0.8,1.4,0.3,2.1c-0.3,0.4-0.8,0.6-1.2,0.6c-0.3,0-0.6-0.1-0.9-0.3c-10-7.2-24.3-9.3-33.7-10.7c-2.5-0.4-4.6-0.7-6.2-1  c-2-0.4-3.7-1.6-4.9-3.3c0,0-0.1-0.1-0.1-0.1L18.4,45.3c-1.2-2.3-1.2-4.9,0.1-6.7C17.1,36.2,16.6,32.6,18.2,30.3z M40.7,16.3  c-0.5-1.3-1.5-2.3-2.2-3l-1.8,2.5c0,0-0.1,0.1-0.1,0.1c0.6,1.3,0.8,2.7,0.6,4.3c0.1-0.2,0.2-0.5,0.4-0.7  C38.4,18.1,39.5,17,40.7,16.3z M33.3,42.4c2,2.9,4.4,6.5,5.3,7.8l3.8,1.3c-0.6-4-1.7-8.8-3.2-11.7c-0.8-1.2-1.4-2.6-2-4.1  C36.5,38.1,35.4,40.4,33.3,42.4z M30.3,18.9c0.2-0.4,0.5-0.7,1-0.8c0.4-0.1,0.9,0,1.2,0.2c0.1,0.1,0.8,0.6,1.7,1.5  c0.3-3-1.9-5.1-3.5-6.1l-2.9,6.4c-1.9,3.9-5,8.8-7.2,12c-0.6,0.8-0.6,2.4-0.1,3.9c2.8-3.5,4.8-6.5,6-9L30.3,18.9z"/></svg>
                    <h1 id="who">Who</h1>
            </div>
        </v-row>
        <div class="Description">

            <p>Aleda è un'associazione dedita alla creazione di uno spazio che stimoli la collettività e che migliori il rapporto genitoriale in modo ludico ed educativo.<br>I canali in cui operiamo includono varie strutture penitenziarie e comunità locali</p>

        </div>
        <v-row class="InfoCardContainer ma-2"  cols="12" >
            
            <v-col class="pa-2 card" cols="12" sm="4" >
                <Card CardDescription="Offriamo supporto alla genitorialità, aiutando i cazzi piscio a finire il ashdjasdhu jaskhdj " />
            </v-col >

            <v-col class="pa-2 card" cols="12" sm="4">
                <Card  />
            </v-col>

            <v-col class="pa-2 card" cols="12" sm="4">
                <Card  />
            </v-col>


        </v-row>
    </v-container>
</template>

<script>
import Card from "@/components/Info/Card.vue"

export default {
    components: {
        Card
    },
    
}

</script>
<style lang="css" scoped src="../../style/vars.css"></style>


<style scoped>
#InfoContainer{
    /*background-color: red;*/
    position: absolute;
    
    height: 80vh;
    /*background-color: red;*/
}

#ItalianHand{
    width: 100px;
    height: auto;
    float:left;
    filter: invert(1);
    opacity: 0.8;
}   
#ItalianHand{
    cursor: default;
    animation-name: who;
    transition: all 0.3s ease-in-out 0.3s;
    animation-duration: 4s;
    animation-iteration-count: infinite;
}
@keyframes who {
    0%   {
        transform: rotate(60deg);
    }
    25%  {
        transform: rotate(-30deg);
    }
    50%  {
        transform: rotate(60deg);

    }
    75% {
        transform: rotate(-30deg);

    }
    100%{
        transform: rotate(60deg);

    }
  }
.InfoTitle{
    font-size: 6vmin;
    vertical-align: center;
    /*text-align: center;*/
    font-family: "Caprasimo";
    color: var(--text-color);
    letter-spacing: 5px;
    display: flex;
    align-items: center;
}
#who{
    box-shadow: inset 0 -10px 0 var(--secondary-500);

}

/* margin: top right bottom left */
.Description{
    
    margin: 0 90px 0 90px;

}
.Description > p{
    letter-spacing: 0px;
    font-size: 2.5vmin;
    text-align: center;
    font-family: "Manrope-bold";
    color: var(--text-color);
}

.InfoCardContainer, .card {
    height: 45vh;
    /*center elements vertically*/
    display: flex;
    align-items: center;
    justify-content: center;

}

</style>