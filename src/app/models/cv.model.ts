import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { Skill } from "./skill.model";

export interface Cv {
  record_id: string;
  user: {
    user_firstname: string;
    user_lastname: string;
    user_email: string;
  };
  event: {
    event_begin: string;
    event_end: string;
    occupation: {
      occupation_name: string;
      occupation_description: string;
    };
    institution: {
      institution_name: string;
      institution_type: string;
      institution_address: string;
    };
  };
  grade: {
    grade_name: string;
    grade_value: number;
    scale: {
      scale_min: number;
      scale_max: number;
    };
  };
}



export interface CvArray {
  results : Cv[];
  count : number;
  statusCode : number;
}