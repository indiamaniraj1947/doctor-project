import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { StaticText } from 'src/app/constants/staticText';
import { ConstVal } from 'src/app/languages/constants';
import { CrudService } from 'src/app/services/crud.service';
import { MessageService } from 'primeng/api';

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
    private crudService: CrudService,
    private messageService: MessageService
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
      commands: [''],
    });
  }
  CreateRecord() {
    let x = Math.random() * 100;
    const now = new Date();
    let dateString = now.toISOString();
    let dateSplit: String[] = dateString.split('T');
    console.log();
    let record = {
      createdOn: {
        system: '10.1.12.' + Math.trunc(x),
        date: dateSplit[0],
        time: dateSplit[1].substring(0, dateSplit[1].length - 5),
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
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Feedback Added successfully',
        });
      })
      .catch((error: any) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'error',
        });
      });
  }
  onSubmit() {
    console.log('feedBackForm===>', this.feedBackForm.value);
    this.CreateRecord();
  }
  onClear() {
    this.clearForm();
  }
  clearForm() {
    this.feedBackForm.patchValue({
      ques1Control: '',
      ques2Control: '',
      ques3Control: '',
      ques4Control: '',
      ques5Control: '',
      ques6Control: '',
      ques7Control: '',
      ques8Control: '',
      ques9Control: '',
      ques10Control: '',
    });
  }
}
