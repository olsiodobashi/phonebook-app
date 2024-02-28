import { PhoneType } from "./types/phone.type";

/**
 * Defines the interface of a phone number
 */
export interface PhoneNumber {
   /**
    * The ID of the phone number record
    */
   id: string;
   /**
    * The phone number associated to this record
    */
   number: string;
   /**
    * Phone number type
    */
   type?: PhoneType;
}
