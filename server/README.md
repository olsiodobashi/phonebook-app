# In-Memory Phonebook Application

## Overview

The In-Memory Phonebook Application is designed to offer fast and efficient storage, retrieval, and management of phonebook records directly within the application's memory. It supports complex many-to-many relationships, allowing multiple customers to share phone numbers and vice versa. The application is built using TypeScript, ensuring type safety and facilitating easier maintenance and development.

## Key Features

- **Fast Lookup**: Perform quick searches by customer name or phone number, thanks to optimized data structures.
- **Many-to-Many Relationships**: Seamlessly handle cases where customers share phone numbers and a single customer has multiple phone numbers.
- **In-Memory Storage**: Phonebook records are stored in the application's memory, ensuring rapid access and modifications.
- **CRUD Operations**: Comprehensive support for creating, reading, updating, and deleting both customer and phone number records.
- **Flexible Data Models**: Easily extendable interfaces and classes to cater to evolving business requirements.

## Data Models

### `Customer`
Represents an individual or entity that can own one or more phone numbers.
- **Attributes**:
  - `id`: A unique identifier for the customer.
  - `firstName & lastName`: The customer's name.
  - `phoneNumbers`: An optional array of phone numbers associated with the customer.
  - `address`: The customer's home/office address

### `PhoneNumber`
Encapsulates details of a phone number.
- **Attributes**:
  - `id`: A unique identifier for the phone number.
  - `number`: The unique phone number.
  - `type`: Optional. The type of phone number (e.g., 'office', 'home').

### `PhoneBookRecord`
Defines the many-to-many relationship between customers and phone numbers.
- **Attributes**:
  - `customerId`: Identifier for the customer.
  - `phoneNumber`: The associated phone number.

### Caching Service
The cache service provides a simple caching mechanism that can store and retrieve data efficiently, with TTL (Time To Live) support for automatic expiration of items.

Example usage:
```javascript
const cache = new CacheService();

this.phoneBook.addCustomer(customer).then(result => {
  ...
  cache.set(customer.id, customer, 1200);
});
```

## API Overview

- **Customer Management**: Add, update, and remove customers.
- **Phone Number Management**: Add, edit, and delete phone numbers.
- **Association Management**: Link and unlink customers with phone numbers.
- **Search**: Find phone numbers by customer name or identify customers by phone number.

## Future Directions

- **Fuzzy Search**: Implement fuzzy search algorithms for more forgiving name and number lookup.
- **UI Integration**: Develop a user interface to facilitate easier interaction with the phonebook for non-technical users.

## Conclusion

The In-Memory Phonebook Application provides a robust solution for managing phonebook records with complex many-to-many relationships between customers and phone numbers. Its design focuses on speed and efficiency, making it an ideal choice for applications requiring rapid access and manipulation of contact information.