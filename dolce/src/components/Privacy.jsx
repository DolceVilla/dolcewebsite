



import React from 'react'

const Privacy = () => {
  return (
    <div className="mt-[100px]">
      {/* Header Section */}
      <div className="bg-gray-400 py-6">
        <h1 className="text-black text-center text-4xl font-bold font-serif">
          Privacy Policy
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8 font-serif">
        <p>
          At Dolce Villas Real Estate Brokers LLC, we prioritize your privacy. 
          This privacy policy explains how we collect, use, disclose, and protect your 
          information when you visit our website or use our services.
        </p>

        <div>
          <h2 className="text-3xl font-bold mb-3">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-bold">Personal Information:</span> We may collect 
              personal information such as your name, email address, phone number, and 
              property preferences when you contact us or sign up for our services.
            </li>
            <li>
              <span className="font-bold">Usage Data:</span> We may collect information 
              about how you access and use our website, including your IP address, browser 
              type, and pages visited.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide and manage our real estate services</li>
            <li>Communicate with you regarding your inquiries</li>
            <li>Improve our website and services</li>
            <li>Send you updates, newsletters, and marketing materials (you can opt out at any time)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">Sharing Your Information</h2>
          <p>We do not sell or rent your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Legal authorities if required by law</li>
          </ul>
        </div>
 <h2 className="text-3xl font-bold mb-3">Data Security</h2>
 <h1>We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee its 
  absolute security.</h1>
   <h2 className="text-3xl font-bold mb-3">Changes to This Policy</h2>
   <h1>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on our website.</h1>
   <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
   <h1>If you have any questions about this privacy policy, please contact us at: Email: info@thedolcevillas.com</h1>
      </div>
    </div>
  )
}

export default Privacy

