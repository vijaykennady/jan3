import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoEntity } from '../to-do-entity';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private toSer: ToDoService, private route: Router, private active: ActivatedRoute) { }

  toDoEn: ToDoEntity = new ToDoEntity();
  id: number;

  toD = new FormGroup({
    id: new FormControl(),
    task: new FormControl()
  });

  ngOnInit(): void {
    this.id = this.active.snapshot.params['id'];
    console.log(this.id);
    this.gets();
  }

  updateDetails() {
    this.toDoEn.id = this.toD.controls.id.value;
    this.toDoEn.work = this.toD.controls.task.value;

    this.toSer.putTo(this.toDoEn.id, this.toDoEn).subscribe((res) => {
      console.log(res);
      this.toDoEn = res;
      this.goToList();
    });
  }

  gets() {
    this.toSer.getById(this.id).subscribe((res) => {
      console.log(res);
      this.toDoEn = res;

      this.toD.setValue({
        id: res.id,
        task: res.work
      });
    });
  }

  goToList() {
    this.route.navigate(['list']);
  }

  list() {
    this.route.navigate(['list']);
  }

}
