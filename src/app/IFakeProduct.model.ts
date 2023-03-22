export interface IFakeProductRating{
  rate:number,
  count:number
}

export interface IFakeProduct{
  id:number,
  title:string,
  price:number,
  descriptioin:string,
  category:string,
  image:string,
  rate: IFakeProductRating
}
