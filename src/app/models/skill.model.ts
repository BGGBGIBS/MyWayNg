export class Skill {
  skill_id!: number;
  skill_name!: string;
  skill_level!: string;
}


export interface SkillArray {
  results : Skill[];
  count : number;
  statusCode : number;
}