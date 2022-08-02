import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Iregistration } from './iregistration';
import { throwError } from 'rxjs';
import { Iuserlogin } from './iuserlogin';
import { Iadmin } from './iadmin';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = 'http://localhost:57134/api/applicant/';
  httpOptions = {headers:new HttpHeaders({'Content-type':'application/json'})};

  constructor(private httpclient:HttpClient) { }

  addApplicant(register:Iregistration):Observable<Iregistration>{
    return this.httpclient.post<Iregistration>(this.url + "AddApplicants",register,this.httpOptions).pipe(catchError(this.handleError))
  }

  userLogin(user:Iuserlogin):Observable<Iuserlogin>{
    return this.httpclient.post<Iuserlogin>(this.url + "UserLogin",user,this.httpOptions).pipe(catchError(this.handleError))
  }

  userAdmin(admin:Iadmin):Observable<Iadmin>{
    return this.httpclient.post<Iadmin>(this.url + "AdminLogin",admin,this.httpOptions).pipe(catchError(this.handleError))
  }

  

  



   handleError(error:HttpErrorResponse){
     let errorMessage='';
     errorMessage=error.status + '\n' + error.statusText + '\n' + error.error;
     alert(errorMessage);
     return throwError(errorMessage);
  }


}
