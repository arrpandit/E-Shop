export interface signup{
    name:string,
    email:string
    password:string
}

export interface login{
    email:string,
    password:string
}

export interface products{
    name:string,
    price:number,
    category : string,
    code:string,
    description:string,
    image:string,
    id:number
}