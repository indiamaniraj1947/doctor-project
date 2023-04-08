import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-edit-feedback',
  templateUrl: './add-edit-feedback.component.html',
  styleUrls: ['./add-edit-feedback.component.scss'],
})
export class AddEditFeedbackComponent {
  title = 'webshop1';
  feedbacks: any;
  productName: string | undefined;

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.read_Products().subscribe((data: any) => {
      this.feedbacks = data.map((e: any) => {
        console.log('e==>', e);
        console.log('e.payload.doc.data()==>', e.payload.doc.data());
        return {
          //rdata: e.payload.doc.data()
          systemId: e.payload.doc.id,
          answer1: e.payload.doc.data().answer1,
          answer2: e.payload.doc.data().answer2,
          answer3: e.payload.doc.data().answer3,
          answer4: e.payload.doc.data().answer4,
          answer5: e.payload.doc.data().answer5,
          answer6: e.payload.doc.data().answer6,
          answer7: e.payload.doc.data().answer7,
          answer8: e.payload.doc.data().answer8,
          answer9: e.payload.doc.data().answer9,
        };
      });
    });
  }

  CreateRecord() {
    // //let record ={};
    // let record: { [key: string]: string } = {};
    // //record['Name'] = this.productName!;
    // record['Name'] = this.productName || '';
    // this.crudService
    //   .create_NewProduct(record)
    //   .then((resp: any) => {
    //     this.productName = '';
    //   })
    //   .catch((error: any) => {
    //     console.log(error);
    //   });
  }

  RemoveRecord(rowID: number) {
    this.crudService.delete_Product(rowID);
  }

  EditRecord(record: any) {
    record.isEdit = true;
    record.EditName = record.Name;
  }

  UpdateRecord(recordRow: any) {
    let record: { [key: string]: string } = {};
    record['Name'] = recordRow.EditName['Name'];
    this.crudService.update_Product(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
