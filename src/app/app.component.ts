import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App-Tareas';
  empleados= [
    {'name': 'Fernando', cargo: 'manager'},
    {'name': 'Juan', cargo: 'designer'},
    {'name': 'Carlos', cargo: 'programmer'}
  ];

  model: any = {}; //datos temporales
  addEmpleado(): void{
    this.empleados.push(this.model);
  }

  deleteEmpleado(): void{

  }

  editEmpleado(): void{

  }

  updateEmpleado(): void{

  }

}
