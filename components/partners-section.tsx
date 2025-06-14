'use client'

import Image from "next/image"
import { motion } from "framer-motion"

export default function PartnersSection() {
  const partners = [
    {
      name: "SAP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg"
    },
    {
      name: "Oracle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      name: "Salesforce",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    {
      name: "Workday",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/80/Workday_logo.svg"
    },
  ]

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            We've partnered with some of the best cloud ERP providers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have teamed up with leading cloud ERP providers to bring you advanced, scalable solutions tailored to your organization.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 items-center justify-items-center mt-14">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="transition duration-300 ease-in-out"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={140}
                height={60}
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
