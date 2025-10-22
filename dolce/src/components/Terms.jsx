import React from 'react'

const Terms = () => {
  return (
    <div className="mt-[100px]">
      {/* Header Section */}
      <div className="bg-gray-400 py-6">
        <h1 className="text-black text-center text-4xl font-bold font-serif">
          Terms and Conditions
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8 font-serif">
        <p>
     Welcome to Dolce Villas Real Estate Brokers LLC! By accessing or using our website 
     and services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <div>
          <h2 className="text-3xl font-bold mb-3">Acceptance of Terms</h2>
        <h1>By using our website, you agree to these Terms and Conditions. If you do not agree, please do not use our services.</h1>
              
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">Services</h2>
          <h1>Dolce Villas Real Estate Brokers LLC offers services related to buying, selling, and renting properties. 
            We strive to provide accurate and up-to-date information but do not guarantee the availability or accuracy of any property listings.</h1>
          
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-3">User Responsibilities</h2>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>You must provide accurate information when using our services.</li>
            <li>You are responsible for maintaining the confidentiality of your account information.</li>
          </ul>
        </div>
 <h2 className="text-3xl font-bold mb-3">Limitation of Liability</h2>
 <h1>Dolce Villas Real Estate Brokers LLC shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services.</h1>
   <h2 className="text-3xl font-bold mb-3">Intellectual Property</h2>
   <h1>All content on our website, including text, images, and logos, is the property of Dolce Villas Real Estate Brokers LLC and is protected by copyright and other intellectual property laws.</h1>
   <h2 className="text-3xl font-bold mb-3">Changes to Terms</h2>
   <h1>We may update these terms and conditions at any time. We will notify you of any changes by posting the new terms on our website.</h1>
     <h2 className="text-3xl font-bold mb-3">Contact Us</h2>
     
   <h1>If you have any questions about these terms and conditions, please contact us at: Email: info@thedolcevillas.com</h1>
      </div>
    </div>
  )
}

export default Terms
