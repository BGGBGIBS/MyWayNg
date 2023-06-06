export class Education {
    education_id?: number;
    education_institution!: string;
    education_degree!: string;
    education_fieldOfStudy!: string;
    education_startYear!: string;
    education_endYear!: string;
    education_location!: string;
    education_description!: string;
    education_type!: string;
    education_isExpanded?: boolean;  
  }

  export interface EducationsArray {
    results : Education[];
    count : number;
    statusCode : number;
}