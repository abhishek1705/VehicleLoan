import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IApplicationDetailed } from './iapplication-detailed';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = "http://localhost:57134/api/user/";
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) };

  constructor(private httpclient:HttpClient) { }

  getUser(id:string):Observable<any> {
    return this.httpclient.get<any>(this.url + 'ApplicantDetails/' + id).pipe(catchError(this.handleError));
  }

  getApplicationDetailed(id:number):Observable<IApplicationDetailed> {
    return this.httpclient.get<IApplicationDetailed>(this.url + 'ApplicationDetailed/' + id).pipe(catchError(this.handleError));
  }

  

  getApplyLoanValidation(id:number):Observable<any> {
    return this.httpclient.get<any>(this.url + 'ApplyLoanValidation/' + id).pipe(catchError(this.handleError));
  }

  getApplicationStatusValidation(id:number):Observable<any> {
    return this.httpclient.get<any>(this.url + 'ApplicationStatusValidation/' + id).pipe(catchError(this.handleError));
  }




  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
