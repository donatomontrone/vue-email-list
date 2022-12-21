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
            //Creo una funzione che attraverso il ciclo for itera per n volte la funzione per generare e pushare una mail casuale nell'array
            getMoreEmail(n){
                for (let index = 0; index < n; index++) {
                    this.getRandomEmail();
                }
            },
        },
        created(){
            setTimeout(() => {
                this.getMoreEmail(10);
            }, 5000);

        }
}).mount('#app')