Vue.component('Myheader',{

    // props: {
    //     name: {
    //         type: String,
    //         required: true,
    //     },

    //     items: {
    //         type: Array,
    //         required: true,
    //     },

    // },

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


Vue.component('MyForm',{

    data(){
        return {
            newEmployee: {
                firstName: '',
                lastName: '',
                position: '',
                email: '',
                status: true,
            },
        }
    },

    props: {
        addMethodEmployee: {
            type: Function,
            required: true,
        }

    },

    methods: {
        addEmployee(newEmployee){
            this.addEmployee('addMethodEmployee')
        },
    },

    template: ` 
    
    <form class="container bg-light text-dark my-3 py-3 rounded">
    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="firstName">First name</label>
        <input type="text" class="form-control" id="firstName" v-model="newEmployee.firstName" >
        <div class="valid-feedback">
            Looks good!
          </div>
      </div>
      <div class="col-md-6 mb-3">
        <label for="lastName">Last name</label>
        <input type="text" class="form-control" id="lastName" v-model="newEmployee.lastName" >
      </div>
    </div>
    <div class="form-row">
      <div class="col-md-4 mb-3">
        <label for="position">Position</label>
        <input type="text" class="form-control" id="position" v-model="newEmployee.position" >
      </div>
      <div class="col-md-4 mb-3">
        <label for="email">Email</label>
        <input type="text" class="form-control" id="email" v-model="newEmployee.email" >
      </div>
      <div class="col-md-4 mb-3">
        <label for="status">Status</label>
        <select class="custom-select" id="status" v-model="newEmployee.status" >
          <option selected disabled value="">Choose...</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>
    </div>
    <button class="btn btn-primary" type="submit" @click.prevent="addEmployee" >Submit form</button>
</form>
    
    
    
    `,

});