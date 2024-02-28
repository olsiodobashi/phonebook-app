/**
 * Defines the relationship between customer and phone number
 */
export interface PhonebookRecord {
   /**
    * The ID of the customer linked to the phone record
    */
   customerId: string;
   /**
    * The ID of the number linked to the record
    */
   phoneNumberId: string;
}
