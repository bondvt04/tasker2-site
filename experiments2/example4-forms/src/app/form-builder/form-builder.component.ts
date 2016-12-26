import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup, Validators, FormControl, AbstractControl
} from '@angular/forms';


@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  productName: string; // two-way data binding
  titleVal: string;

  constructor(fb: FormBuilder) {

    this.myForm = fb.group({
      'sku': ['', Validators.required],
      'lol': ['qwer'],
      //'title': ['', this.titleValidator]
      title:   ['', Validators.compose([
        Validators.required,
        this.titleValidator
      ])],
      'productName': ['1', Validators.required] // two-way data binding
    });



    this.sku = this.myForm.controls['sku'];

    setTimeout(() => {
      this.productName = '100500';
      //(<Control>this.myForm.controls['title']).updateValue('200500')
      //(<Control>this.myForm.controls['title']).updateValue('200500')
      //this.myForm.controls['title'].patchValue('200500');
      this.titleVal = '300800';
    }, 3000);



    // window.a1 = function() {
    //   self.productName = '100500';
    // }
    //
    // window.a2 = self.myForm.controls.title;

    // interface Window { a1: any; }
    // window.a1 = window.a1 || function() {
    //   self.myForm.controls.title.value = '100500';
    //   self.productName = '100500';
    // };

    // this.sku.valueChanges.subscribe(
    //   (value: string) => {
    //     console.log('sku changed to:', value);
    //   }
    // );

    // this.myForm.valueChanges.next({'sku':10});

    this.myForm.valueChanges.subscribe(
      (form: any) => {
        console.log('form changed to:', form);
      }
    );

    // let control = new FormControl('sku', Validators.required);
  }

  titleValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
      return {invalidSku: true};
    }
  }
  //
  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

  ngOnInit() {
  }

}
