import { Address } from './address.model';

export class User {
    public id: number;
    public name: string;
    public username: string;
    public email: string;
    public address: Address = new Address();

    constructor() {

    }
}
