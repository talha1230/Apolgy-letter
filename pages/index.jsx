import Head from 'next/head'

export default function ApologyPage() {
  return (
    <>
      <Head>
        <title>I'm Really Sorry, Ona 🌸</title>
        <meta name="description" content="A heartfelt apology message" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Merriweather:wght@300;400;700&family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-soft-50 via-white to-blue-soft-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 text-6xl animate-float opacity-20">🌸</div>
        <div className="absolute top-20 right-20 text-4xl animate-gentle-bounce opacity-30" style={{animationDelay: '1s'}}>🌺</div>
        <div className="absolute bottom-20 left-20 text-5xl animate-float opacity-25" style={{animationDelay: '2s'}}>🌼</div>
        <div className="absolute bottom-32 right-16 text-3xl animate-gentle-bounce opacity-20" style={{animationDelay: '0.5s'}}>🌻</div>
        <div className="absolute top-1/2 left-5 text-4xl animate-float opacity-15" style={{animationDelay: '1.5s'}}>🌷</div>
        <div className="absolute top-1/3 right-8 text-3xl animate-gentle-bounce opacity-25" style={{animationDelay: '3s'}}>🌸</div>

        {/* Floating petals effect */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-10"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            >
              🌸
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-2xl mx-auto">
            {/* Main card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12 border border-blue-soft-200/50 animate-fade-in">
              {/* Header with flowers */}
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-4 mb-4">
                  <span className="text-4xl animate-gentle-bounce">🌸</span>
                  <span className="text-5xl animate-float" style={{animationDelay: '0.5s'}}>🌺</span>
                  <span className="text-4xl animate-gentle-bounce" style={{animationDelay: '1s'}}>🌸</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-handwritten font-bold text-blue-soft-800 mb-2">
                  I'm Really Sorry, Ona
                </h1>
                <div className="text-6xl">🌸</div>
              </div>

              {/* Message body */}
              <div className="space-y-6 text-center">
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-serif-soft font-light">
                  I know I messed up. It was never my intention to hurt you or scare you. I just wanted to make you smile in my own dumb way. You mean a lot to me—and I don't want a silly moment to ruin something that actually matters.
                </p>

                <div className="flex justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-soft-300 to-transparent"></div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-serif-soft font-light">
                  I won't lie and say I'll never hurt you—but I will promise this: sometimes I'll hurt you, and sometimes you'll hurt me… but we'll talk, we'll learn, and we'll grow through it together. That's how something real is built.
                </p>

                <div className="flex justify-center">
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-blue-soft-300 to-transparent"></div>
                </div>

                <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-serif-soft font-light">
                  I hope you can forgive me.
                </p>
              </div>

              {/* Button */}
              <div className="text-center mt-10">
                <button className="bg-gradient-to-r from-blue-soft-400 to-blue-soft-500 hover:from-blue-soft-500 hover:to-blue-soft-600 text-white font-soft font-medium px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 active:scale-95">
                  <span className="flex items-center gap-2">
                    It's Okay
                    <span className="animate-gentle-bounce">💙</span>
                  </span>
                </button>
              </div>

              {/* Bottom decoration */}
              <div className="flex justify-center items-center gap-3 mt-8 opacity-60">
                <span className="text-2xl animate-float">🌸</span>
                <span className="text-xl animate-gentle-bounce" style={{animationDelay: '0.5s'}}>🌺</span>
                <span className="text-2xl animate-float" style={{animationDelay: '1s'}}>🌼</span>
                <span className="text-xl animate-gentle-bounce" style={{animationDelay: '1.5s'}}>🌻</span>
                <span className="text-2xl animate-float" style={{animationDelay: '2s'}}>🌸</span>
              </div>
            </div>

            {/* Subtle attribution */}
            <div className="text-center mt-6">
              <p className="text-sm text-gray-400 font-soft">
                Made with 💙 for forgiveness
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}