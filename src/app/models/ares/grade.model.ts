export interface AresGrade {
  // code_etudes: string;
  // intitule_des_etudes_titre_delivre_a_l_issue_des_etudes: string;
  // type_d_etablissement: string;
  // cycle: string;
  // domaine_paysage: string;
  // code_grade_academique: string;
  // grade_academique: string;
  // type_finalite: string;
  // finalite: string;
  // orientation: string;
  // titre_delivre_a_l_issue_des_etudes: string;

  code_etudes: string;
  intitule_des_etudes: string;
  type_d_enseignement: string;
  cycle: string;
  forme_d_etudes: string;
  domaine_paysage: string;
  code_grade_academique: string;
  intitule_des_grades_academiques_dont_intitule_de_la_finalite: string;
  finalite: string;
  titre_delivre_a_l_issue_des_etudes: string;

}

export interface AresGradeArray {
  results: AresGrade[];
  count: number;
  statusCode: number;
}

export type SortType = 'code_etudes' | 'intitule_des_etudes' | 'type_d_enseignement' | 'cycle' | 'forme_d_etudes' |'domaine_paysage' | 'code_grade_academique' | 'intitule_des_grades_academiques_dont_intitule_de_la_finalite' | 'finalite' | 'titre_delivre_a_l_issue_des_etudes';
