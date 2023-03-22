export interface ITime{
  updated: string;
  updatedISO: string;
  updateduk: string
}

export interface IBpi{
  code:string;
  sympol: string;
  rate: string;
  description	: string;
  rate_float: number
}

export interface IBpis{
  USD: IBpi;
  GBP: IBpi;
  EUR: IBpi;
}

export interface IBitcoin{
  time: Array<ITime>;
  disclaimer: string;
  chartName: string;
  bpi: IBpis;
}
