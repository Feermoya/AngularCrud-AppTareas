import { Empleado } from './models/empleado';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Tareas';
  mensaje: string='';
  
  empleados: Empleado[]= [
    {prioridad: 'Alta', cargo: 'manager', email:'fmoya97@gmail.com'},
    {prioridad: 'Media', cargo: 'designer', email:'hola@gmail.com'},
    {prioridad: 'Baja', cargo: 'programmer', email:'Code@gmail.com'}
  ];

  model: any = {}; //datos temporales
  model2: any = {};
  ocultarUpdate: boolean=true;

  addEmpleado(): void{

    this.empleados.push(this.model);
    this.mensaje='Empleado Agregado';
  }

  deleteEmpleado(i): void{
   var respuesta= confirm('Desea eliminar ?');
    if(respuesta){
      this.empleados.splice(i,1);
    }
    this.mensaje='Empleado Eliminado';
  }
  indice;
  editEmpleado(i): void{
    this.ocultarUpdate=false;
    this.model2.prioridad= this.empleados[i].prioridad;
    this.model2.cargo= this.empleados[i].cargo;
    this.model2.email=this.empleados[i].email;
    this.indice=i;
  }

  updateEmpleado(): void{
    console.log(this.model2);
    let i= this.indice; //que me guarde el indice del arreglo
    for(let j=0; j<this.empleados.length; j++){
      if(i==j){
        this.empleados[i]= this.model2;
        this.mensaje='Empleado Actualizado';
        this.model2={}; //para limpiar el modelo 2

      }
    }

  }

  cerrarAlerta():void{
    this.mensaje='';
  }

}
