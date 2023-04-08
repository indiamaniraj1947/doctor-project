import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private firestore: AngularFirestore) {}
  async create_NewProduct(item: any) {
    return await this.firestore.collection('Products').add(item);
  }
  read_Products() {
    let colval = this.firestore.collection('FeedBacks').snapshotChanges();
    colval.subscribe((val: any) => {
      console.log('colval==>', val);
    });
    return colval;
  }
  update_Product(itemID: any, item: any) {
    this.firestore.doc('Products/' + itemID).update(item);
  }
  delete_Product(itemID: any) {
    this.firestore.doc('Products/' + itemID).delete();
  }

  async createNewFeedback(item: any) {
    return await this.firestore.collection('FeedBacks').add(item);
  }
  readFeedbacks() {
    let feedbackData: any[] = [];
    let fbasefeedback: any[] = [];
    let sno: number = 0;
    let fireStoreData = this.firestore
      .collection('FeedBacks')
      .snapshotChanges();
    fireStoreData.subscribe((feedBack: any) => {
      fbasefeedback = feedBack;
      fbasefeedback.forEach((fdata: any) => {
        let createdValue: any =
          fdata.payload._delegate.doc._document.data.value.mapValue.fields
            .createdOn.mapValue.fields;
        let feedbackValue: any =
          fdata.payload._delegate.doc._document.data.value.mapValue.fields
            .feebackValue.arrayValue.values;
        sno = sno + 1;
        feedbackData.push({
          id: sno,
          system: createdValue.system.stringValue,
          date: createdValue.date.stringValue,
          time: createdValue.time.stringValue,
          answer1:
            feedbackValue[0].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
          answer2:
            feedbackValue[1].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
          answer3:
            feedbackValue[2].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
          answer4:
            feedbackValue[3].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
          answer5:
            feedbackValue[4].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
          answer6:
            feedbackValue[5].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
          answer7:
            feedbackValue[6].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
          answer8:
            feedbackValue[7].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
          answer9:
            feedbackValue[8].mapValue.fields.answer.mapValue.fields.label
              .stringValue,
        });
        console.log('this.feedbackData==>', feedbackData);
      });
    });
    return feedbackData;
  }
}
