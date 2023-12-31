import AssignementList from "./AssignementList.js";
import AssignementCreate from "./AssignementCreate.js";

export default {
    components: { AssignementList, AssignementCreate },
    template: `
    <section class="space-y-6">
    <assignement-list :assignements="filters.inProgress" title="In Progress"></assignement-list>
    <assignement-list :assignements="filters.complete" title="Completed"></assignement-list>


    <assignement-create @add="add"></assignement-create>
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

