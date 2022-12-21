const { createApp } = Vue

    createApp({
        data() {
            return {
                randomicEmail: ''
            }
        },
        methods : {
            getRandomEmail(){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then( (response) => {
                    this.randomicEmail = response.data.response;
                })
            }
        },
        created(){
            this.getRandomEmail();
            console.log(this.randomicEmail);
        }
}).mount('#app')