<template>
    <!-- text and center it  -->
    <kinesis-container>
        <v-container fluid>
            <div class="wave-container">
                <Waves />
            </div>

            <div class="content-container">
                <!-- <Content /> -->
                <Try />
            </div>
            <div class="sidewavecontainer">
                <svg id="side" viewBox="0 0 200 600" width="200" height="600" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <path
                        d="M56 0L51.7 33.3C47.3 66.7 38.7 133.3 46.3 200C54 266.7 78 333.3 76.5 400C75 466.7 48 533.3 34.5 566.7L21 600L0 600L0 566.7C0 533.3 0 466.7 0 400C0 333.3 0 266.7 0 200C0 133.3 0 66.7 0 33.3L0 0Z"
                        fill="#1a191f" stroke-linecap="round" stroke-linejoin="miter"></path>
                </svg>
            </div>
            <div class="bottomwavecontainer">
                <!-- useless -->
                <!-- <svg id="bottom" viewBox="0 0 600 900" width="600" height="900" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
                    <path
                        d="M0 608L14.3 624C28.7 640 57.3 672 85.8 687.3C114.3 702.7 142.7 701.3 171.2 697C199.7 692.7 228.3 685.3 257 669C285.7 652.7 314.3 627.3 343 626.7C371.7 626 400.3 650 428.8 651.5C457.3 653 485.7 632 514.2 622.2C542.7 612.3 571.3 613.7 585.7 614.3L600 615L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z"
                        fill="#1a191f"></path>
                    <path
                        d="M0 741L14.3 737.8C28.7 734.7 57.3 728.3 85.8 723.7C114.3 719 142.7 716 171.2 704.8C199.7 693.7 228.3 674.3 257 679.3C285.7 684.3 314.3 713.7 343 717.5C371.7 721.3 400.3 699.7 428.8 688.3C457.3 677 485.7 676 514.2 687.3C542.7 698.7 571.3 722.3 585.7 734.2L600 746L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z"
                        fill="#221d31"></path>
                    <path
                        d="M0 714L14.3 712.7C28.7 711.3 57.3 708.7 85.8 709.2C114.3 709.7 142.7 713.3 171.2 715.8C199.7 718.3 228.3 719.7 257 724C285.7 728.3 314.3 735.7 343 740.2C371.7 744.7 400.3 746.3 428.8 754C457.3 761.7 485.7 775.3 514.2 780.3C542.7 785.3 571.3 781.7 585.7 779.8L600 778L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z"
                        fill="#2b2042"></path>
                    <path
                        d="M0 793L14.3 788.3C28.7 783.7 57.3 774.3 85.8 779.7C114.3 785 142.7 805 171.2 811.8C199.7 818.7 228.3 812.3 257 801.5C285.7 790.7 314.3 775.3 343 767.7C371.7 760 400.3 760 428.8 764C457.3 768 485.7 776 514.2 781.2C542.7 786.3 571.3 788.7 585.7 789.8L600 791L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z"
                        fill="#372253"></path>
                    <path
                        d="M0 813L14.3 814.2C28.7 815.3 57.3 817.7 85.8 817.3C114.3 817 142.7 814 171.2 818.8C199.7 823.7 228.3 836.3 257 837.5C285.7 838.7 314.3 828.3 343 827.5C371.7 826.7 400.3 835.3 428.8 838.7C457.3 842 485.7 840 514.2 835.7C542.7 831.3 571.3 824.7 585.7 821.3L600 818L600 901L585.7 901C571.3 901 542.7 901 514.2 901C485.7 901 457.3 901 428.8 901C400.3 901 371.7 901 343 901C314.3 901 285.7 901 257 901C228.3 901 199.7 901 171.2 901C142.7 901 114.3 901 85.8 901C57.3 901 28.7 901 14.3 901L0 901Z"
                        fill="#452263"></path>
                </svg> -->
            </div>
        </v-container>
    </kinesis-container>
</template>
<script>
import Waves from "@/components/Info/Waves.vue";
import Content from "@/components/Info/Content.vue";
import Try from "@/components/Info/Try.vue";

export default {
    components: {
        Waves,
        Content,
        Try,
    },
};
</script>
<style lang="css" scoped src="../style/vars.css"></style>
<style scoped>
.v-container {
    position: relative;
    overflow: hidden;
    /*background-color: blue;*/
}
.content-container {
    position: absolute;
    top: 0;
    height: 100vh;
    min-height: 100vh;
    background-color: var(--background-color);
    width: 52vw;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    
}

.wave-container {
    width: 100%;
    height: 100vh;
    min-height: 100vh;
}

#side {
    bottom: 0px;
    left: calc(52% - 1px);
    height: 100vh;
    width: auto;
    position: absolute;
}

.sidewavecontainer {
    width: 20vw;
    display: none;
    
}
.bottomwavecontainer{
    display: none;
}

@media screen and (max-width:600px) and (min-width:200px) {
    

    .sidewavecontainer {
        display: none;
    }

    .content-container {
        width: 100%;
        background-image: url("../assets/wave/mobile-waves.svg");

    }

    .content-container * {
        text-align: center;
    }
    .content-container, .v-container{
        z-index: 3;
    }
    .bottomwavecontainer{
        z-index: 0;
        bottom: 0px;
        position: absolute;
        display: block;
        width: 100vw;
        height: 100vh;
        
        background-size: cover;
    }
    
}
@media screen and (min-width:600px) and (max-width:960px) {
    .sidewavecontainer {
        display: none;
    }

    .content-container {
        width: 100vw;
        background-image: url("../assets/wave/tablet-waves.svg");
        background-size: cover;
    }

    .content-container * {
        text-align: center;
        z-index: 2;
    }
    .bottomwavecontainer{

        bottom: 0px;
        position: absolute;
        display: block;
        width: 100vw;
        height: 100vh;
        background-size: cover;
        z-index: 1;
    }
    
}
@media screen and (min-width: 1000px) and (max-width:1200px){
    .content-container{
        width: 70vw;
        padding-top: 5rem;
    }
    
}
@media screen and (min-width: 1200px) {
    .content-container{
        width: 65vw;
        padding-top: 2rem;
    }
}
@media screen and (min-width: 960px) and (max-width: 1200px){
    .sidewavecontainer {
        display: block;
    }
    .bottomwavecontainer{
        display: block;
    }
    .content-container{
        width: 50vw;
        padding-top: 5rem;
        width: 70vw;
    }
}
</style>
