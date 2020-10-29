import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useForm } from 'react-hook-form';

import {
  NetlifyForm,
  Input,
  TextArea,
  Checkbox,
  Select,
} from './form-elements';

function ContactSection() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <article>
      <div className="relative max-w-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl text-center">Book Online Now</h2>
        </div>
        <div className="mt-12">
          <NetlifyForm
            handleSubmit={handleSubmit}
            setIsSubmitting={setIsSubmitting}
            className="grid gap-y-6 sm:gap-x-8"
          >
            <Input
              name="full_name"
              label="Full name"
              register={register}
              errors={errors}
            />
            <Input
              name="email"
              label="Email"
              type="email"
              register={register}
              errors={errors}
            />
            <Input
              name="phone_number"
              label="Phone number"
              type="tel"
              register={register}
              errors={errors}
            />
            <Select
              name="subject"
              label="Subject"
              defaultValue="Please choose:"
              options={['First option', 'Second option', 'Third option']}
              register={register}
              errors={errors}
            />
            <TextArea
              name="message"
              label="Message"
              register={register}
              errors={errors}
            />
            <div>
              <span className="inline-flex w-full shadow-sm">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center w-full px-6 py-3 text-base font-medium leading-6 text-black transition duration-150 ease-in-out bg-gold rounded-none ${
                    isSubmitting ? 'opacity-50 cursor-wait' : ''
                  }`}
                >
                  Submit
                </button>
              </span>
            </div>
          </NetlifyForm>
        </div>
      </div>
    </article>
  );
}

export { ContactSection };
