import React from 'react'

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-saffron-light text-primary font-semibold rounded-full text-sm mb-4">Photo Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Recent Events &amp; <span className="text-gradient">Public Interaction</span>
          </h2>
          <p className="text-lg text-muted-foreground">Glimpses of our continuous efforts to connect with and serve the people.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <div className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&amp;h=400&amp;fit=crop" alt="Public meeting with citizens" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-background font-heading font-semibold">Town Hall Meeting</span>
            </div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
          </div>
          <div className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&amp;h=400&amp;fit=crop" alt="Community event" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-background font-heading font-semibold">Community Festival</span>
            </div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
          </div>
          <div className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&amp;h=400&amp;fit=crop" alt="Development site visit" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-background font-heading font-semibold">Infrastructure Inspection</span>
            </div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
          </div>
          <div className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&amp;h=400&amp;fit=crop" alt="Healthcare camp" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-background font-heading font-semibold">Medical Camp</span>
            </div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
          </div>
          <div className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&amp;h=400&amp;fit=crop" alt="Youth program" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-background font-heading font-semibold">Youth Interaction</span>
            </div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
          </div>
          <div className="group relative aspect-4/3 rounded-xl overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&amp;h=400&amp;fit=crop" alt="Women empowerment program" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-background font-heading font-semibold">Women's SHG Meet</span>
            </div>
            <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery