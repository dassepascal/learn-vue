import Assignement from './Assignement.js';
import AssignementTag from './AssignementTag.js';
export default {
    components: { Assignement, AssignementTag},

    template: `
    <section v-show="assignements.length" class="mb-4">
        <h2 class="font-bold mb-2 ">
            {{title}}
            <span>{{ assignements.length }}</span>
           
        </h2>

        <assignement-tag
        v-model:currentTag ="currentTag"
         :initial-tags="assignements.map(a => a.tag)"
         
       
         /> 

        <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
            <assignement 
                v-for="assignement in filteredAssignements" 
                :key="assignement.id"
                :assignement="assignement"
                >
            </assignement>
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
        
    },
  
}