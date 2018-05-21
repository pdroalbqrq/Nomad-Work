import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-topocadastro',
  templateUrl: './topocadastro.component.html',
  styleUrls: ['./topocadastro.component.css']
})
export class TopocadastroComponent implements OnInit {
 nome: String = '';
 user: String ='';

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  pegarNomeInserir(event: any){
    this.nome = event.target.value;
  }


}
