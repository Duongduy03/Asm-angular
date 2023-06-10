import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, switchMap } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}
  signup(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, user);
  }
  signin(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, user);
  }
  getUsers(): Observable<IUser> {
    return this.http.get<any>(`${this.apiUrl}/users`).pipe(
      switchMap((response) => {
        console.log(response);

        return of(response);
      })
    );
  }
  updateUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/users/update/${user._id}`;
    // console.log(url);

    return this.http.patch<any>(url, user);
  }
  logout() {
    localStorage.clear();
  }
  deleteUser(id: string): Observable<any> {
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.delete<any>(url);
  }
  getUser(id: string): Observable<any> {
    const url = `${this.apiUrl}/users/${id}`;
    // console.log(url);

    return this.http.get<any>(url);
  }
  isAuthenticated(): any {
    return JSON.parse(localStorage.getItem('credential')!) || {};
  }
}
