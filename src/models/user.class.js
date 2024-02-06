import { Roles } from './roles.enum';

export class User  {
    userName='';
    email='';
    password='';
    roles=Roles.USER

    constructor (userName, email,password,roles){
        this.userName=userName;
        this.email=email;
        this.password=password;
        this.roles=roles
    }
}


