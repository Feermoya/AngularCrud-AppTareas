import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-tareas';
  empleados= [
    {'name': 'Fernando', posicion: 'manager'},
    {'name': 'Juan', posicion: 'designer'},
    {'name': 'Carlos', posicion: 'programmer'}
  ];

  model: any = {}; //datos temporales
  addEmpleado(): void{

  }

  deleteEmpleado(): void{

  }

  editEmpleado(): void{

  }

  updateEmpleado(): void{

  }

}
