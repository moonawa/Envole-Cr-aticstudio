import { Casting } from "../casting/casting.model";
import { User } from "../user/user.model";

export class Colaborateur {
    id?: any;
    adresse_colaborateur?: string;
    description_colaborateur?: string;
    user?: User;
    castings?: Casting[];
}
