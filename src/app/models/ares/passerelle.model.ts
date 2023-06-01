export interface AresPasserelle {
  code_etudes_bachelier: string;
  intitule_des_etudes_bachelier: string;
  code_etudes_master : string;
  intitule_des_etudes_master : string;
  credits_ects_min : string ;
  credits_ects_max : string ;
}

export interface AresPasserelleArray {
  results: AresPasserelle[];
  count: number;
  statusCode: number;
}
export type SortType = 'code_etudes_bachelier' | 'intitule_des_etudes_bachelier' | 'code_etudes_master' | 'intitule_des_etudes_master' | 'credits_ects_min' | 'credits_ects_max';

