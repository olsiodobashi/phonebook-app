import { PhoneNumber } from "./phone-number.interface";

/**
 * Defines the interface of a customer
 */
export interface Customer {
   /**
    * The ID of the customer record
    */
   id: string;
   /**
    * Customer's first name
    */
   firstName: string;
   /**
    * Customer's last name
    */
   lastName: string;
   /**
    * All phone numbers associated with this customer
    */
   phoneNumbers: PhoneNumber[];
   /**
    * Customer's address
    */
   address: string;
}
