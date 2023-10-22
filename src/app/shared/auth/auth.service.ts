import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    userUrl = 'https://pokedex-8e1a6-default-rtdb.firebaseio.com/Users/'
    json = '.json'
    userData: any;
    currentUser = {};
    formElement: any;
    
    constructor(
        private http: HttpClient,
        private storage: StorageService,
        private router: Router,
    ) { }
    
    reqUser(): Observable<any> {
        return this.http.get<any>(`${this.userUrl}${this.json}`)
    }

    authenticate(user: any) {
        let promise = new Promise((resolve, reject) => {
            this.http.get(`${this.userUrl}${this.json}`).subscribe({
                next: (res: any) => {
                    this.userData = Object.keys(res);
                    this.userData.forEach((key: any) => {
                        if (res[key].username == user.username && res[key].password == user.password) {
                            this.currentUser = {
                                ...user,
                                isValid: !user.isValid
                            }
                            this.storage.saveData('username', res[key].username);
                            this.storage.saveData('uuid', res[key].uuid);
                            this.storage.saveData('isLoggedIn', `${!user.isValid}`);
                            this.storage.saveData('theme', 'light');
                            resolve(this.startAuth())
                        } else if (res[key].username != user.username) {
                            this.formElement.form.controls['username'].setErrors({incorrect: true})
                            reject(this.endAuth())
                        } else if (res[key].password != user.password) {
                            this.formElement.form.controls['password'].setErrors({incorrect: true})
                            reject(this.endAuth())
                        }
                    })
                },
                error: (error: any) => {
                    reject(error)
                }
            })
        })
        return promise
    }
    
    startAuth() {
        this.router.navigate(['/home']);
        return this.storage.getData('isLoggedIn')
    }
    
    endAuth() {
        return false
    }
}