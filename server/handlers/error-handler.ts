// @ts-nocheck
import { OperationEnum } from "../models/enums/operation.enum";

/**
 * Handles API errors globally
 * @param errorMessage The message that will be returned to the UI
 * @param statusCode Status code returned from request
 * @param operation Operation that caused the error
 * @returns Response object with error information
 */
export const handleError = (
   errorMessage: string,
   statusCode: number,
   operation: OperationEnum
) => {
   console.error("");
   console.error(errorMessage);

   return res.status(statusCode).json({
      status: statusCode,
      message: errorMessage,
      operation
   });
};
