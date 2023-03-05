import { Component } from '@angular/core';
import { ConstVal } from 'src/app/languages/constants';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  defVal = ConstVal.defStr;
}
