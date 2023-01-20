import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { ToDo, List } from 'src/app/types';
import { ToDoComponent } from '../to-do/to-do.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, ToDoComponent],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoListComponent implements OnInit {
  @Input() toDos!: ToDo[];
  @Input() listType!: List;

  @Output() toDoNext = new EventEmitter<ToDo>();
  @Output() toDoPrevious = new EventEmitter<ToDo>();

  constructor() {}

  ngOnInit(): void {}

  onToDoNext(toDo: ToDo) {
    this.toDoNext.emit(toDo);
  }

  onToDoPrevious(toDo: ToDo) {
    this.toDoPrevious.emit(toDo);
  }
}
