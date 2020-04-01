new Vue({
    el:'#desafio',
    data:{
        nome:'Yan',
        idade: 21,
        link:"https://i.pinimg.com/564x/d7/06/8a/d7068a7805591209021b827a75962f5e.jpg"
    },
    methods:{
        idadeX3: function(){
            return this.idade * 3;
        },
        numeroRandom: function(){
            return( Math.random().toFixed(0));
        }
    }
});