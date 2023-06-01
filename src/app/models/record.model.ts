import { Grade } from './grade.model';
import { Skill } from './skill.model';
import { User } from './user.model';

export interface Record {
  record_id: number;
  user_id: number;
  event_id: number;
  skill_id: number;
  grade_id: number;
  user: User;
  skill: Skill;
  event: Event;
  grade: Grade;
}

export interface RecordArray {
  results: Record[];
  count: number;
  statusCode: number;
}
