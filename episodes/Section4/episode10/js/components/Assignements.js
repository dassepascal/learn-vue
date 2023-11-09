import AssignementList from "./AssignementList.js";

export default {
    components: { AssignementList },
    template: `
    <section class="space-y-6">
    <assignement-list :assignements="filters.inProgress" title="In Progress"></assignement-list>
<assignement-list :assignements="filters.complete" title="Completed"></assignement-list>


<form @submit.prevent="add">
<div class="border border-gray-600 text-black">
<input v-model="newAssignement" placeholder="New assignement... " class="p-2"/>
<button type="submit" class="bg-white p-2 border-l ">Add</button>
</div>
 
</form>
    </section>
    

    `,
    data() {
        return {
            assignements: [{
                name: 'Finish project',
                complete: false,
                id: 1,
                tag:'math'
            },
            {
                name: 'Read chapter 4',
                complete: false,
                id: 2,
                tag:'science'
            },
            {
                name: 'Turn in homework',
                complete: false,
                id: 3,
                tag: 'math'
            }

            ],
            newAssignement: ''
        }
    },
        computed: {
            // inProgress() {
            //     return this.assignements.filter(assignement => !assignement.complete)
            // },
            // complete() {
            //     return this.assignements.filter(assignement => assignement.complete);
            // },
            filters(){
                return {
                    inProgress: this.assignements.filter(assignement => !assignement.complete),
                    complete: this.assignements.filter(assignement => assignement.complete),

                }
            }

        },

        methods: {
            add(){
                this.assignements.push({
                    name: this.newAssignement,
                    complete: false,
                    id: this.assignements.length + 1
                });

                this.newAssignement = '';
                
                
                
            }
        }


    }

