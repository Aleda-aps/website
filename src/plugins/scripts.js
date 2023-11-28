// Useful scripts to use all over the code


var script = {

    isMobileDevice(){
        // > 960 is vuetify's md breakpoint
        if( screen.width <= 1100 ) {
            console.log("Mobile Device")
            return true;
            
        }
        else {
            console.log("Desktop Device")
            return false;
        }
    },
    Loaded(el){
        if(document.getElementById(el).classList.contains("loaded")){
            return true 
        }
        else{
            return false
        }
    }

};

export default script;