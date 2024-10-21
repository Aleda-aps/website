<template>
  
  <v-app >
    
      
    <div class="loaderContainer" :class="(isloaded) ? 'disabled' : ''">
      <semipolar-spinner
      :animation-duration="2000"
      :size="65"
      color="#7b3bb2"
      />
    </div>
    <vue-scroll-snap onload="contentLoaded">
      
      <div class="side-navbar">
        <ul>
          <li :class="(homeVisible)     ? 'active': 'inactive'" @click="scrollToSection('Home')"></li>
          <li :class="(infoVisible)     ? 'active': 'inactive'" @click="scrollToSection('Info')"></li>
          <li :class="(contactsVisible) ? 'active': 'inactive'" @click="scrollToSection('Contacts')"></li>

        </ul>
      </div>
      <div class="viewport" v-observe-visibility="homeVisibility"></div>
      <transition name="slide" appear>
        <Home     class="item" ref="Home"           id="Home"  />
      </transition>
      
      <div class="viewport" v-observe-visibility="infoVisibility"></div>
      <Info     class="item" ref="Info"           id="Info" />

      <div class="viewport" v-observe-visibility="contactsVisibility"></div>
      
      <Contacts class="item" ref="Contacts"   id="Contacts" />

      <div class="viewport" v-observe-visibility="testVisibility"></div>
      <test class="item" ref="test" id="test" />
      
    </vue-scroll-snap>

  </v-app>
</template>

<script>
  import Home from '@/pages/Home.vue'
  import Info from '@/pages/Info.vue'
  import Contacts from '@/pages/Contacts.vue'
  import test from '@/components/test.vue'


  import VueScrollSnap from "vue-scroll-snap"
  import { SemipolarSpinner  } from 'epic-spinners'
  
  export default {
    name: 'App',
    components: {
      Home,
      Info,
      Contacts,
      test,
      VueScrollSnap,
      SemipolarSpinner
    },
    data() {
      return {
        sections: [
          { id: 'Home' },
          { id: 'Info' },
          { id: 'Contacts' },
          { id: 'test'}
        ],
        homeVisible: false,
        infoVisible: false,
        contactsVisible: false,
        testVisible: false,
        isloaded: false,
      }
    },
  
    methods: {
      // to add in script file
      scrollToSection(id) {
        document.getElementById(id).scrollIntoView({
          behavior: 'smooth'
        })
      },
      // not this one
      contentLoaded(){
        console.log("content loaded")

      },
      

      homeVisibility (isVisible, entry) {
      this.homeVisible = isVisible
      // console.log(entry)
      },
      infoVisibility (isVisible, entry) {
      this.infoVisible = isVisible
      // console.log(entry)
      },
      contactsVisibility (isVisible, entry) {
      this.contactsVisible = isVisible
      // console.log(entry)
      },
      testVisibility (isVisible, entry) {
      this.testVisible = isVisible
      // console.log(entry)
      }
      
    },
    mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") {
          // sometimes it bugs and loads forever with timeout, that's why it's disabled
          // setTimeout(() => {
          //   this.isloaded = true;
          //   console.log("loaded")
          // }, 500);
          
          this.isloaded = true;
          console.log("loaded")
        }else{
          // wait 2000ms and then show the loader
          setTimeout(() => {
            this.isloaded = true;
            console.warn("error handled by hiding loader after 2000ms timeout")
          }, 2000);
        }
      }
    }
    
    
  }
  




</script>
<!-- import the vars.css -->
<style lang="css" scoped src="./style/vars.css"></style>

<style scoped>
.disabled{
  display: none!important;
}
.loaderContainer{
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  background-color: var(--background-color);
  z-index: 999;
}

.item {
  min-height: 100vh;
  height: 100vh ;
}
.viewport{
  /*center in the middle of the screen and make it a 20px red square*/
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1px;
  
  background-color: red;
  opacity: 0;
  z-index: -50;
  
  
}
.scroll-snap-container {
  height: 100vh;
  width: 100vw;
}




.side-navbar {
  position: fixed!important;
  z-index: 100;
  top: 50%;
  right: 2%;
  transform: translateY(-50%);
}

ul {
  list-style: none;
  padding: 0;
  width: 10vh;
  
}

li {
  /*center horizontally*/
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  width: 25px;
  height: 25px;
  margin: 30px 0;
  background-color: var(--secondary-color);
  border-radius: 50%;
  cursor: pointer;
  transition-duration: 1000ms;
  /*outline: 1px solid black;*/
}
li:hover{
  
  background-color: var(--accent-color);
  opacity: 80%;
  transition-duration: 500ms;
  transition-delay: 100ms;
  
  /*transform: translateY(10%);*/

  /*transform: scale(0.8)*/
}
li:active{
  box-shadow: 0px 0px 30px var(--accent-color)!important;
}




.active {
  background-color: var(--accent-color); 
  box-shadow: 0px 0px 20px var(--secondary-500);
}
.active:hover{
  box-shadow: 0px 0px 10px var(--secondary-500);
  
}
.inactive{
  box-shadow: 0px 0px 10px var(--secondary-color);
}
.inactive:hover{
  box-shadow: 0px 0px 17px var(--accent-color);
} 
.content-section {
  height: 100vh; /* Adjust this as per your content height */
}



/*slide in animation on page load*/
.slidein {
  transform: translateY(150px);
  animation: come-in 0.8s ease forwards;
}
.slidein:nth-child(odd) {
  animation-duration: 0.6s; /* So they look staggered */
}

@keyframes come-in {
  to { transform: translateY(0); }
}



@media only screen and (max-width: 960px){
  .side-navbar{
    display: none;
  }

  
}
</style>