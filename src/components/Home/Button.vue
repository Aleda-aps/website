<template>
    <button @click="onClick()" :style="{ 'background': bgcolor, 'color': textColor}" class="btn" :class="(plain) ? 'plain' : ''" >{{ text }}</button>
</template>

<script>


export default{
    name:"Button",
    props: {
        text: {
            type: String,
            default: "Button",
            required: false

        },
        scroll: {
            type: String,
            default: "",
            required: false

        },

        bgcolor: {
            type: String,
            default: "black",
            required: false


        },
        textColor: {
            type: String,
            default: "white",
            required: false

        },
        plain: {
            type: Boolean,
            default: false,
            required: false

        },
        styling: {
            type: String,
            default: "",
            required: false
        }

    },
    methods:{
        onClick(){
            if(this.scroll != ""){
                document.getElementById(this.scroll).scrollIntoView({behavior: "smooth"});
            }else{
                console.log("no component with such id")
            }
        },
        data() {
        return{
            defaultStyles: {
                'background': this.bgcolor, 
                'color': this.textColor
            },
        }
    }
    }
}
</script>
<style lang="css" scoped src="../../style/vars.css"></style>

<style>

.plain{
    background: none!important;
    border: none!important;
}


.btn {
  border: 1px solid transparent;
  border-radius: .5rem;
  box-sizing: border-box;
  cursor: pointer;
  flex: 0 0 auto;
  font-family: "Manrope-bold";
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.5rem;
  padding: .75rem 1.2rem;
  text-align: center;
  text-decoration: none #6B7280 solid;
  text-decoration-thickness: auto;
  transition-duration: .2s;
  transition-property: background-color,border-color,color,fill,stroke;
  transition-timing-function: cubic-bezier(.4, 0, 0.2, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: auto;
}




@media (min-width: 768px) {
  .btn {
    padding: .75rem 1.5rem;
  }
}
@media only screen and (max-width: 960px){
    
}

</style>


