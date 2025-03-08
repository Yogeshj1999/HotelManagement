import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailvalidatorDirective,
    multi: true
  }],
})
export class EmailvalidatorDirective implements Validator{

  constructor() { }
  validate(control: AbstractControl): ValidationErrors | null {
    const values = control.value as string; 
    if(values.includes('test')){
      return { 'emailvalidator': true }
    }
    return null;
  }

}
