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
            assignements: [
                // {
                //     name: 'Finish project',
                //     complete: false,
                //     id: 1,
                //     tag:'math'
                // },
                // {
                //     name: 'Read chapter 4',
                //     complete: false,
                //     id: 2,
                //     tag:'science'
                // },
                // {
                //     name: 'Turn in homework',
                //     complete: true,
                //     id: 3,
                //     tag: 'math'
                // }
    
            ],
            //newAssignement: ''
        }
    },
    computed: {
       
        filters() {
            return {
                inProgress: this.assignements.filter(assignement => !assignement.complete),
                complete: this.assignements.filter(assignement => assignement.complete),

            }
        }

    },
    created() {
        
      
        fetch('http://localhost:3001/assignements')
            .then(response => response.json())
           
            .then(assignements => {
                this.assignements = assignements;

            })
    },


    methods: {
        add(name) {
            this.assignements.push({
                name: name,
                complete: false,
                id: this.assignements.length + 1
            });

            this.newAssignement = '';



        }
    }


}

