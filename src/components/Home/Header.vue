<template>
    <v-row align="center" justify-center dense no-gutters class="navbar">
        <v-col cols="6" sm="6" xs="3" md="6" lg="6" xl="6" class="pa-5">
            <v-img
                title="Logo dell'associazione Aleda"
                alt="Logo Aleda"
                contain
                width="100px"
                src="../../assets/aleda.png"
                class="logo"
            ></v-img>
        </v-col>
        <v-col cols="6" sm="6" xs="3" md="6" lg="6" xl="6" align="right" class="pr-8 pt-2">
            <!-- <v-icon size="30" class="mr-4 " >mdi-facebook</v-icon>
            <v-icon size="30" >mdi-instagram</v-icon> -->

            <!-- image taken from: https://www.flaticon.com/free-icon/facebook_254390?term=facebook&page=1&position=31&origin=search&related_id=254390 -->
            <a href="https://www.facebook.com/people/Aleda-Aps/61554212074571/" target="_blank" title="Seguici su facebook!">
                <v-img
                
                src="../../assets/socials/facebook.png"
                class="mr-4 social"
                width="30"
                contain
            >
            </v-img></a>
            <!-- image taken from: https://www.flaticon.com/free-icon/instagram_1400829?term=instagram&page=1&position=9&origin=search&related_id=1400829 -->
            <a href="https://www.instagram.com/associazione_aleda/" target="_blank" title="Seguici anche su instagram!">
            <v-img
                class="social"
                contain
                width="30"
                src="../../assets/socials/instagram.png"
            ></v-img></a>
        </v-col>
        
        
    </v-row>

</template>
<style lang="css" scoped src="../../style/vars.css"></style>

<script>

</script>
<style scoped>
.navbar, *{
    z-index: 100;
    
}
.logo:hover{
    transform: translateY(-0.1vh);
    transition: transform 0.5s;
    filter: drop-shadow(5px 5px 5px rgba(0,0,0,1));
    
}
.logo{
    transition: transform 0.5s;
    filter: drop-shadow(5px 5px 5px rgba(164, 96, 51,0.2));
}
.social{
    
    display: inline-block;
    filter: invert(1);
    opacity: 0.9;
    transition: transform 2s;

}
.social:hover{
    transform: translateY(-0.8vh);
    transition: transform 0.5s;
    filter: invert(0.8);
}

@media only screen and (max-width: 960px){
    .navbar{
        height: 20vh;
    }
    .logo{
        width: 130px!important;
    }
    .social{
        width: 50px!important;
    }
    .social, a{
        padding: 10px!important;
    }
   
}


@media only screen and (max-width: 600px){
    .navbar{
        height: 15vh;
    }
    .logo{
        width: 70px!important;
    }
    .social{
        width: 25px!important;
    }
    .social, a{
        padding: 2px!important;
    }
}
</style>