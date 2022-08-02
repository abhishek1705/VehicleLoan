import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmp } from './iemp';
import { ILD } from './ild';
import { Iloanscheme } from './iloanscheme';
import { IVeh } from './iveh';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  url='http://localhost:57134/api/applyloan/'
  httpOptions = {headers:new HttpHeaders({'Content-type':'application/json'})};

  constructor(private httpclient:HttpClient) { }  //injecting httpclient
  
  addEmp(emp:IEmp): Observable<IEmp>{
    return this.httpclient.post<IEmp>(this.url+"AddEmp",emp,this.httpOptions).pipe(catchError(this.handleError))
  }

  addLD(loan:ILD): Observable<ILD>{
    return this.httpclient.post<ILD>(this.url+"AddLD",loan,this.httpOptions).pipe(catchError(this.handleError))
  }

  AddVehicle(veh:IVeh): Observable<IVeh>{
    return this.httpclient.post<IVeh>(this.url+"AddVehicle",veh,this.httpOptions).pipe(catchError(this.handleError))
  }

  AddLoanScheme(scheme:Iloanscheme):Observable<Iloanscheme>{
    return this.httpclient.post<Iloanscheme>(this.url+ "LoanScheme",scheme,this.httpOptions).pipe(catchError(this.handleError))
  }


  handleError(error:HttpErrorResponse){
    let errorMessage='';
    errorMessage=error.status + '\n' + error.statusText + '\n' + error.error;
    alert(errorMessage);
    return throwError(errorMessage);
  }

}
