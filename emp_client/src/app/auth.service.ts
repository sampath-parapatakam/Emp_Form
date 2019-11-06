import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs'
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

export interface UserDetails{
  id: number
  username: string
  first_name:string
  last_name: string
  email: string
  password: string
  confirm_password: string
  exp: number
  iat:number
}

interface TokenResponse{
  token:string
}

export interface TokenPayload{
  id:number
  username: string
  first_name: string
  last_name: string
  email: string
  password: string
  confirm_password: string
}


@Injectable({
  providedIn: 'root'
})

export class AuthService  {
  private token:string
  private error: string

  constructor(private http: HttpClient, private router: Router) { }



  private saveToken(token:string):void{
    localStorage.setItem('userToken',token)
    this.token=token
  }

  private getToken():string{
    if(!this.token){
      this.token =localStorage.getItem('userToken')
    }
    return this.token
  }

  public getUserDetails(): UserDetails{
    const token=this.getToken()
    let payload
    if(token){
      payload=token.split('.')[1]
      payload=window.atob(payload)
      return JSON.parse(payload)
    }else{
      return null;
    }
  }

  public isLoggedIn():boolean{
    const user=this.getUserDetails()
    if(user){
      return user.exp > Date.now()/1000
    }else{
      return false
    }
  }

  public register(user:TokenPayload):Observable<any>{
    console.log('in service ')
    const base=this.http.post(`/users/register`,user)

    const request=base.pipe(
      map((data:TokenResponse)=>{
        console.log(data);
        if(data.token){
          this.saveToken(data.token)
        }
        
        return data

      })
    )
    return request
  }

  public login(user:TokenPayload):Observable<any>{
    const base=this.http.post(`/users/login`,user)

    const request=base.pipe(
      map((data:TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token)
        }
        return data
      })
    )
    return request
  }

  public logout():void{
    this.token=''
    window.localStorage.removeItem('userToken')
    this.router.navigateByUrl('/home')
  }

}
