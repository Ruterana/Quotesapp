// export class quote {
//     id: number;
//     name: string;
//     Author:string;
//   }
export class quote {
  showAuthor: boolean;
  constructor(public id: number,public name: string,public Author: string){
    this.showAuthor=false;
  }
}