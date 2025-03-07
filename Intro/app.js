const { createApp, ref } = Vue;

const app = createApp({
template: `
<h1>{{nuntius}} </h1>
<h2> {{auctor}} </h2>
`, 

setup(){

    const nuntius = ref("I'm Batman");

    const auctor = ref('Batman');

    //setTimeout(() => {
    //   nuntius.value = 'Soy Goku';
    // auctor.value = 'Goku';
    // console.log(nuntius);
    // }, 1000);

    const mutareSententia = () => {
        nuntius.value = 'Hola, soy Goku';
        auctor.value ='Goku'
    }

    return{
        nuntius,
        auctor,
        mutareSententia,
    }
}

});



app.mount('#myApp');