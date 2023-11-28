<template>
    <v-row align="center" justify="center" class="outer">
        <v-col cols="12" sm="12" md="12" class="homeContainer">
                 
                <div class="HomeTextContainer" align="center">
                    <div id="TextResponsive"> 
                        <kinesis-element :strength="5" >
                            <h1 class="Aleda" data-speed="2">Aleda</h1>
                        </kinesis-element>
                        <!-- add anim to b class to animate it, i didn't quite like it tho -->
                        <!-- <b class="hr" ></b>  -->
                        <!-- i don't like it meh -->
                        <kinesis-element :strength="20">

                            <h3 class="motto" data-speed="2">"La forza dell'unione"</h3>
                        </kinesis-element>
                    </div>
                    <div class="mt-10" id="ButtonResponsive">
                        <Button     id="avanti"   class="ma-5 pl-10 pr-10 pb-3 pt-3"  :bgcolor="'var(--accent-color)'" :textColor="'var(--text-color)'" :text="'Avanti'"  :scroll="'Info'" :plain="false" />
                        <Button     id="contatti" class="ma-5 pl-10 pr-10 pb-3 pt-3"  :plain="true" :textColor="'var(--text-color)'" :text="'Contatti'"  :scroll="'Contacts'" />
                    </div>
                </div>
                
                <div id="arrowContainer" @click="Arrow" :class="(isMobile) ? '' : 'disabled'">
                    <div class="scroll-down "></div>
                </div>
                
        </v-col>
    </v-row>
</template>
<script>
import Button from "@/components/Home/Button.vue"
import script from "@/plugins/scripts"

export default {
    components: {
        Button,
    },
    data() {
      return {
        isMobile: false,
    }
    
    },methods:{
        Arrow(){
            
            document.getElementById("Info").scrollIntoView({behavior: "smooth"});
            
        },
    },
    mounted(){
        this.isMobile = script.isMobileDevice()
        console.log(this.isMobile)
    }
}
</script>
<!-- separator -->
<style lang="scss" scoped>
  @import "@/style/separator.scss";
</style>

<style scoped>
*{
    /*do NOT remove*/
    overflow: hidden!important;
}
.LandingCard{
    min-height: 80vh;
    min-width: 50vh;
}
.Aleda{
    color: var(--text-color);
    font-family: 'Manrope-bold';
    /*font-size: 100px; for mobile it's top top top top*/
    font-size: 20vmin;
    transition: transform 0.5s;
    /*offsetx,offsety,blur,color*/
    text-shadow: 1px 1px 5px black;
    line-height: 1.1;
}
.motto{
    color: var(--text-color);
    opacity: 50%;
    font-family: 'Manrope-light';
    font-size: 5vmin;
    transition: transform 0.5s;
    text-shadow: .1px .1px 1px var(--text-color);

    
}

.HomeTextContainer{
    /*center vertically*/
    margin-top: 5%;
}


/* Buttons */
#avanti{
    box-shadow: 0px 0px 10px var(--accent-color);
    transition: transform 0.5s;
}
#avanti:hover{
    transform: scale(1.1);
    transition: transform 0.5s;
    box-shadow: 0px 0px 15px var(--accent-color);
}
#avanti:active{
    color: var(--background-color)!important;
    transform: scale(0.9);
    box-shadow: 0px 0px 5px var(--accent-color);

}
#contatti{
    opacity: 30%;
    transition: 500ms;

}
#contatti:hover{
    opacity: 80%;
    transform: scale(1.1);

}
#contatti:active{
    box-shadow: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
    transform: scale(0.9);
    box-shadow: 0px 0px 5px var(--secondary-color);
    color: var(--background-color)!important;
}


#arrowContainer{
    z-index: 101;
    display: flex;
    justify-content: center;

}

/*arro2*/
.disabled{
    display: none!important;
}
.scroll-down {
    position: absolute;
    bottom: 0px;
    display: none;
    text-align: center;
    font-size: 20px;
    z-index: 101;
    text-decoration: none;
    bottom:40px;
    text-shadow: 0;
    width: 25px;
    height: 25px;
    border-bottom: 3px solid var(--secondary-500);
    border-right: 3px solid var(--secondary-500);
    z-index: 9;
    -webkit-transform: translate(-50%, 0%) rotate(45deg);
    -moz-transform: translate(-50%, 0%) rotate(45deg);
    transform: translate(-50%, 0%) rotate(45deg);
    -webkit-animation: fade_move_down 4s ease-in-out infinite;
    -moz-animation:    fade_move_down 4s ease-in-out infinite;
    animation:         fade_move_down 4s ease-in-out infinite;
  }
  
  
  /*animated scroll arrow animation*/
  @-webkit-keyframes fade_move_down {
    0%   { -webkit-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -webkit-transform:translate(0,10px) rotate(45deg); opacity: 0; }
  }
  @-moz-keyframes fade_move_down {
    0%   { -moz-transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { -moz-transform:translate(0,10px) rotate(45deg); opacity: 0; }
  }
  @keyframes fade_move_down {
    0%   { transform:translate(0,-10px) rotate(45deg); opacity: 0;  }
    50%  { opacity: 1;  }
    100% { transform:translate(0,10px) rotate(45deg); opacity: 0; }
  }

@media only screen and (max-width: 960px){
    .outer{
        display: table;
        position: absolute;
        top: 0;
        left: 0;
        height: 80%;
        width: 100%;
    }
    .homeContainer{
        /*center vertically inside a div*/
        display: table-cell;
        vertical-align: middle;

    }
    .HomeTextContainer{
        margin-left: auto;
        margin-right: auto;
    }
    #avanti, #contatti{
        transform: scale(1.2);
        
    }
    .scroll-down{
        width: 50px;
        height: 50px;
        display: block!important;

    }
}

@media only screen and (max-width: 600px){
    .outer{
        display: table-cell;
        width: 500px;
        height: 500px;
        vertical-align: middle;
        text-align: center;
        height: 95%;
        width: 100%;
    }
    .Aleda{
        font-size: 25vmin;
    }
    .homeContainer{
        /*center vertically inside a div*/
        display: inline-block;

    }
    .HomeTextContainer{
        margin-left: auto;
        margin-right: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
    }
   
    #avanti, #contatti{
        transform: scale(0.9)!important;
        display: block;
        

    }
    .scroll-down{
        width: 25px;
        height: 25px;
        display: block!important;

    }
    
    
    
}

</style>