import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CheckCircle2, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { products } from '@/data/products';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  interest: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      interest: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, this would be an API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">Contact Us</h2>
              <div className="w-16 h-1 bg-red-600 mb-6"></div>
              <p className="text-gray-600 text-lg">Request a quote or technical consultation for your engineering requirements.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 text-red-600"><MapPin size={24} /></div>
                <div>
                  <h3 className="font-bold text-black text-lg mb-1">Elcomech Systems</h3>
                  <p className="text-gray-600">Bengaluru - 560091<br/>Karnataka, India</p>
                  <p className="text-sm font-mono text-gray-500 mt-2">CEO: R Marathi</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-red-600"><Clock size={24} /></div>
                <div>
                  <h3 className="font-bold text-black text-lg mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday – Saturday<br/>9:00 AM – 6:00 PM IST</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 text-red-600"><ShieldCheck size={24} /></div>
                <div>
                  <h3 className="font-bold text-black text-lg mb-1">Trust Profile</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="px-3 py-1 bg-gray-200 text-xs font-bold uppercase tracking-wider text-black">GST Verified</span>
                    <span className="px-3 py-1 bg-gray-200 text-xs font-bold uppercase tracking-wider text-black">TrustSEAL</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 border border-gray-200 shadow-sm"
          >
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <CheckCircle2 size={64} className="text-red-600 mb-6 mx-auto" />
                </motion.div>
                <h3 className="text-2xl font-bold text-black mb-2">Enquiry Sent Successfully</h3>
                <p className="text-gray-600">Our engineering team will review your requirements and contact you within 24 hours.</p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-sm font-bold uppercase tracking-widest border-b-2 border-black pb-1 hover:text-red-600 hover:border-red-600 transition-colors"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black font-bold uppercase text-xs tracking-wider">Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-gray-50 border-gray-200 focus-visible:ring-red-600 rounded-none h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black font-bold uppercase text-xs tracking-wider">Company</FormLabel>
                          <FormControl>
                            <Input placeholder="Acme Corp" className="bg-gray-50 border-gray-200 focus-visible:ring-red-600 rounded-none h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black font-bold uppercase text-xs tracking-wider">Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" className="bg-gray-50 border-gray-200 focus-visible:ring-red-600 rounded-none h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-black font-bold uppercase text-xs tracking-wider">Phone Number *</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 98765 43210" className="bg-gray-50 border-gray-200 focus-visible:ring-red-600 rounded-none h-12" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="interest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-bold uppercase text-xs tracking-wider">Product Interest</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-gray-50 border-gray-200 focus:ring-red-600 rounded-none h-12">
                              <SelectValue placeholder="Select a product category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="rounded-none border-gray-200">
                            {products.map(p => (
                              <SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>
                            ))}
                            <SelectItem value="general">General Enquiry</SelectItem>
                            <SelectItem value="custom">Custom Requirement</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-black font-bold uppercase text-xs tracking-wider">Requirements / Specifications *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide details about your testing or manufacturing requirements..." 
                            className="bg-gray-50 border-gray-200 focus-visible:ring-red-600 rounded-none min-h-[120px] resize-none" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <button 
                    type="submit" 
                    disabled={form.formState.isSubmitting}
                    className="w-full bg-red-600 text-white font-bold py-4 uppercase tracking-widest hover:bg-red-700 transition-colors disabled:opacity-50"
                  >
                    {form.formState.isSubmitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-[400px] bg-gray-200 grayscale filter opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6806038101713!2d77.48868107409498!3d12.92823818738313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fd7cfc20a0f%3A0xab1a1c6d4718c059!2sELCOMECH%20SYSTEMS!5e0!3m2!1sen!2sin!4v1783507262249!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Elcomech Systems Location Map"
        ></iframe>
      </div>
    </section>
  );
}
