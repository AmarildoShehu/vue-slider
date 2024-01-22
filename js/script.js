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
    }),
    computed: {
        lastElementsIndex() {
            return this.pictures.lenght - 1;
        },
        isFirstIndex() {
            return this.currentIndex === 0;
        },
        isLastIndex() {
            return this.currentIndex === this.lastElementsIndex;
        }
    },
    methods: {
        goToPrev(){
            if(this.isFirstIndex) this.currentIndex = this.lastElementsIndex;
            else this.currentIndex--;
        },
        goToNext() {
            if(this.isLastIndex) this.currentIndex = 0;
            else this.currentIndex++;
        } 
    }
})

app.mount('#root');