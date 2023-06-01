export interface Institution {
    institution_id: number;
    institution_name: string;
    institution_address: string;
    institution_city: string;
    institution_country: string;
    institution_website?: string;
    institution_phone?: string;
    institution_email?: string;
  }
  

  export interface InstitutionArray {
    results : Institution[];
    count : number;
    statusCode : number;
}