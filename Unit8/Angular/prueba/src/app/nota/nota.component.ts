import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {
  titulo="dato de mi componente notaaa vacilon ;)";
  fecha = new Date();
  nombres = ["jose","pepe"];
  nuevoUsuario = "";
  constructor() { }

  alta(){
    this.nombres.push(this.nuevoUsuario)
  }

  ngOnInit(): void {
  }

}
