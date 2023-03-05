import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { HttpCallService } from 'src/app/services/http-call.service';

@Component({
  selector: 'app-option-form',
  templateUrl: './option-form.component.html',
  styleUrls: ['./option-form.component.scss'],
})
export class OptionFormComponent implements OnInit {
  constructor(
    private httpCallService: HttpCallService,
    private httpClient: HttpClient
  ) {}
  @Input() formFillData: any[] = [];
  questions: any[] = [];
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
      });
  }
}
