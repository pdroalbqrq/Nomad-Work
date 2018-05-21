import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // user: String = '';
  // email: String = '';
  // pass: String = '';
  // fullname: String = '';



  constructor(public userService: UserService) {

  }

  ngOnInit() {

  }

//  pegarTextoUser(event: any) {
//     this.user = event.target.value;
//     console.log(event.target.value);
//   }
//   pegarTextoEmail(event: any) {
//     this.email = event.target.value;
//     console.log(event.target.value);
//   }
//   pegarTextoPass(event: any) {
//     this.pass = event.target.value;
//     console.log(event.target.value);
//   }
//   pegarTextoFullname(event: any) {
//     this.fullname = event.target.value;
//     console.log(event.target.value);
//   }

 // insertUserData(){
  //  this.userService.postUser(this.user,this.email,this.fullname,this.pass);
   // this.userService.getallUserData();
 // }
  // irPraBaixo(){
  //   window.scroll({
  //     top: 900, 
  //     left: 0, 
  //     behavior: 'smooth' 
  //   });
  // }

  inserirUsuario(f:NgForm){
  let user  = f.value.user;
  let email = f.value.email;
  let pass  = f.value.pass;
  let fullname = f.value.fullname;
  

  // if(user.trim() == "" || !!user){
  //   return console.error();
  // } else{
   
  // }
  // if(user.trim() == "" || !!email){
  //   return console.error();
  // }
  // if(user.trim() == "" || !!pass){
  //   return console.error();
  // }
  // if(user.trim() == "" || !!fullname){
  //   return console.error();
  // }

  let json = `{"name":"${user}","email":"${email}","full_name":"${fullname}","pass":"${pass}"}`
    
    console.log(json);
    this.userService.postUser(json);
    (<HTMLInputElement>document.getElementById("alerta")).style.display = 'block';
  }


  apagarCampos(){
    var valorCampoUsuario = (<HTMLInputElement>document.getElementById("user")).value = '';
    var valorCampoUsuario = (<HTMLInputElement>document.getElementById("pass")).value = '';
    var valorCampoUsuario = (<HTMLInputElement>document.getElementById("email")).value = '';
    var valorCampoUsuario = (<HTMLInputElement>document.getElementById("fullname")).value = '';
   }

  login: String
  nomeUsuario(event: any){
    this.login = event.target.value;
  }
  pegarLogin(){
    let nome = this.login;
    console.log(`login: ${nome}`)

  if(nome.trim() == ""){
    console.log('error');
  } else  if(!!nome){
    let validado = this.userService.get1UserData(nome);
  }   
   

    var valorCampoUsuario = (<HTMLInputElement>document.getElementById("usuario")).value = '';  
  }
}
