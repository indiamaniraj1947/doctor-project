import { Component } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-edit-feedback',
  templateUrl: './add-edit-feedback.component.html',
  styleUrls: ['./add-edit-feedback.component.scss'],
})
export class AddEditFeedbackComponent {
  title = 'webshop1';
  products: any;
  productName: string | undefined;

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.crudService.read_Products().subscribe((data: any) => {
      this.products = data.map((e: any) => {
        return {
          //rdata: e.payload.doc.data()
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data(),
        };
      });
    });
  }

  CreateRecord() {
    //let record ={};
    let record: { [key: string]: string } = {};
    //record['Name'] = this.productName!;
    record['Name'] = this.productName || '';
    this.crudService
      .create_NewProduct(record)
      .then((resp: any) => {
        this.productName = '';
      })
      .catch((error: any) => {
        console.log(error);
      });
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
