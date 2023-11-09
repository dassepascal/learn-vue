export default {
    template: `
    <div class=" flex gap-2">
    <button
        @click="$emit('update:modelValue',tag) "
        v-for="tag in tags"
        class="border px-1 py-px rounded text-xs"
        :class="{'border-blue-600 text-blue-500': tag === modelValue}"
        >{{ tag }}
    </button>
</div>
`
    ,

    props: {
        initialTags: Array,
        modelValue: String,
    },

    // data() {
    //     return {
    //         currentTag: 'all',
    //     }
    // },


    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }

    },

}