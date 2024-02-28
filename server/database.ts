// @ts-nocheck
import admin, { initializeApp } from "firebase-admin";

/**
 * Firebase Firestore Service
 * For Persistently Storing Data
 */
export class Firestore {
   private db: Firestore;

   constructor(private config: any) {
      initializeApp(this.config);
      this.db = admin.firestore();
   }

   /**
    * Creates new record in the database
    * @param collectionName Collection name
    * @param data Data to be stored of type T
    * @returns Promise with the ID of the newly created document
    */
   public addRecord<T>(collectionName: string, data: T): Promise<Partial<T>> {
      try {
         return this.db.collection(collectionName).add(data);
      } catch (error) {
         console.error("Could not add record: ");
         console.error(error);
         throw new Error(error.message);
      }
   }

   /**
    * Updates new record in the database
    * @param collectionName Collection name
    * @param data Data to be updated of type T
    * @returns Promise with the ID of the updated document
    */
   public setRecord<T>(collectionName: string, data: T): Promise<Partial<T>> {
      try {
         return this.db
            .doc(`${collectionName}/${data.id}`)
            .set(data, { merge: true });
      } catch (error) {
         console.error("Could not update record: ");
         console.error(error);
         throw new Error(error.message);
      }
   }

   /**
    * Removes record from the database
    * @param collectionName Collection name
    * @param docId ID of the document to be removed
    * @returns Void promise
    */
   public removeRecord(collectionName: string, docId: string): Promise<void> {
      try {
         return this.db.collection(collectionName).delete(docId);
      } catch (error) {
         console.error("Could not delete record: ");
         console.error(error);
         throw new Error(error.message);
      }
   }

   /**
    * Retrieves all documetns from a collection
    * @param collectionName Collection name
    * @returns Promise containing an array of documents from the collection
    */
   public getAllDocuments<T>(
      collectionName: string
   ): Promise<FirestoreDocument<T>[]> {
      try {
         return this.db.collection(collectionName).get();
      } catch (error) {
         console.error("Could not get documents: ");
         console.error(error);
         throw new Error(error.message);
      }
   }

   /**
    * Creates new record in the database
    * @param collectionName Collection name
    * @param docId The ID of the document to be retrieved
    * @returns Promise with the document data
    */
   public getDocumentById<T>(
      collectionName: string,
      docId: string
   ): Promise<FirestoreDocument<T>> {
      try {
         return this.db.doc(`${collectionName}/${docId}`).get();
      } catch (error) {
         console.error("Could not get document record: ");
         console.error(error);
         throw new Error(error.message);
      }
   }
}
