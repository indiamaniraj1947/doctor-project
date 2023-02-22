import { Component, OnInit } from '@angular/core';
import { ConstVal } from 'src/app/languages/constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  defConst: string = ConstVal.defStr;
  constructor() {}
  ngOnInit(): void {}
}
