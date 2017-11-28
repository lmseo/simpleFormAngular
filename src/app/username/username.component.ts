import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
	username = '';
  	userButtonStatus = false;
  	servers = ['server 1', 'server 2'];
	i = 3;



	constructor() { 
		if(this.username === ""){
			this.userButtonStatus = true;
		} else {
			this.userButtonStatus = false;
		}
	}

	onUsernameChange(newValue) {
		if(newValue === ""){
			this.userButtonStatus = true;
		} else {
			this.userButtonStatus = false;
		}
	}

	onButtonReset(event){
		this.username = "";
		this.userButtonStatus = true;
		this.servers.push('server ' + this.i++);
	}
	getColor(){
		return this.userButtonStatus === false ? 'green' : 'blue';
	}
	ngOnInit() {
	}

}
