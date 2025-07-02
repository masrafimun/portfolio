import React from 'react';

const Experience = () => {
    return (
        <div className='container mx-auto px-8 border-b border-neutral-900 pb-4'>
            <h2 className='mt-20 mb-5 text-center text-4xl'>Experience</h2>
             <section className=" py-12 px-4 sm:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto">

    <div className="space-y-6">
      <div className="p-6 rounded-2xl shadow-md border border-gray-200">
        <h3 className="text-xl font-semibold mb-3">Full Stack Web Developer</h3>
        
        <p className="mb-4">
          <strong>E-commerce Website:</strong> Built a full-featured e-commerce application using React and Next.js with dynamic routing, cart management, product filtering, and secure authentication. Designed responsive UI with TailwindCSS and deployed via Vercel.
        </p>

        <p className="mb-4">
          <strong>Chat Application:</strong> Created a real-time chat app using React, Node.js, Express, and Socket.IO. Implemented real-time messaging, online status, and MongoDB-based conversation storage.
        </p>

        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Followed best practices for component design, RESTful API development, and authentication/authorization workflows (JWT).</li>
          <li>Gained hands-on experience in cloud deployment, environment variables, Git version control, and integrating third-party tools like Cloudinary.</li>
          <li>Built projects to apply full stack development skills and prepare for a professional role in web development.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Experience;
