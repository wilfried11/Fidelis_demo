import { Component, Input } from '@angular/core';
import { CdkStepper } from '@angular/cdk/stepper';

@Component({
  selector: 'my_stepper',
  templateUrl: './my_stepper.component.html',
  styleUrls: ['./my_stepper.component.scss'],
  providers: [{ provide: CdkStepper, useExisting: MyStepperComponent }]
})
export class MyStepperComponent extends CdkStepper{
 
  @Input()
  activeClass = 'active';

  isNextButtonHidden() {
    return !(this.steps.length === this.selectedIndex + 1);
  }
}
