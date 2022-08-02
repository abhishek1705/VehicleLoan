import { Injectable } from '@angular/core';
import { IUserList } from './iuser-list';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError, observable, Observable, throwError } from 'rxjs';
import { IApplicants } from './iapplicants';
import { IApplicationDetailed } from './iapplication-detailed';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url = "Http://localhost:57134/api/loan/";
  httpOptions = { headers: new HttpHeaders({'Content-type':'application/json'}) };

  constructor(private httpclient:HttpClient) { }

  getApplicantDetails(): Observable<any> {
    return this.httpclient.get<any[]>(this.url + 'ApplicantDetails');
  }

  getApplicants(): Observable<any> {
    return this.httpclient.get<any[]>(this.url + 'PendingList');
  }

  getClients(): Observable<any> {
    return this.httpclient.get<any[]>(this.url + 'AcceptedList');
  }

  getRejectedList(): Observable<any> {
    return this.httpclient.get<any[]>(this.url + 'RejectedList');
  }

  approveLoan(LoanId:number):Observable<any> {
    return this.httpclient.put<any>(this.url + "approveLoan/" + LoanId, this.httpOptions);
  }
  
  rejectLoan(LoanId:number):Observable<any> {
    return this.httpclient.put<any>(this.url + "rejectLoan/" + LoanId, this.httpOptions);
  }

  getApplicationDetailed(id:number):Observable<IApplicationDetailed> {
    return this.httpclient.get<IApplicationDetailed>(this.url + 'ApplicationDetailed/' + id).pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    errorMessage = error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
