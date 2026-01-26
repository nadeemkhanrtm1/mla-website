import React from "react";

const JoinTheMoment = () => {
  return (
    <section className="py-20 py-40px bg-flag-color relative overflow-hidden ">
      <div
        className="absolute inset-0 opacity-10" 
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-background/20 text-background font-semibold rounded-full text-sm mb-6 backdrop-blur-sm mukta-medium">
            Be Part of the Change
          </span>
          <h2 className="text-background mb-6 text-[44px] leading-15 open-sans-semibold-normal text-mobile-32">
            Join the Movement for a Stronger Khanakul
          </h2>
          <p className="text-background/90 mb-10 max-w-2xl mx-auto text-lg mukta-regular text-16px mb-24px">
            Be a part of the development journey. Volunteer, support campaigns,
            and stay updated with every initiative.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 mb-24px">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-background text-primary border-2 border-background hover:bg-transparent hover:text-background hover:border-background shadow-elevated h-14 rounded-lg px-10 text-lg open-sans-semibold-normal text-16px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-users w-5 h-5"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              Join the Movement
            </button>
            <button className="text-16px inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-transparent text-background border-2 border-background hover:bg-background hover:text-primary font-bold h-14 rounded-lg px-10 text-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-heart w-5 h-5"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
             Get Involved
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTheMoment;
