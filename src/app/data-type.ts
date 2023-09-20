export interface login{
    email:string,
    password : string
}


export interface signUp{
    email:string,
    password : string,
    name:string
}

export interface products{
    name:string,
    price:number,
    color:string,
    category:string,
    description:string,
    image:string,
    title:string,
    rating:object
    id:string

}