export interface DongAItem{
  type: string;
  imageurl: string;
  muatienmat: string;
  muack:string;
  bantienmat: string;
  banck: string;
}

export interface DongABankData{
  items: Array<DongAItem>
}
