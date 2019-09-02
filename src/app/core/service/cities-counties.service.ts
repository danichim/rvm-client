import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class CitiesCountiesService {

	constructor(private http: HttpClient) {}

	getCounties(searchterm?: string, all?: boolean): Observable<any>  {
		if (all) {
			const params: any = {size: 50};
			return this.http.get('/counties', {params: params});
		}
		return this.http.get(`/counties?filters[1]=${searchterm}`);
	}

	getCitiesbyCounty(county_id: string, searchterm: string):  Observable<any>  {
		return this.http.get(`/cities?filters[1]=${county_id}&filters[2]=${searchterm}`);
	}
}
