import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Tareas';
  empleados= [
    {'name': 'Fernando', cargo: 'manager', email:'fmoya97@gmail.com'},
    {'name': 'Juan', cargo: 'designer', email:'hola@gmail.com'},
    {'name': 'Carlos', cargo: 'programmer', email:'Code@gmail.com'}
  ];

  model: any = {}; //datos temporales
  model2: any = {};
  addEmpleado(): void{
    this.empleados.push(this.model);
  }

  deleteEmpleado(): void{

  }
  indice;
  editEmpleado(i): void{
    this.model2.name= this.empleados[i].name;
    this.model2.cargo= this.empleados[i].cargo;
    this.model2.email=this.empleados[i].email;
    this.indice=i;
  }

  updateEmpleado(): void{
    console.log(this.model2);
  }

}
