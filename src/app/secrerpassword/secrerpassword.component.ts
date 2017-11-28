import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secrerpassword',
  templateUrl: './secrerpassword.component.html',
  styleUrls: ['./secrerpassword.component.css']
})
export class SecrerpasswordComponent implements OnInit {
	visibleParagraph = true;
	arrayTimes = [];
	times = 0;

	constructor() { 

	}
	onChangeParagraphVisible(){
		this.visibleParagraph = !this.visibleParagraph;
		this.arrayTimes.push(this.times++);
	}
	ngOnInit() {
	}

}
