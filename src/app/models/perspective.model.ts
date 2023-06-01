export interface Perspective {
    perspective_id: number;
    perspective_name: string;
  }
  

  export interface PerspectiveArray {
    results : Perspective[];
    count : number;
    statusCode : number;
}