import React from 'react';
import { motion } from 'framer-motion';

const pricingOptions = [
  {
    title: 'On Demand',
    description: 'Get all these features when you are using as starter.',
    price: '$20',
    duration: '/hour',
    button: 'Hire an Expert',
    planType: 'Quick Solutions',
    features: {
      included: ['Unlimited Projects', 'Analytics dashboard', 'Unlimited Projects'],
      excluded: ['Insights panel', 'Email notifications', 'Share features'],
    },
  },
  {
    title: 'Maintenance',
    description: 'Get all these features when you are using as starter.',
    price: '$99',
    duration: '/hour',
    button: 'Hire an Expert',
    planType: 'Monthly Solutions',
    features: {
      included: ['Unlimited Projects', 'Analytics dashboard', 'Unlimited Projects'],
      excluded: ['Insights panel', 'Email notifications', 'Share features'],
    },
  },
];

export default function PricingCard() {
  return (
    <div className="bg-blue-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{once: true}} 
        className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          We have the best <span className="text-green-500">pricing</span> package for you
        </motion.h2>
      </div>

      <motion.div
            initial={{ opacity: 0, x: 50 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}  
      className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {pricingOptions.map((plan, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>

              <ul className="mt-4 space-y-2">
                {plan.features.included.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-700">
                    ✅ <span className="ml-2">{item}</span>
                  </li>
                ))}
                {plan.features.excluded.map((item, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-400">
                    ❌ <span className="ml-2">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between bg-blue-100 p-4 rounded-md">
              <div>
                <p className="text-sm font-medium text-gray-700">{plan.planType}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {plan.price}
                  <span className="text-base font-medium text-gray-600">{plan.duration}</span>
                </p>
              </div>
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-md">
                {plan.button}
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
