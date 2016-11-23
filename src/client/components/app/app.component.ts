/**
 * Created by kaloczidavid on 2016. 10. 08..
 */

import {Component, ViewEncapsulation} from '@angular/core';
import {Hero} from '../../interfaces/hero.interface';
import {Http} from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.template.html',
  styleUrls: ['./app.style.css', '../../public/styles.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	heroList: Array<Hero> = [];

	constructor (private http: Http) {
		// load heroes
		this.http
			.get('hero')
            .map(res => res.json())
            .subscribe( (result) => {
            	this.heroList = result.data || []; 
            });
	}
	

}
