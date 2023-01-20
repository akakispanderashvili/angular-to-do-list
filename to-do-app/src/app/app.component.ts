import { Component } from '@angular/core';
import { ToDo, Difficulty, List } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'to-do-app';
  toDos: ToDo[];
  inProgresses: ToDo[];
  dones: ToDo[];

  constructor() {
    this.toDos = [];
    this.inProgresses = [];
    this.dones = [];
  }

  onToDoAdd(toDo: ToDo | any): void {
    this.toDos = [...this.toDos, toDo];
  }

  onToDoNext(toDo: ToDo, listType: List): void {
    switch (listType) {
      case List.IN_PROGRESS:
        this._onInProgressNext(toDo);
        break;
      case List.TO_DO:
        this._onToDoNext(toDo);
        break;
    }
  }
  onToDoPrevious(toDo: ToDo, listType: List): void {
    switch (listType) {
      case List.IN_PROGRESS:
        this._onInProgressPrevious(toDo);
        break;
        case List.DONE:
          this._onDonePrevious(toDo);
          break;
    }
  }


  private _onToDoNext(toDo: ToDo) {
    this.toDos = [...this.toDos.filter((done) => done !== toDo)];
    this.inProgresses = [...this.inProgresses, toDo];
  }
  private _onInProgressPrevious(toDo: ToDo) {
    this.inProgresses = [
      ...this.inProgresses.filter((inProgress) => inProgress !== toDo),
    ];
    this.toDos = [...this.toDos, toDo];
  }

  private _onDonePrevious(toDo: ToDo) {
    this.inProgresses = [
      ...this.inProgresses.filter((inProgress) => inProgress !== toDo),
    ];
    this.inProgresses = [...this.toDos, toDo];
  }

  private _onInProgressNext(toDo: ToDo) {
    this.inProgresses = [
      ...this.inProgresses.filter((inProgress) => inProgress !== toDo),
    ];
    this.dones = [...this.dones, toDo];
  }

  get List(): typeof List {
    return List;
  }
}
