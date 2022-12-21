import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Articulo } from '../Modelos/articulo';


@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {
@Input() articulo!:Articulo;
@Output() borraDesdeHijo=new EventEmitter<String>();

borrarArticulo(id:String){
  this.borraDesdeHijo.emit(id);
}
}
