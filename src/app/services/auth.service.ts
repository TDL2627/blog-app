import { AnimationDriver } from '@angular/animations/browser';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore'
import { Router } from '@angular/router';
import { User } from '../user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    serverUrl = environment.serverUrl;
    usersUrl = environment.usersUrl
    userLoggedIn: boolean;      // other components can check on this variable for the login status of the user

    constructor(private router: Router, private afAuth: AngularFireAuth, private http: HttpClient, private afs: AngularFirestore) {
        this.userLoggedIn = false;

        this.afAuth.onAuthStateChanged((user: any) => {              // set up a subscription to always know the login status of the user
            if (user) {
                this.userLoggedIn = true;
            } else {
                this.userLoggedIn = false;
            }
        });
    }

    loginUser(data: User): Promise<any> {
        return this.afAuth.signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                console.log('Auth Service: loginUser: success');
                // this.router.navigate(['/dashboard']);
            })
            .catch(error => {
                console.log('Auth Service: login error...');
                console.log('error code', error.code);
                console.log('error', error);
                if (error.code)
                    return { isValid: false, message: error.message };
                return
            });
    }
    signupUser(user: any): Promise<any> {
        return this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then((result) => {
                this.afs.doc('users/' + user.email)                        // on a successful signup, create a document in 'users' collection with the new user's info
                    .set({
                        accountType: 'Blogger',
                        Firstname: user.firstName,
                        Lastname: user.lastName,
                        Profession: user.profession,
                        Gender: user.inlineRadioOptions,
                        Email: user.email
                        // inspired: user.inspired
                        // email_lower: emailLower
                    });
                    result.user!.sendEmailVerification();                    // immediately send the user a verification email
            })
            .catch(error => {
                console.log('Auth Service: signup error', error);
                if (error.code)
                    return { isValid: false, message: error.message };
                return
            });
    }


    addUser(newUser: User): Observable<User> {
      const url = this.serverUrl + '/register';
      return this.http.post<User>(url, newUser, httpOptions)
    }


    resetPassword(email: string): Promise<any> {
        return this.afAuth.sendPasswordResetEmail(email)
            .then(() => {
                console.log('Auth Service: reset password success');
                // this.router.navigate(['/amount']);
            })
            .catch(error => {
                console.log('Auth Service: reset password error...');
                console.log(error.code);
                console.log(error)
                if (error.code)
                    return error;
            });
    }

// loging out a user
    logoutUser(): Promise<void> {
        return this.afAuth.signOut().then(() => {
                this.router.navigate(['/login']);                    // when we log the user out, navigate them to home
            })
            .catch(error => {
                console.log('Auth Service: logout error...');
                console.log('error code', error.code);
                console.log('error', error);
                if (error.code)
                    return error;
            });
    }

    // get function

  
    getAllUsers(): Observable<any> {
      return this.http.get(this.usersUrl);
    }
  

}
function password(email: any, password: any) {
  throw new Error('Function not implemented.');
}

