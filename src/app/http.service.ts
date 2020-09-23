import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';
import { Observable,throwError } from 'rxjs';
var serverUrl = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  //get enrollees list
  getEnrollees(){
    return this.http.get(serverUrl + 'enrollees').pipe(
      map(this.extractResult),
      catchError(this.errorHandler)
    );
  }
  //get enrolle details by Id
  getEnrolleById(Id){
    console.log("id",Id);
    return this.http.get(serverUrl + 'enrollees/'+Id).pipe(
      map(this.extractResult),
      catchError(this.errorHandler)
    );
  }
  //update enrollee
  updateEnrollee(obj,Id){
    return this.http.put(serverUrl+ 'enrollees/'+Id,obj).pipe(
      map(this.extractResult),
      catchError(this.errorHandler)
    );
  }
  extractResult(res : Response){
    const response = res;
    return response;
  }
  errorHandler(err:HttpErrorResponse){
    if(err.error instanceof ErrorEvent){
      return throwError(err.error.message);
    }
    else{
      return throwError(err.error.error);
    }
  }
}
