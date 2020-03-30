import { AbstractControl } from '@angular/forms';
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        const password = AC.get('signupPwd').value;
        if (AC.get('signupconfirmPwd').touched || AC.get('signupconfirmPwd').dirty) {
            const verifyPassword = AC.get('signupconfirmPwd').value;

            if (password !== verifyPassword) {
                AC.get('signupconfirmPwd').setErrors( {MatchPassword: true} );
            } else {
                return null;
            }
        }
    }
}
