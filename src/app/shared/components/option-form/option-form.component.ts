import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { HttpCallService } from 'src/app/services/http-call.service';

@Component({
  selector: 'app-option-form',
  templateUrl: './option-form.component.html',
  styleUrls: ['./option-form.component.scss'],
})
export class OptionFormComponent implements OnInit {
  constructor(
    private httpCallService: HttpCallService,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}
  @Input() formFillData: any[] = [];
  questions: any[] = [];
  optionForm = this.optionFormGroup();
  ngOnInit(): void {
    // this.httpCallService.getQuestions().subscribe((ques: any) => {
    //   this.questions = ques;
    // });
    // console.log('this.questions', this.questions);
    this.httpClient
      .get('../../assets/jsonFiles/questions.json')
      .subscribe((ques: any) => {
        this.questions = ques.questionSet;
        console.log('this.questions', this.questions);

        this.getFormArrayControls();
      });
  }
  optionFormGroup() {
    return this.formBuilder.group({
      singleControl: this.formBuilder.array([]),
      // multiControl: this.formBuilder.array([]),
    });
  }
  getFormArrayControls() {
    debugger;
    let questionArray = <FormArray>this.optionForm.get('singleControl');
    this.questions.forEach((ques: any) => {
      questionArray.push(new FormGroup({ [ques.id]: new FormArray([]) }));
      ques.options.forEach(() => {
        questionArray.push(new FormControl());
      });
    });
    console.log('questionArray', questionArray);
    console.log('optionForm', this.optionForm);
  }
  onSubmit() {
    console.log('optionForm==>', this.optionForm);
  }
}
