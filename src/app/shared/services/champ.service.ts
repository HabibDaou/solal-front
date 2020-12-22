import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class Champservice {


    constructor(private http: HttpClient) { }


    Addchamp(champ: any): Observable<any> {

        return this.http.post<any>(
            `${APIS.CHAMPS}`,
            champ
        );
    }
    
    getAll(): Observable<any> {
        return this.http.get<any[]>(`${APIS.C}`);
    }

    edit(champ: any, id: any): Observable<any> {
        return this.http.put<any>(`${APIS.CHAMPS}/${id}`, champ);
    }

    getchampByid(id: number): Observable<any> {
        return this.http.get<any[]>(`${APIS.CHAMPS}/${id}`);
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${APIS.CHAMPS}/${id}`);
    }


}

