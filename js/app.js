const app = new Vue({
    el: '#app',

    data: function(){
        return {
            employeeList: [
                {firstName: 'John', lastName: 'Smith', position: 'Manager', email: 'john.smith@wctc.com', status: true},
                {firstName: 'Mary', lastName: 'Wolf', position: 'Director', email: 'mary.wolf@wctc.com', status: true},
                {firstName: 'Luke', lastName: 'Fox', position: 'President', email: 'luke.fox@wctc.com', status: true}
            ],
        }
    },

    methods:{
        addEmployee: function(newEmployee){
            this.employeeList.push(employeeList);
        },

        removeIt(item){
            this.employeeList.splice(this.employeeList.indexOf(item), 1);
        },

    },

    computed : {
        activeList: function(){
            return this.employeeList.filter(function (item){
                return item.status;
            });
        },
    },

    mounted: function() {
        if (localStorage.getItem('employeeList')){
            this.employeeList = JSON.parse(localStorage.getItem('employeeList'));
        }
    },

    watch: {
        employeeList: {

            handler(newList){
                localStorage.setItem('employeeList', JSON.stringify(newList))
            },

            deep: true,
        }
    }


});

