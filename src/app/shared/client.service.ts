import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from './client';

export class ClientService {

  clientCollection: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private db: AngularFirestore
  ) {
    this.clientCollection = this.db.collection('/users');
  }

  getClients(): Observable<Client[]> {
    this.clientCollection = this.db.collection('/users');
    this.clients = this.clientCollection.snapshotChanges().pipe(map( changes => {
      return changes.map( action => {
        const data = action.payload.doc.data() as Client;
        data.id = action.payload.doc.id;
        return data;
      });
    }));

    return this.clients;
  }

  getClient(id: string): Observable<Client> {
    this.clientDoc = this.db.doc<Client>(`users/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Client;
        data.id = action.payload.id;
        return data;
      }
    }));

    return this.client;
  }
}
