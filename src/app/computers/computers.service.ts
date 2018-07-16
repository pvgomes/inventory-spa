import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ComputersService {
    constructor(private http: Http) {}
    storeComputers(computers: any[]) {
        return this.http.post('local', computers);
    }

    getComputers() {
        return this.http.get('local');
    }
}
