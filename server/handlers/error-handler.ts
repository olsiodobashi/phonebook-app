// @ts-nocheck
import { Response } from 'express';
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
   operation: OperationEnum,
   res: Response
) => {
   console.error("The server encountered an error while processing your request:");
   console.error(`${operation}: ${errorMessage}`);

   return res.status(statusCode).json({
      status: statusCode,
      message: errorMessage,
      operation
   });
};
