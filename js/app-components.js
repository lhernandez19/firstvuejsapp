Vue.component('Myheader',{

    props: {
        name: {
            type: String,
            required: true,
        },

        items: {
            type: Array,
            required: true,
        },

    },

    template: ` <nav class="navbar navbar-light bg-light justify-content-around">
                    <a class="navbar-brand">Employee List</a>
                </nav> `,
}),


Vue.component('Listcontainer',{
    props: {
        name: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },

    },

    methods: {
    },

    computed: {
    },

    template: ` <div class="container bg-light text-dark my-3 py-3 rounded">
                    <h2>{{name}}: {{items.length}}</h2>
                    <div class="d-flex justify-content-start flex-wrap">
                        <listemployee v-for="item in items"
                            :item="item" 
                            :key="item.name"
                            @remove-item="$emit('remove-item', item)"
                        ></listemployee>
                    </div>
                    
                </div> `,   
});

Vue.component('Listemployee',{
    data: function (){
        return {
            id: Math.floor(Math.random() * 10e16),
        };
    },

    props: {
        item: {
            type: Object,
            required: true,
        }

    },

    methods: {
        removeIt(item){
            this.$emit('remove-item')
        },
        
    },

    computed: {
    },

    template: ` <div class="d-flex align-content-around flex-wrap"  >
                    <div class="rounded p-3 m-3 shadow">
                        
                        <img class="mx-auto d-block mb-3" src="avatar.png"> </img>
                        <h5>Name: {{item.firstName}} {{item.lastName}}</h5>
                        <h6>Position: {{item.position}}</h6>
                        <p>Email: {{item.email}}</p>
                        <button type="button" class="btn btn-danger" @click="removeIt"><i class="fas fa-trash-alt"></i></button>
                    </div>
                </div> `,   
});

Vue.component('Myfooter',{
    

    template: ` 
            <footer class="footer mt-auto py-3 bg-light fixed-bottom">
                <div class="container text-center">
                <span class="text-dark">Luis Diego Hernandez - WCTC</span>
                </div>
            </footer> 
    `,
});
