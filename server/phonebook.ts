// @ts-nocheck
import { Customer } from "./models/customer.interface";
import { PhoneNumber } from "./models/phone-number.interface";
import { Firestore } from "./database";

/**
 * Class that handles Phonebook operations
 *
 * @property
 */
export class PhoneBook {
   private customers: Map<string, Customer> = new Map();
   private phoneNumbers: Map<string, PhoneNumber> = new Map();
   private customerPhone: Map<string, string[]> = new Map();
   private phoneCustomer: Map<string, string[]> = new Map();

   constructor() {
      this.db = new Firestore({
         apiKey: process.env.FIRESTORE_API_KEY,
         projectName: process.env.PROJECT_NAME,
         // ...
      });
   }

   /**
    * Stores customer record
    * @param customer Customer data to be stored
    */
   public addCustomer(customer: Customer) {
      return this.customers.set(customer.id, customer);
   }

   /**
    * Stores phone number record
    * @param phoneNumber Phone number data to be stored
    */
   public addPhoneNumber(phoneNumber: PhoneNumber) {
      return this.phoneNumbers.set(phoneNumber.number, phoneNumber);
   }

   /**
    * Link a customer to a phone number
    * @param customerId The ID of the customer
    * @param phoneNumber The phone numbe record to be added to the customer
    */
   public associate(customerId: string, phoneNumber: string) {
      if (!this.customerPhone.has(customerId)) {
         this.customerPhone.set(customerId, []);
      }
      this.customerPhone.get(customerId)!.push(phoneNumber);

      if (!this.phoneCustomer.has(phoneNumber)) {
         this.phoneCustomer.set(phoneNumber, []);
      }
      this.phoneCustomer.get(phoneNumber)!.push(customerId);
   }
}
