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

   private isDuplicatePhoneNumber(phoneNumber: string): boolean {
      const customerIds = this.phoneCustomer.get(phoneNumber);
      return customerIds ? customerIds.length > 1 : false;
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
      if (!this.isDuplicatePhoneNumber(phoneNumber.number)) {
         this.phoneNumbers.set(phoneNumber.number, phoneNumber);
      }

      return this.phoneNumbers;
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

   public searchByCustomerName(name: string): Customer[] {
      const result: Customer[] = [];

      for (let customer of this.customers.values()) {
         if (
            customer.firstName.toLowerCase().includes(name.toLowerCase()) ||
            customer.lastName.toLowerCase().includes(name.toLowerCase())
         ) {
            result.push(customer);
         }
      }

      return result;
   }

   public searchByPhoneNumber(phoneNumber: string): Customer[] {
      const matchingCustomers: Customer[] = [];

      for (let customer of this.customers.values()) {
        const matches = customer.phoneNumbers.some(record => record.number === phoneNumber);
        if (matches) {
          matchingCustomers.push(customer);
        }
      }

      return matchingCustomers;
   }
}
