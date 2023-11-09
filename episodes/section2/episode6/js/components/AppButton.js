export default {

    template: `
    <button
         :class="{
            ' text-white font-bold py-2 px-4 rounded disabled:cursor-not-allowed' :true,
            'bg-blue-600 hover:bg-blue-700':type==='primary',
            'bg-purple-200 hover:bg-blue-700':type==='secondary',
            'bg-gray-200 hover:bg-blue-700':type==='muted',
            'is-loading': processing
         }"
         :disabled="processing"
         >

        <slot/>
    </button>
 `,

    props: {
        type:{
            type:String,
            default:"primary"
        },
        processing:{
            type:Boolean,
            
            default:false
          }
        
       
        
    },

  

}