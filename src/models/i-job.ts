export interface Ijob{
    Title:string;
    MustHave: string;
    Description:string;
    CompanyName?:string;
    Owner?:string
    Industry?: string[];
}