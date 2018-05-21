import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  constructor() {
    
  }
 
  ngOnInit() {
  
  }


  toggled = false;
   toggleNav(){
 if(!this.toggled){
   this.toggled = true;
    document.getElementById("navlado").style.width = "250px";
    document.getElementById("navlado").style.background = "rgba(255, 255, 255, 0.912)"; 
    document.getElementById("navlado").style.border = "1px solid rgb(0, 195, 255)"; 
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    
    document.getElementById("a").style.color = "rgb(0, 195, 255)";
    document.getElementById("b").style.color = "rgb(0, 195, 255)";
    document.getElementById("c").style.color = "rgb(0, 195, 255)";
    document.getElementById("d").style.color = "rgb(0, 195, 255)";
    return }

 if(this.toggled){
  this.toggled = false;
  document.getElementById("navlado").style.width = "0px";
  document.getElementById("navlado").style.background = "transparent";
  document.getElementById("navlado").style.border = "0px"; 
  document.body.style.backgroundColor = "white";
  
  document.getElementById("a").style.color = "transparent";
  document.getElementById("b").style.color = "transparent";
  document.getElementById("c").style.color = "transparent";
  document.getElementById("d").style.color = "transparent";
  return;
 }


}
  abrirNav() {
   document.getElementById("navlado").style.width = "250px";
   document.getElementById("navlado").style.background = "rgb(0, 189, 247)";

  }
  fecharNav(){
    document.getElementById("navlado").style.width = "0px";
    document.getElementById("navlado").style.background = "transparent";
  }

}
