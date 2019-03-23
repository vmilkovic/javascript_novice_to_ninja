'use strict'
const form = document.forms[0];
const controller = {
	watch(form){
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			this.add(form.name.value);
		}, false);
	},
	add(name){
		const item = new Item(name)
		view.render(item);
	}
}
const view = {
	render(item){
		const list = document.getElementById('list');
		const li   = document.createElement('li');
		li.innerHTML = item.name;
		list.appendChild(li);
		form.name.value = '';
	}
}
class Item {
	constructor(name){
		this.name = name;
	}
}
controller.watch(form)