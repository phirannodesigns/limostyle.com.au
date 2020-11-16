import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { NetlifyForm, Input, TextArea, Select } from './form-elements';

function ContactSection() {
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <article id="contact-form">
      <div className="relative max-w-xl px-4 py-12 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-center text-gold font-display">
            Book Online Now
          </h2>
        </div>
        <div className="p-6 mt-12 border border-white">
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
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p>Date</p>
                <Input
                  name="date"
                  label="Date"
                  type="date"
                  register={register}
                  errors={errors}
                />
              </div>
              <div>
                <p>
                  Time{' '}
                  <span className="hidden sm:inline-block">(eg. 11:45 AM)</span>
                </p>
                <Input
                  name="time"
                  label="Time"
                  type="time"
                  register={register}
                  errors={errors}
                />
              </div>
            </div>
            <Input
              name="passengers"
              label="Number of passengers"
              type="number"
              register={register}
              errors={errors}
            />
            <Select
              name="vehicle"
              label="Vehicle"
              defaultValue="Select your vehicle:"
              options={['Sedan', 'Bus']}
              register={register}
              errors={errors}
            />
            <Input
              name="pickup_location"
              label="Pickup location"
              register={register}
              errors={errors}
            />
            <Input
              name="destination"
              label="Destination"
              register={register}
              errors={errors}
            />
            <TextArea
              name="message"
              label="Message"
              register={register}
              errors={errors}
            />
            <p className="leading-tight">
              <small>
                * Please note: this is only a provisional enquiry. All bookings
                will need to be confirmed by return email.
              </small>
            </p>
            <div>
              <span className="inline-flex w-full shadow-sm">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-6 py-3 text-base font-medium leading-6 text-black transition duration-150 ease-in-out bg-gold rounded-none ${
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
