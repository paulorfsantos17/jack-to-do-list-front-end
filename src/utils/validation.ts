import { type ZodSchema } from 'zod'

interface ValidateFormsProps<T> {
  schema: ZodSchema<T>,
  data: T
}

export function validateForms<T>({ schema, data }: ValidateFormsProps<T>) {
  const result = schema.safeParse(data)

  if (!result.success) {
    return {
      isValid: false,
      errors: result.error.formErrors.fieldErrors,
    }
  }

  return { isValid: true, errors: {} }
}
