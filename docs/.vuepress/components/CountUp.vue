<<template>
    <div>
        <ClientOnly>
            <slot name='before'></slot>
            <span ref='countup'></span>
        </ClientOnly>
    </div>
</template>

<script>

export default {
    name: 'CountUp',
    props: {
        startVal: {
            type: Number,
            default: 0
        },
        endVal: {
            type: Number,
            required: true
        },
        decimalPlaces: {
            type: Number,
            default: 0
        },
        duration: {
           type: Number,
            default: 2
        },
        delay: {
            type: Number,
            default: 0
        }
    },
    data(){
        return {
            counter: null
        }
    },
    methods: {
       init(){
           import('countUp.js').then((module)=>{
               console.log('====',module)
               this.counter = new module.CountUp(this.$refs['countup'],this.endVal,{
                   startVal: this.startVal,
                   decimalPlaces: this.decimalPlaces,
                   duration: this.duration
               })
               setTimeout(() => {
                   this.counter.start();
               }, this.delay);
           })
        } 
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        this.counter.reset();
         this.counter = null;
    },
}
</script>