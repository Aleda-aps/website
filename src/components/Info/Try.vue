<template>
    <v-container fill-height fluid>
        <h1></h1>
        <v-row >
            <v-col class="list-id" cols="12" xs="12" sm="12" md="6"><h1>01.</h1></v-col>
            <v-col class="list-info" cols="12" sm="12" xs="12" md="6" >
                <!-- info col-md-10 col-sm-10 xs-no-margin xs-no-padding xs-width-100 xs-clear-both -->
                <h1>Cosa facciamo?</h1>
                <p>
                    Aleda è un'associazione dedita alla creazione di uno spazio che stimoli la collettività e che migliori il rapporto genitoriale in modo ludico ed educativo.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="list-id" cols="12" xs="12" sm="12" md="6"><h1>02.</h1></v-col>
            <v-col class="list-info" cols="12" sm="12" xs="12" md="6" >
                <h1>Dove lo facciamo?</h1>
                <p>
                    Aleda svolge la propria attività all’interno delle carceri, delle case Mandamentali e dei comuni.
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="list-id" cols="12" xs="12" sm="12" md="6"><h1>03.</h1></v-col>
            <v-col class="list-info" cols="12" sm="12" xs="12" md="6" >
                <h1>Come lo facciamo?</h1>
                <p>
                    Attraverso attività Sociali, Olistiche e ludiche l'associazione mira a migliorare lo stato di vita di chi vive lontano dalla realtà esterna.
                </p>
            </v-col>
        </v-row>
    </v-container>

</template>
<script>

</script>
<style lang="css" scoped src="../../style/vars.css"></style>
<style scoped>


#MainInfoText{
    font-family: "Manrope-bold-xxl";
    text-shadow: 1px 1px 0px black;
    /* offset-x | offset-y | blur-radius | color */
}
.list-info h1{
    font-size: 3rem;
    font-family: "inclusive";

}
.list-info p{
    font-size: 1.3rem;
    font-family: "manrope";
}
.v-container{
    color: var(--text-color);
}   
.list-id{
    width: 50%;
    text-align: right;
    padding-right: 5rem;
}
.list-id h1{
    font-size: 2.5rem;
    font-family: "inclusive";

}
@media screen and (max-width:960px) and (min-width: 600px) {
    
    .list-id{
        width: 100%;
        text-align: center;
        padding-right: 0rem;
        text-shadow: 1px 1px 0px black;
    }
    .list-info{
        font-size: 1.2rem;
        height: 9rem;
        padding: 0 8rem 1rem 8rem;
    }
    .list-info h1{
        font-size: 2rem;
    }
    .list-info p{
        font-size: 1rem;
    
    
    }
    
}
@media screen and (max-width:600px) {
    .list-info {
        padding: 0 1rem 1rem 1rem;
    }
    .list-id{
        width: 100%;
        text-align: center;
        padding-right: 0rem;
    }
    .list-info{
        height: 9rem;
        padding: 0 3rem 1rem 3rem;
    }
    .list-info h1{
        font-size: 1.8rem;
    }
    .list-id h1{
        font-size: 2rem;
    }
    .list-info p{
        font-size: 1rem;
    
    }
    
}

@media screen and (min-width: 200px) and (max-width:450px)  {
    .list-info h1{
        font-size: 1.2rem;
    }
    .list-info p{
        font-size: 0.8rem;
    }
    .list-id h1{
        font-size: 1.5rem;
    }
}


@media screen and (min-width: 960px) and (max-width: 1200px){
    .list-info h1{
        font-size: 2rem;
    }
    .list-id h1{
        font-size: 2rem;
    }
   
}

</style>