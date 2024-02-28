export enum OperationEnum {
   // Customer
   GET_CUSTOMERS,
   GET_CUSTOMER,
   ADD_CUSTOMER,
   UPDATE_CUSTOMER,
   DELETE_CUSTOMER,
   LINK_CUSTOMER_TO_PHONE_NUMBER,
   UNLINK_CUSTOMER_FROM_PHONE_NUMBER,

   // Phone number
   GET_PHONE_NUMBERS,
   GET_PHONE_NUMBER,
   UPDATE_PHONE_NUMBER,
   DELETE_PHONE_NUMBER,

   // Searching
   SEARCH_CUSTOMER,
   SEARCH_PHONE_NUMBER,
}