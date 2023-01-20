import { Difficulty } from '../enums/difficulty.enum';

export interface ToDo {
  id: number;
  name: string;
  difficulty: Difficulty;
}
