import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
@Injectable({
		providedIn: 'root'
	})
export class VolunteerService {

	pager: any = {
		sort: 1,
		method: 'ASC',
		page: 1,
		size: 20,
		// filters: {}
		// 	'1': 'adapostire',
		// 	'3': 'bihor',
		// 	'5': 'crucea'
		// }
	};

	getPager() {
		return {...this.pager};
	}
	constructor(private httpClient: HttpClient) {}

	/**
	 * post a new Volunteer to website, auto add Header
	 */
	addVolunteer(payload: any) {
		return this.httpClient.post('/volunteers', payload );
	}
	/**
	 * get all Volunteers
	 */
	getVolunteers(paginationObj?: any): Observable<any> {
		let params = {};
		params = {...params, ...paginationObj};
		return this.httpClient.get('/volunteers', { params: params });
	}
	/**
	 * get Volunteer by id
	 */
	getVolunteer(id: String): Observable<any> {
		return this.httpClient.get(`/volunteers/${id}` );
	}
	// getResourcesbyOrganization(id: String): Observable<any> {
		// const header = {
		// 	headers: new HttpHeaders()
		// 	.set('Authorization',  `Bearer ${this.accessToken}`)
		// };
		// return this.httpClient.get(`/organisations/${id}` );
	// }
}