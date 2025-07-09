export class Query {
    id!: string;
    name!: string;
    startDate!: number;
    endDate!: number;
    status!: string;
    domain!: string;

    constructor() {
        this.id = '';
    }
}
