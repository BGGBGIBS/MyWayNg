export interface AresDomaine {
    domaine_paysage: string;
}
export interface AresDomainePaysage{
    code_interne_domaine_paysage: number;
    numero_domaine_decret: string;
    domaine_paysage: string;
    secteur_paysage: string;
    date_modification: Date | null;
    explication_modification: string | null;
    actif: string;
}

export interface AresDomaineArray {
    results: AresDomaine[];
    count: number;
    statusCode: number;
}

export type SortType = 'code_interne_domaine_paysage' | 'numero_domaine_decret' | 'domaine_paysage' | 'secteur_paysage' | 'date_modification' | 'explication_modification' | 'actif';
