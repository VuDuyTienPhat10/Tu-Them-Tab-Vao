import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = ""
	password: string = ""
  constructor(private afAuth:AngularFireAuth) { }

  ngOnInit() {
  }
  async login(){
    // const {username,password}=this;
    try {
      const res=await this.afAuth.auth.signInWithEmailAndPassword(this.username+'@codedamm.com',this.password)
    } catch (err) {
      console.dir(err);
      if(err.code=="auth/user-not-found"){
        alert('User not found')
      }
    }
    
  }

}
