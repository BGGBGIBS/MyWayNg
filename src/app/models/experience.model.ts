export class Experience {
  experience_id!: number;
  experience_company!: string;
  experience_position!: string;
  experience_startDate!: Date;
  experience_endDate!: Date;
  experience_description!: string;
  experience_isExpanded!: boolean;
}

export interface ExperienceArray {
  results : Experience[];
  count : number;
  statusCode : number;
}