import * as React from 'react';
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form';

interface FormProps<T> extends React.FormHTMLAttributes<HTMLFormElement> {
  methods: UseFormReturn<T>;
  onSubmit: (data: T) => void;
  children: React.ReactNode;
}

export function Form<T>({ methods, onSubmit, children, ...props }: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} {...props}>
        {children}
      </form>
    </FormProvider>
  );
} 