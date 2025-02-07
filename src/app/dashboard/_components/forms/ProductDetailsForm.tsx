'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ProductDetailsFormSchema } from '@/schemas/product';
import { createProduct } from '@/server/db/actions/products';
import { useToast } from '@/hooks/use-toast';

export default function ProductDetailsForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof ProductDetailsFormSchema>>({
    resolver: zodResolver(ProductDetailsFormSchema),
    defaultValues: {
      name: '',
      url: '',
      description: '',
    },
  });

  async function onSubmit(values: z.infer<typeof ProductDetailsFormSchema>) {
    const data = await createProduct(values);

    if (data?.message) {
      toast({
        title: data.error ? 'Error' : 'Success',
        description: data.message,
        variant: data.error ? 'destructive' : 'default',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex gap-6 flex-col"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Product Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="url"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormLabel>Enter your website URL</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  Include the protocol (http/https) and the full path of the
                  sales page
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex-grow">
              <FormLabel>Product Description</FormLabel>
              <FormControl>
                <Textarea className="min-h-20 resize-none" {...field} />
              </FormControl>
              <FormDescription>
                An optional description to help distinguish your product form
                other products
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="self-end">
          <Button disabled={form.formState.isSubmitting} type="submit">
            Save
          </Button>
        </div>
      </form>
    </Form>
  );
}
