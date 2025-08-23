 import React, { useState, useRef } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function NewsletterSubscribe() {
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const emailRef = useRef(null);
  const descriptionRef = useRef(null);

  const FORM_ACTION = 'https://formspree.io/f/xldlwpjp';

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current?.value?.trim() ?? '';
    const description = descriptionRef.current?.value?.trim() ?? '';

    if (!email) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      const form = e.target;
      const formData = new FormData(form);
      formData.append('description', description);

      const res = await fetch(FORM_ACTION, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setMessage('Thanks — your details have been sent!');
        form.reset();
      } else {
        setStatus('error');
        setMessage(data?.error || 'Submission failed. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Network error. Please try again later.');
    }
  };

  return (
    <section
      className="bg-gray-900 text-white py-10 px-2 sm:px-4 md:px-6 lg:px-12"
      aria-labelledby="newsletter-heading"
    >
      <div
        className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto text-center space-y-5"
        data-aos="fade-up"
      >
        <h2
          id="newsletter-heading"
          className="text-2xl md:text-3xl font-bold tracking-tight"
        >
          Stay Connected with Agile Engineering
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base">
          Subscribe and tell us more about what you’re looking for.
        </p>

        <form
          action={FORM_ACTION}
          method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 mt-4 w-full max-w-full"
        >
          {/* Honeypot for bots */}
          <input
            type="text"
            name="_gotcha"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
          />

          <div>
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full min-w-0 px-4 py-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="sr-only">
              Description
            </label>
            <textarea
              ref={descriptionRef}
              id="description"
              name="description"
              placeholder="Enter a short message or description"
              className="w-full min-w-0 px-4 py-3 rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="3"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-md transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <svg
                className="w-4 h-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="rgba(255,255,255,0.25)"
                  strokeWidth="4"
                />
                <path
                  d="M22 12a10 10 0 00-10-10"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <FaPaperPlane className="text-lg" />
            )}
            <span>{status === 'loading' ? 'Sending...' : 'Send'}</span>
          </button>
        </form>

        <div className="mt-3 min-h-[1.25rem]">
          <p
            role="status"
            aria-live="polite"
            className={`text-sm ${
              status === 'success'
                ? 'text-green-400'
                : status === 'error'
                ? 'text-red-400'
                : 'text-gray-300'
            }`}
          >
            {message}
          </p>
        </div>
      </div>
    </section>
  );
}



