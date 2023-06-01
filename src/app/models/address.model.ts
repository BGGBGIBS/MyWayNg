export interface Address {
    address_id: number;
    address_street?: string;
    address_number?: number;
    address_box?: number;
    address_city?: string;
    address_postalcode?: number;
  }
  
export interface AddressArray {
    results : Address[];
    count : number;
    statusCode : number;
}