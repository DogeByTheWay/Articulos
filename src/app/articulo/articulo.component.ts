import { Component } from '@angular/core';
import { Articulo } from '../Modelos/articulo';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent {

  articulos:Array<any>=[{
    'id':'m1',
    'nombre':'Galaxy A32', 
    'descripcion':'4GB + 128GB libre',
    'precio':229
    },
    {
    'id':'m2',
    'nombre':'Oppo A94',
    'descripcion':'8GB + 128GB libre',
    'precio':269,
    },
    {
    'id':'m3',
    'nombre':'Galaxy S22',
    'descripcion':'5G Amoled libre',
    'precio':859
    },
    {
    'id':'m4',
    'nombre':'Apple iPhone', 
    'descripcion':'14 Pro móvil libre',
    'precio':339
    },
    {
    'id':'m5',
    'nombre':'Galaxy Z Flip4',
    'descripcion':'5G móvil libre',
    'precio':1990
    },
    {
    'id':'m6',
    'nombre':'Note 11', 
    'descripcion':'6GB + 128GB',
    'precio':300
    },
    {
    'id':'m7',
    'nombre':'Realme 9', 
    'descripcion':'8GB + 128GB',
    'precio':300
    },
    {
    'id':'p1',
    'nombre':'Asus Zen', 
    'descripcion':'i5 16Gb SSD',
    'precio':900
    },
    {
    'id':'p2',
    'nombre':'HP Pavillion', 
    'descripcion':'SSD Windows 11',
    'precio':750
    },
    {
    'id':'p3',
    'nombre':'MacBook', 
    'descripcion':'MacOs 13,3"',
    'precio':1115
    },
    {
    'id':'t1',
    'nombre':'Xiaomi P1E', 
    'descripcion':'Android 9 HDR10',
    'precio':300
    },
    {
    'id':'t2',
    'nombre':'Toshiba 55UAG', 
    'descripcion':'Android UHD 4K',
    'precio':450
    },
    {
    'id':'t3',
    'nombre':'Samsung UE305', 
    'descripcion':'Full HD, HDR',
    'precio':350
    },
  ]
  nombre:String="Pepita Perez";

  articulo:Articulo=this.articulos[3];

  botonActivo:boolean=false;
  mensaje(){
    return "Hola a todos...";
  }
  constructor(){
    console.log("Se ejecuta constructor");
  }

  ngOnInit(){
    console.log("Se ejecuta la carga")

    setTimeout(()=>{alert("cambiadondo estado boton...");
    this.botonActivo=true;
    },5000)
  }

  cambiaEstado(){
    if(this.botonActivo==true){
      this.botonActivo=false;
    }else{
      this.botonActivo=true;
    }
  }
  cambiaArticulo(){
    this.articulo=this.articulos[6];
  }
  verEvent(event:Event){
    console.log(event);
  }
  comprar(id:String){
    let articulo=this.articulos.find(a => a.id==id);
    console.log(articulo)
  }
}
