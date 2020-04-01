new Vue({
	el: '#desafio',
	data: {
		classe1:'destaque',
		class3: '',
		class4: 'perigo',
		perigo: true,
		cor: '',
		altura: 0,
		largura: 0,
		width: '0'
	},
	computed: {
		estiloArray() {
			return {
			backgroundColor: `dodgerblue`,
			width: `150px`,
			fontSize: `20px`,
			color: `#fff`
		}
	}
},
	methods: {
	iniciarEfeito() {
		setInterval(() => {
			this.classe1 = this.classe1 == 'destaque' 
			? 'encolher' : 'destaque'
		}, 2000);
	},
	iniciarProgresso() {
		let valor = 0
		const temporizador = setInterval(() => {
			valor += 5
			this.width = `${valor}%`
			if(valor == 100) clearInterval(temporizador)
		}, 500);
	},
	setPerigo(event){
		if(event.target.value =='true'){
			this.perigo = true;
		}else if(event.target.value == 'false'){
			this.perigo = false;
		}
	}
}
})
