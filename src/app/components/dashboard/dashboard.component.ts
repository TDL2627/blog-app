import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpService } from 'src/app/services/http.service';
import { Users } from 'src/app/services/Users';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Users: any =[]

  constructor(private httpService: HttpService, public afAuth: AngularFireAuth) { }

  ngOnInit(): void {

    this.httpService.GetUsers().subscribe(res => {
      console.log(res);
      this.Users = res;
      
    })

  }

  logout(): void {
    this.afAuth.signOut();
  }
}
