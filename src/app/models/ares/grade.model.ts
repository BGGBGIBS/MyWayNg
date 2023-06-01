export interface AresGrade {
  code_etudes: string;
  intitule_des_etudes_titre_delivre_a_l_issue_des_etudes: string;
  type_d_etablissement: string;
  cycle: string;
  domaine_paysage: string;
  code_grade_academique: string;
  grade_academique: string;
  type_finalite: string;
  finalite: string;
  orientation: string;
  titre_delivre_a_l_issue_des_etudes: string;
}

export interface AresGradeArray {
  results: AresGrade[];
  count: number;
  statusCode: number;
}

export type SortType = 'grade_academique' | 'type_finalite' | 'cycle' | 'type_d_etablissement' | 'domaine_paysage';
