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
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }
    
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
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

  inserirUsuario(f: NgForm) {
    let user = f.value.user;
    let email = f.value.email;
    let pass = f.value.pass;
    let fullname = f.value.fullname;

    if (user.trim() == "" && email.trim() == "" && pass.trim() == "" && fullname.trim() == "") {
      user = '';
      email = '';
      pass = '';
      fullname = '';
      (<HTMLInputElement>document.getElementById("user")).style.borderColor = "red";
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = "red";
      (<HTMLInputElement>document.getElementById("pass")).style.borderColor = "red";
      (<HTMLInputElement>document.getElementById("fullname")).style.borderColor = "red";


    }else if (user.trim() == "") {
      user = '';
      
       (<HTMLInputElement>document.getElementById("user")).style.borderColor = "red";
       var valorCampoPass = (<HTMLInputElement>document.getElementById("pass")).value = '';
       var valorCampoEmail = (<HTMLInputElement>document.getElementById("email")).value = '';
       var valorCampoFullname = (<HTMLInputElement>document.getElementById("fullname")).value = '';
      return console.log('Usuário inválido');
    }
    else if (email.trim() == "") {
      email = '';
     
      (<HTMLInputElement>document.getElementById("email")).style.borderColor = "red";
      var valorCampoUsuario = (<HTMLInputElement>document.getElementById("user")).value = '';
      var valorCampoPass = (<HTMLInputElement>document.getElementById("pass")).value = '';
      var valorCampoFullname = (<HTMLInputElement>document.getElementById("fullname")).value = '';
      return console.log('Email inválido');
    }
    else if (pass.trim() == "") {
      pass = '';
     
      (<HTMLInputElement>document.getElementById("pass")).style.borderColor = "red";
      var valorCampoUsuario = (<HTMLInputElement>document.getElementById("user")).value = '';
      var valorCampoPass = (<HTMLInputElement>document.getElementById("pass")).value = '';
      var valorCampoEmail = (<HTMLInputElement>document.getElementById("email")).value = '';
      var valorCampoFullname = (<HTMLInputElement>document.getElementById("fullname")).value = '';
      return console.log('Senha inválida');
    }
    else if (fullname.trim() == "") {
      fullname = '';
      (<HTMLInputElement>document.getElementById("fullname")).style.borderColor = "red";
      var valorCampoUsuario = (<HTMLInputElement>document.getElementById("user")).value = '';
      var valorCampoPass = (<HTMLInputElement>document.getElementById("pass")).value = '';
      var valorCampoEmail = (<HTMLInputElement>document.getElementById("email")).value = '';
      return console.log('Nome completo inválido');
    }
    else {

      let json = `{"name":"${user}","email":"${email}","full_name":"${fullname}","pass":"${pass}"}`

      console.log(json);
      this.userService.postUser(json);
      (<HTMLInputElement>document.getElementById("alerta")).style.display = 'block';
      f.value.email = '';
      f.value.user = '';
      f.value.pass = '';
      f.value.fullname = '';
    }
  }


  apagarCampos() {
    var valorCampoUsuario = (<HTMLInputElement>document.getElementById("user")).value = '';
    var valorCampoPass = (<HTMLInputElement>document.getElementById("pass")).value = '';
    var valorCampoEmail = (<HTMLInputElement>document.getElementById("email")).value = '';
    var valorCampoFullname = (<HTMLInputElement>document.getElementById("fullname")).value = '';
  }

  login: String
  nomeUsuario(event: any) {
    this.login = event.target.value;
  }
  pegarLogin() {
    let nome = this.login;
    console.log(`login: ${nome}`)


    if (nome.trim() == "") {
      console.log('error');
    } else if (!!nome) {
      let validado = this.userService.get1UserData(nome);

    }
    var valorCampoUsuario = (<HTMLInputElement>document.getElementById("usuario")).value = '';
  }
}
