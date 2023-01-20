import { CommonModule } from '@angular/common';
import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { List, ToDo } from '../../types';

@Component({
  selector: 'app-to-do',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoComponent implements AfterContentInit {
  @Input() toDo!: ToDo;
  @Input() listType!: string;

  @Output() toDoNext = new EventEmitter<ToDo>();
  @Output() toDoPrevious = new EventEmitter<ToDo>();

  onNextClick(): void {
    this.toDoNext.emit(this.toDo);
  }

  onPreviousClick(): void {
    this.toDoPrevious.emit(this.toDo);
  }

  ngAfterContentInit(): void {
    console.log(this.listType);
    console.log(this.ListType.TO_DO);
  }

  get ListType(): typeof List {
    return List;
  }
}
