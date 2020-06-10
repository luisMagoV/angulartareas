import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-task';
  msg:string = '';
  employees = [
    {'name': 'fazt', position: 'manager', email: 'email@gmail.com'},
    {'name': 'juan', position: 'devops', email: 'email@gmail.com'},
    {'name': 'pedro', position: 'designer', email: 'email@gmail.com'}];
    

    model:any = {};
    model2:any = {};
    hideUpdate:boolean = true;
  
    addEmployee():void{
      this.employees.push(this.model);
      this.msg = 'campo agregado';
    }
  
    deleteEmployee(i):void {
      var answer = confirm('Estas seguro querer eliminarlo?');
      if(answer) {
        this.employees.splice(i, 1);
        this.msg = 'campo eliminado';
      }
    }
  
    myValue;
    editEmployee(i):void {
      this.hideUpdate = false;
      this.model2.name = this.employees[i].name;
      this.model2.position = this.employees[i].position;
      this.model2.email = this.employees[i].email;
      this.myValue = i;
    }
  
    updateEmployee():void {
      let i = this.myValue;
      for(let j = 0; j < this.employees.length; j++){
        if(i == j) {
          this.employees[i] = this.model2;
          this.msg = 'campo actualizado';
          this.model2 = {};
        }
      }
    }
  
    closeAlert():void {
      this.msg = '';
    }
}
