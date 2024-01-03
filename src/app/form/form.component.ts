import { Component } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDoEntity } from '../to-do-entity';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private tser: ToDoService, private route: Router) { }

  todoNew: ToDoEntity = new ToDoEntity();

  todoDetails = new FormGroup({
    works: new FormControl()
  });

  inputDetails() {
    this.todoNew.work = (String)(this.todoDetails.controls.works.value);

    this.tser.postToDo(this.todoNew).subscribe((response) => {
      this.todoNew = response;
      console.log(this.todoNew);
    });
    this.goToList();
  }


  goToList() {
    this.route.navigate(['list']);
  }

  all(){
    this.route.navigate(['list']);
  }
  // taskDetails: String[] = [];

  // task = '';

  // getTask() {
  //   this.taskDetails.push(this.task);
  //   this.task = "";
  // }

}
