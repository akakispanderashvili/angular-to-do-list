import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Difficulty, ToDo } from 'src/app/types';

@Component({
  selector: 'app-to-do-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './to-do-form.component.html',
  styleUrls: ['./to-do-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToDoFormComponent {
  @Output() toDoAdded = new EventEmitter<ToDo>();

  form: FormGroup;
  difficulties: string[];

  constructor() {
    this.form = this._initForm();
    this.difficulties = this._getDifficulties();
  }

  onFormSubmit(): void {
    if (this.form.valid) this.toDoAdded.emit(this.form.value);
  }

  private _initForm(): FormGroup {
    return new FormGroup({
      name: new FormControl('Task', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      difficulty: new FormControl('', [Validators.required]),
    });
  }

  private _getDifficulties(): string[] {
    const difficulty = Difficulty;
    var keys = Object.keys(difficulty);
    return keys;
  }
}
