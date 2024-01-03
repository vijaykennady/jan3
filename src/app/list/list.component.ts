import { Component, Input, OnInit } from '@angular/core';
import { ToDoService } from '../to-do.service';
import { Router } from '@angular/router';
import { ToDoEntity } from '../to-do-entity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  constructor(private toDos: ToDoService, private route: Router) { }

  getAllDetails: ToDoEntity[] = [];

  delToDo: ToDoEntity = new ToDoEntity();

  id: number;

  getsAll() {
    this.toDos.getAll().subscribe((res) => {
      this.getAllDetails = res;
      console.log(this.getAllDetails);
    });
  }

  ngOnInit(): void {
    this.getsAll();
  }

  goEdit(id: number) {
    this.route.navigate(["update", id]);
  }

  deleteDetails(id: number) {
    this.toDos.deleteTo(id).subscribe((res) => {
      this.delToDo = res;
      console.log(res);
      this.getsAll();
    });
  }

  home(){
    this.route.navigate(['']);
  }

  // goDel(id: number) {
  //   this.route.navigate([""]);
  // }

  // @Input('li') taskList: String[] = [];

  // details: any;

  // update(data: any,index:number) {
  //   console.log(data,index);
  // }
}
