// collegamento js
console.log('js ok');
// collegamento Vue js
console.log('Vue ok', Vue);

const { createApp } = Vue;

const app = createApp({
    name: 'vueCarousel',
    data: () => ({
        pictures,
        currentIndex: 0,
        interval: null,
        autoplay: null
    }),
    computed: {
        lastElementsIndex() {
            return this.pictures.length - 1;
        },
        isFirstIndex() {
            return this.currentIndex === 0;
        },
        isLastIndex() {
            return this.currentIndex === this.lastElementsIndex;
        }
    },
    methods: {
        setCurrentIndex(location) {
            if (location === 'next') {
                if (this.isLastIndex) this.currentIndex = 0;
                else this.currentIndex++;
            } else if (location  === 'prev') {
                if (this.isFirstIndex) this.currentIndex = this.lastElementsIndex;
                else this.currentIndex--;
            } else {
                this.currentIndex = location;
            }    
        },
        stopAutoplay() {
            clearInterval(this.autoplay)
        },
        startAutoplay() {
            this.autoplay = setInterval(() => {
                this.setCurrentIndex('next')
            }, 3000);
        }
    },
    mounted() {
        this.startAutoplay();
    }
})

app.mount('#root');