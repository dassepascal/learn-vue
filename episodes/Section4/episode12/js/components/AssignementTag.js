export default {
    template: `
    <div class=" flex gap-2">
    <button
        @click="$emit('change',tag) "
        v-for="tag in tags"
        class="border px-1 py-px rounded text-xs"
        :class="{'bg-blue-600 text-white': currentTag === tag}"
        >{{ tag }}
    </button>
</div>
`
    ,

props: {
    initialTags: Array,    
    currentTag: String,
},

data() {
    return {
        currentTag: 'all',
    }
},


    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
            }

    },

}