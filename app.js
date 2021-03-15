new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data:{
        uid:'',
        pwd:''
    },
    methods: {
        login:function(){
            alert(this.uid);
            alert(this.pwd);
        }
    }
})