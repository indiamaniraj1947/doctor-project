import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { StaticText } from 'src/app/constants/staticText';
import { ConstVal } from 'src/app/languages/constants';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {
  defVal = ConstVal.defStr;
  feedBackForm = this.feedBackFormGroup();
  feedbackText = StaticText.feedback;

  constructor(
    private formBuilder: FormBuilder,
    private crudService: CrudService
  ) {}
  ngOnInit(): void {}
  feedBackFormGroup() {
    return this.formBuilder.group({
      ques1Control: [''],
      ques2Control: [''],
      ques3Control: [''],
      ques4Control: [''],
      ques5Control: [''],
      ques6Control: [''],
      ques7Control: [''],
      ques8Control: [''],
      ques9Control: [''],
      ques10Control: [''],
    });
  }
  CreateRecord() {
    let record = {
      createdOn: {
        system: '10.1.12.93',
        date: '18/03/2023',
        time: '12:00:00 PM',
      },
      feebackValue: [
        {
          question: this.feedbackText.questions.question1,
          answer: this.feedBackForm.value.ques1Control,
        },
        {
          question: this.feedbackText.questions.question2,
          answer: this.feedBackForm.value.ques2Control,
        },
        {
          question: this.feedbackText.questions.question3,
          answer: this.feedBackForm.value.ques3Control,
        },
        {
          question: this.feedbackText.questions.question5,
          answer: this.feedBackForm.value.ques5Control,
        },
        {
          question: this.feedbackText.questions.question6,
          answer: this.feedBackForm.value.ques6Control,
        },
        {
          question: this.feedbackText.questions.question7,
          answer: this.feedBackForm.value.ques7Control,
        },
        {
          question: this.feedbackText.questions.question8,
          answer: this.feedBackForm.value.ques8Control,
        },
        {
          question: this.feedbackText.questions.question9,
          answer: this.feedBackForm.value.ques9Control,
        },
        {
          question: this.feedbackText.questions.question10,
          answer: this.feedBackForm.value.ques10Control,
        },
      ],
    };

    this.crudService
      .createNewFeedback(record)
      .then((resp: any) => {
        console.log('resp===>', resp);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  onSubmit() {
    console.log('feedBackForm===>', this.feedBackForm.value);
    this.CreateRecord();
  }
}
