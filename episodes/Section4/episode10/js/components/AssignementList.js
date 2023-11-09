import Assignement from './Assignement.js';
export default {
    components: { Assignement },

    template: `
    <section v-show="assignements.length" class="mb-4">
        <h2 class="font-bold mb-2 ">
            {{title}}
            <span>{{ assignements.length }}</span>
           
        </h2>

        <div class=" flex gap-2">
            <button
                @click="currentTag = tag"
                v-for="tag in tags"
                class="border px-1 py-px rounded text-xs"
                :class="{'bg-blue-600 text-white': currentTag === tag}"
                >{{ tag }}
            </button>
        </div>

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assignement 
                v-for="assignement in filteredAssignements" 
                :key="assignement.id"
                :assignement="assignement"
                ></assignement>
        </ul>

    
</section>

    `,

    props: {
        assignements : Array,
        title: String,
    },

    data() {
        return {
            currentTag: 'all',
        }
    },

    computed: {
        filteredAssignements() {
            if (this.currentTag === 'all') {
                return this.assignements;
            }
            return this.assignements.filter(a => a.tag === this.currentTag);
        },
        tags() {
            return ['all', ...new Set(this.assignements.map(a => a.tag))];
        }
    },
  
}