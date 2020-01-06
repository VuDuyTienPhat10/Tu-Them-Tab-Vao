import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username:string="";
  password:string="";
  cpassword:string="";
  constructor(public afAuth:AngularFireAuth) { }

  ngOnInit() {
  }
  async register(){
    if(this.password!==this.cpassword){
      return console.error("passwords don't match")
    }

    try {
      const res=await this.afAuth.auth.createUserWithEmailAndPassword(this.username+'@codedamm.com',this.password);
      console.log(res);
      
    } catch (error) {
      console.dir(error)
    }
  }
}
