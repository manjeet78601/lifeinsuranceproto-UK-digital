export class Signup {
    firstName: string;
    userName: string;
    password: string;
    zipCode: number | string;
    birthDate: string;
    constructor(fName: string = '', uName: string = '', pwd: string = '', code: string = '', bDate: string) {
        this.firstName = fName;
        this.userName = uName;
        this.password = pwd;
        this.zipCode = code;
        this.birthDate = bDate;
    }
}
export class Signin {
    userName: string;
    password: string;
    constructor(uName: string = '', pwd: string = '') {
        this.userName = uName;
        this.password = pwd;
    }
}
