<script>
import ApiMixin from '../api.js'
export default {
    mixins: [ApiMixin],
    data () {
        return {
            productList: []
        }
    },
    async mounted() {
        // this.productList = await this.$callAPI("https://")
        console.log('[ Mounted ]')
    }
}
</script>