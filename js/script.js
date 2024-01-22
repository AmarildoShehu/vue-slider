// collegamento js
console.log('js ok');
// collegamento Vue js
console.log('Vue ok', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'vueCarousel',
    data: () => ({
        pictures,
        currentIndex: 0
    })
})

app.mount('#root');