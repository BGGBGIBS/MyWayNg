export interface AresInstitution {
  type_d_etablissement: string;
  actif: boolean;
  ndegfase_etablissement: string;
  nom_usuel_etablissement: string;
  nom_court_etablissement: string;
  adresse_etablissement: string;
  complement_adresse_etablissement: string;
  code_postal_etablissement: string;
  localite_etablissement: string;
  commune_etablissement: string;
  bassin_etablissement: string;
  arrondissement_administratif_etablissement: string;
  arrondissement_judiciaire_etablissement: string;
  province_etablissement: string;
  region_etablissement: string;
  latitude_etablissement: number;
  longitude_etablissement: number;
  url_du_site_web: string;
  nom_du_po_usuel: string;
  forme_juridique: string;
  organe_de_representation: string;
  reseau_officiel_libre: boolean;
  reseau_subventionne_organise: boolean;
  type_organisateur: string;
  communaute: string;
  caractere_confessionnel: boolean;
  date_ouverture_etablissement: string;
  date_fermeture_etablissement: string;
  point_geographique: {
    lon: number;
    lat: number;
  };
}

export interface AresInstitutionArray {
  results: AresInstitution[];
  count: number;
  statusCode: number;
}

export type SortType = 'type_d_etablissement' | 'actif' | 'nom_usuel_etablissement' | 'nom_court_etablissement' | 'adresse_etablissement' | 'code_postal_etablissement' | 'localite_etablissement' | 'region_etablissement' | 'url_du_site_web' | 'nom_du_po_usuel' | 'organe_de_representation' | 'reseau_officiel_libre' | 'reseau_subventionne_organise' | 'type_organisateur' | 'communaute' | 'caractere_confessionnel';
