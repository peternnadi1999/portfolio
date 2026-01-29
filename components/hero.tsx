import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="relative bg-background min-h-screen overflow-hidden">
      <div className="
        max-w-6xl mx-auto px-4 md:px-8 py-24 md:py-24
        flex flex-col lg:flex-row
        items-center justify-between
        min-h-screen
      ">

        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8 flex-1 relative z-10">

          {/* Main Headline */}
          <div className="animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-foreground/95 leading-tight">
              Creative<br />Developer
            </h1>
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg text-foreground/80 max-w-xl leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Hi, I am <span className="font-bold text-foreground">Nnadi Peter E</span>, a frontend engineer, with{' '}
            <span className="font-bold text-foreground">3+</span> years of experience, an eye for design,
            and creative development.
          </p>
        </div>

        {/* Right Content - Portrait Section */}
        <div
          className="
            flex flex-1 items-center justify-center lg:justify-end
            relative mt-16 lg:mt-0
            animate-slide-in-right
          "
          style={{ animationDelay: '0.3s' }}
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-88 md:w-80 md:h-96 animate-float">

            {/* Tilted Photo Frame */}
            <div className="
              absolute inset-0
              transform rotate-6
              overflow-hidden
              shadow-2xl
              bg-white
              p-4 pb-14
              transition-shadow duration-300
            ">
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-background">
                <img
                  src="/peter.png"
                  alt="Nnadi Peter E - Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Handwritten Tag */}
              <div className="py-3 text-center font-modern text-gray-700 text-xl italic">
                The Frontend Expert
              </div>
            </div>

            {/* Chat Button */}
            <Link
              href="https://wa.me/2347069275802"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="
                  absolute -bottom-16 sm:-bottom-20 right-1/2 translate-x-1/2 lg:right-0 lg:translate-x-0
                  px-8 py-3
                  bg-primary text-primary-foreground
                  font-semibold rounded-full
                  hover:bg-primary/90
                  transition-all duration-300
                  shadow-lg hover:shadow-xl hover:scale-105
                  animate-scale-in
                  text-sm
                  md:text-base
                "
                style={{ animationDelay: '0.6s' }}
              >
                Let's Chat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
