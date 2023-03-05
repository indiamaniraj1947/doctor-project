import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpCallService {
  constructor(private httpClient: HttpClient) {}
  getQuestions() {
    this.httpClient
      .get('../../assets/jsonFiles/questions.json')
      .subscribe((ques: any) => {
        console.log('ques', ques);
      });
    return this.httpClient.get('../../assets/jsonFiles/questions.json');
  }
}
