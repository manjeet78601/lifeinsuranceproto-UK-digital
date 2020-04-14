import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

export class SchedularCustomDirective extends Validators {

   static fromDateValidator(fdValue: FormControl) {
    const date = fdValue.value;
    console.log('x');
<<<<<<< HEAD:src/app/pages/medical-exam/schedule-doctor-visit/schedular.validator.ts
    if (date ===null || date==='') return { requiredFromDate: true };
   }
=======
    if (date === null || date === '') { return { requiredFromDate: true }; }

  }
>>>>>>> deb35ca03ab7c8bc05e4ab254be1d053bf2d9b9e:src/app/pages/medical-test/book-lab/schedular.validator.ts

   static ToDateValidator(todValue: FormControl) {
    const date = todValue.value;

    if (date === null || date === '') { return { requiredToDate: true }; }

  }

// Not working
  static timeValidator(formGroupValues: FormGroup): any {
    console.log(formGroupValues);
    const FromDate = formGroupValues.get('FromDate').value;
    const ToDate = formGroupValues.get('ToDate').value;
    const FromTime = formGroupValues.get('FromTime').value;
    const ToTime = formGroupValues.get('ToTime').value;

    if (FromDate.toString() === ToDate.toString()) {
      let fromTime = [];
      let toTime = [];
      fromTime = FromTime.split(':');
      toTime = ToTime.split(':');
      if (parseInt(fromTime[0]) > parseInt(toTime[0])) {
      alert('condition satisfied not return any error message');
      return { InValidToTime: true };
        } else if (
        parseInt(fromTime[0]) === parseInt(toTime[0]) &&
        parseInt(fromTime[1]) > parseInt(toTime[1])
      ) {  alert('condition satisfied not return any error message');
          return { InValidToTime: true };
      }
    }
  }
}
