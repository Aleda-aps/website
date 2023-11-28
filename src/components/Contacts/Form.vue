<template>

    <v-container fluid class="fill-height">
        <v-row >
            <v-col cols="12" sm="12" md="6" offset-md="3"  >
                <v-card outlined color="transparent" class="elevation-4" >
                    <v-card-title>
                        <h1 class="text-center pa-6" >Teniamoci in <span id="contatto">contatto</span></h1>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                        <v-col lg="6" sm="12" xs="12" md="12" cols="12" >
                        <!-- <v-form action="https://formsubmit.co/acc37212ee13913c195684502eb2adec" method="POST"> -->
                        <v-form ref="form" @submit.prevent="submit">

                            <v-text-field
                            clearable
                                v-model="params.name"
                                label="Nome"
                                name="name"
                                placeholder="Mario rossi"
                                
                                color="primary"
                            ></v-text-field>
                            <v-text-field
                            clearable
                                v-model="params.email"
                                placeholder="Mariorossi@gmail.com"
                                color="primary"
                                label="Email"
                                name="email"
                            ></v-text-field>
                            <v-textarea
                            clearable
                                placeholder="Salve, vi contatto per..."
                                color="primary"
                                v-model="params.message"
                                label="Messaggio"
                                name="message"
                            ></v-textarea>
                            <v-btn
                                type="submit"
                                color="primary"
                            >Invia</v-btn>
                        </v-form>
                    </v-col>
                    <v-col class="info" lg="6" cols="12" sm="12" xs="12" md="12">
                        <v-row>
                            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                                <v-icon class="ml-6 mr-6 ma-2">mdi-phone</v-icon>
                                <span><b>Telefono: </b>
                                    <a href="tel:
                                    331 807 0974" target="_blank"
                                    >331 807 0974</a>
                                <!-- (lun-ven 14:00-18:00) -->
                                </span>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                                <!-- <v-icon class="ma-6">mdi-email-outline</v-icon> -->
                                <v-icon class="ml-6 mr-6 ma-2">mdi-at</v-icon>

                                <span><b>Email: </b>
                                    <a href="mailto:
                                    info@associazionealeda.com" target="_blank"
                                    >info@associazionealeda.com</a>
                                </span>
                            </v-col>
                            <!-- mdiCardAccountDetailsOutline -->
                            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                                <v-icon class="ml-6 mr-6 ma-2">mdi-card-account-details</v-icon>
                                <span><b>Codice Fiscale:</b> 94089560018</span>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                                <!-- <v-icon class="ma-6">mdi-email-outline</v-icon> -->
                                <v-icon class="ml-6 mr-6 ma-2">mdi-instagram</v-icon>

                                <span><b>Instagram: </b>
                                    <a href="https://www.instagram.com/associazione_aleda/" target="_blank"
                                    >associazione_aleda</a>
                                </span>
                            </v-col>
                            <v-col cols="12" sm="12" md="12" lg="12" xl="12">
                                <!-- <v-icon class="ma-6">mdi-email-outline</v-icon> -->
                                <v-icon class="ml-6 mr-6 ma-2">mdi-facebook</v-icon>

                                <span><b>Facebook: </b>
                                    <a href="https://www.facebook.com/associazione_aleda/" target="_blank"
                                    >associazione_aleda</a>
                                </span>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <div class="text-center">        
            <v-snackbar
              v-model="snackbar"
              :timeout="timeout"
                :color="color"
            >
              {{ text }}
        
              <template v-slot:actions>
                <v-btn
                  color="#e5e0d9"
                  variant="outlined"
                  @click="snackbar = false"
                >
                  Chiudi
                </v-btn>
              </template>
            </v-snackbar>
          </div>
    </v-container>

</template>

<style scoped>
.v-card *{
    color: var(--text-color);
}
#contatto{
    /*underline in purple the word*/
    text-decoration: underline var(--accent-color); ;
    
}
a{
    opacity: 0.5;
}
span b{
    font-family: "manrope-bold"
}
span{
}
/*il testo e poi l'onda sopra devi aggiunstare lo z index che nva*/
@media screen and (max-width:600px) and (min-width:400px) {

    .v-card-title h1{
        font-size: 2rem;
    }


}
@media screen and (max-width:400px) and (min-width:200px) {

    .v-card-title h1{
        font-size: 1.6rem;
    }
    span {
        font-size: 0.8rem;
    }
    #contatto{
        font-size: 1.6rem;
    }


}
</style>

<script>
import emailjs from '@emailjs/browser';
// add variables and 
export default {
    data() {
        return {
            params: {
                name: '',
                email: '',
                message: '' 
            },
            snackbar: false,
            text: '',
            timeout: 6000,
            color: ''
        }

    },
    
    methods: {

        submit() {
            console.log("Stai mandando un email con i seguenti dati: ",this.params.name, this.params.email, this.params.message)
            if(this.params.name == '' || this.params.email == '' || this.params.message == ''){
                
                this.text = 'Compila prima tutti i campi!';
                this.snackbar = true;
                this.color = 'error';
                return;
            }else{
                if(this.params.email.includes("@") && this.params.email.includes('.') && this.params.email.length > 5 ){
                    emailjs.send('service_8temey2', 'template_6rpmahw', this.params, 'J4HzDI9YOKqquusXO')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                    this.$refs.form.reset();
                    this.params.name = '';
                    this.params.email = '';
                    this.params.message = '';
                    this.text = 'Email inviata con successo!';
                    this.snackbar = true;
                    this.color = '#7b3bb2';
                }, (error) => {
                    console.log('FAILED...', error.text);
                    this.text = 'Errore nell\'invio dell\'email';
                    this.snackbar = true;
                    this.color = 'error';
                });
                }else{
                    
                    this.text = 'Email non valida';
                    this.snackbar = true;
                    this.color = 'error';
                }
                
            }
        }
    }

}
</script>

    
        


    
        
