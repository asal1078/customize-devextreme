import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { ApiService } from 'src/app/share/service/api.service';
import { NotificationService } from 'src/app/share/service/notification.service';
import { LoginModel } from './model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading = false;


  loginModel : LoginModel = new LoginModel();
  disableSubmitButton : boolean = true;
  isUsernameInvalid = true;
  isPasswordInvalid = true;

  userNameInput = {
    placeholder : 'نام کاربری',
    minLen : '6',
    maxLen : '32',
    required  : true
  }

  PasswordInput = {
    placeholder : 'رمز عبور',
    minLen : '6',
    maxLen : '32',
    required : true
  }


  constructor( private service : ApiService , private notifyService : NotificationService , private router: Router, ) { }

  ngOnInit(): void {
  }

  checkUserName(){
    if(this.loginModel.username.length > 6 && this.loginModel.username.length < 32 && this.loginModel.username != "" && this.loginModel.username != null) {
      this.isUsernameInvalid = false;
    }
  }

  checkPassword(){
    if(this.loginModel.password.length > 6 && this.loginModel.password.length < 32 && this.loginModel.password != "" && this.loginModel.password != null) {
      this.disableSubmitButton = false;
    }
  }


  login(){
    if(this.loginModel.username.length < 6 || this.loginModel.username.length > 32 ){
      this.notifyService.showError("طول نام کاربری صحیح نیست", "خطا در وارد کردن اطلاعات")
    }
    else if(this.loginModel.password.length < 6 || this.loginModel.password.length > 32){
      this.notifyService.showError("طول رمز عبور صحیح نیست", "خطا در وارد کردن اطلاعات")
    }
    else if(this.loginModel.username == "" || this.loginModel.username == null){
      this.notifyService.showError("نام کاربری الزامی است", "خطا در وارد کردن اطلاعات")
    }
    else if(this.loginModel.password == "" || this.loginModel.password == null){
      this.notifyService.showError("کلمه عبوذ الزامی است", "خطا در وارد کردن اطلاعات")
    }
    else {
      this.loading = true;
      this.router.navigate(['panel']);  //به خاطر ارور سرور در داخل سابسکرایب قرار نگرفته
      this.service.post(this.loginModel , "https://demo2.rrr.co.ir/newpanels/?controller=data").subscribe(
        (data)=> {
          console.log('success');
          this.loading = false;
        },
        (error)=> {
          console.log(error);
          this.loading = false;
        }
        )
    }
    }

    showToasterError(){
      return this.notifyService.showError("Something is wrong", "tutsmake.com")
  }

}
