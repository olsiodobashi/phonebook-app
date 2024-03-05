//@ts-nocheck
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
    * Checks whether a phone number exists in a customer
    * @param customer The customer to check against
    * @param newPhoneNumber The new phone number to be added
    * @returns 
    */
   private canAddPhoneNumber(
      customer: Customer,
      newPhoneNumber: PhoneNumber
   ): boolean {
      if (
         customer.phoneNumbers.some((phone) => phone.number === newPhoneNumber.number)
      ) {
         return false;
      }

      return true;
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
    * @param customer The customer object
    * @param phoneNumber The phone numbe record to be added to the customer
    */
   public associatePhoneNumberToCustomer(
      customer: Customer,
      newPhoneNumber: PhoneNumber
   ): boolean {
      if (this.canAddPhoneNumber(customer, newPhoneNumber)) {
         customer.phoneNumbers.push(newPhoneNumber);
         this.customers.set(customer.id, customer);

         return true;
      }

      return false;
   }

   /**
    * Search customers by first or name
    * @param name The string that will be matched against the customer's fname or lname.
    * @returns A list of customers that match the name criteria
    */
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

   /**
    * Search customers by phone number.
    * @param phoneNumber The number to search for. Can be a partial number.
    * @returns List of customers that match the phone number criteria
    */
   public searchByPhoneNumber(phoneNumber: string): Customer[] {
      const matchingCustomers: Customer[] = [];

      for (let customer of this.customers.values()) {
         const matches = customer.phoneNumbers.some((record) =>
            record.number.includes(phoneNumber)
         );

         if (matches) {
            matchingCustomers.push(customer);
         }
      }

      return matchingCustomers;
   }
}
