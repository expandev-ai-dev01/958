import { z } from 'zod';

export const zString = z.string().min(1, 'stringRequired');

export const zNullableString = z.string().nullable();

export const zName = z.string().min(1, 'nameRequired').max(100, 'nameMaxLength');

export const zNullableDescription = z.string().max(500, 'descriptionMaxLength').nullable();

export const zFK = z.coerce.number().int().positive('foreignKeyMustBePositive');

export const zNullableFK = z.coerce.number().int().positive('foreignKeyMustBePositive').nullable();

export const zBit = z.coerce.number().int().min(0).max(1, 'bitValueInvalid');

export const zDateString = z.string().refine((val) => !isNaN(Date.parse(val)), 'invalidDateFormat');

export const zEmail = z.string().email('invalidEmailFormat');

export const zCPF = z.string().regex(/^\d{11}$/, 'invalidCPFFormat');

export const zCNPJ = z.string().regex(/^\d{14}$/, 'invalidCNPJFormat');

export const zPhone = z.string().regex(/^\d{10,11}$/, 'invalidPhoneFormat');

export const zCEP = z.string().regex(/^\d{8}$/, 'invalidCEPFormat');

export const zNumeric = z.coerce.number();

export const zPositiveNumeric = z.coerce.number().positive('valueMustBePositive');

export const zPercentage = z.coerce.number().min(0).max(100, 'percentageOutOfRange');
