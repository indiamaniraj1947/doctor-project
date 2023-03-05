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
    let colval = this.firestore.collection('Products').snapshotChanges();
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
}
