import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { APIS } from "app/config";
import { Observable } from 'rxjs';

@Injectable({ providedIn: "root" })
export class Entrepriseservice {

    constructor(private http: HttpClient) { }
    Addchamp(champ: any): Observable<any> {

        return this.http.post<any>(
            `${APIS.ENTREPRISE}`,
            champ
        );
    }
    getAll(): Observable<any> {
        return this.http.get<any[]>(`${APIS.ENTREPRISE}`);
    }

    edit(entreprise: any, id: any): Observable<any> {
        return this.http.put<any>(`${APIS.ENTREPRISE}/${id}`, entreprise);
    }

    getentrepriseByid(id: number): Observable<any> {
        return this.http.get<any[]>(`${APIS.ENTREPRISE}/${id}`);
    }

    delete(id: any): Observable<any> {
        return this.http.delete(`${APIS.ENTREPRISE}/${id}`);
    }


}

