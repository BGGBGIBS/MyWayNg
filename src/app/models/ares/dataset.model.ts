interface AresAttachment {
    id: string;
    url: string;
  }
  
export interface AresDataset {
    dataset_id: string;
    urls: AresAttachment[];
}
export interface AresDatasetArray {
  results: AresDataset[];
  count: number;
  statusCode: number;
}
  