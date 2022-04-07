export class Card {
    showDescription:boolean
    constructor(public id:number, public title:string, public description:string, public upVote:number, public downVote:number){
        this.showDescription=false;
    }
}

