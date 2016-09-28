import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html',
  styles: ['.brand-logo { margin-left: 15px; }']
})
export class HeaderComponent implements OnInit, AfterViewInit  {

  constructor() { }

	ngOnInit() {
	
	}

	ngAfterViewInit() {
		$(function() {
			$(".button-collapse").sideNav();
			$(".dropdown-button").dropdown({ hover: false });
		});	
  	}

}
