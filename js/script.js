const { createApp } = Vue

    createApp({
        data() {
            return {
                randomicEmail: '',
                emailList : [],
            }
        },
        methods : {
            //Creo una funzione che attraverso axios e l'API di boolean genera un'email casuale e la 'pusha' in un array inizialmente vuoto
            getRandomEmail(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                        this.randomicEmail = response.data.response;
                        this.emailList.push(this.randomicEmail);
                })
            },
        },
        created(){
        }
}).mount('#app')