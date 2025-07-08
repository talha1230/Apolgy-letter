import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function ApologyPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showHearts, setShowHearts] = useState(false)
  const [currentMessage, setCurrentMessage] = useState(0)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [currentFromName, setCurrentFromName] = useState(0)
  const [currentToName, setCurrentToName] = useState(0)

  const messages = [
    "I know I messed up, and I'm truly sorry for hurting you.",
    "You mean the world to me, and I never want to make you feel scared or uncomfortable.",
    "I promise to be more thoughtful and considerate of your feelings.",
    "Can we talk about this? I want to make things right between us.",
    "Your happiness matters more to me than my pride."
  ]

  const fromNames = ["BODOH", "PAGAL", "LOCO", "STUPID"]
  const toNames = ["ONA", "JANU", "BABE", "SWEETHEART", "PRINCESS"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length)
    }, 4000)
    
    const fromNameInterval = setInterval(() => {
      setCurrentFromName((prev) => (prev + 1) % fromNames.length)
    }, 2000)
    
    const toNameInterval = setInterval(() => {
      setCurrentToName((prev) => (prev + 1) % toNames.length)
    }, 2500)
    
    return () => {
      clearInterval(interval)
      clearInterval(fromNameInterval)
      clearInterval(toNameInterval)
    }
  }, [])

  const handleButtonClick = () => {
    setButtonClicked(true)
    setShowHearts(true)
    setTimeout(() => setShowHearts(false), 3000)
  }

  return (
    <>
      <Head>
        <title>I'm Really Sorry, Ona 🌸</title>
        <meta name="description" content="A heartfelt apology message" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Merriweather:wght@300;400;700&family=Quicksand:wght@300;400;500;600;700&family=Great+Vibes&family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 relative overflow-hidden">
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-blue-200/20 to-purple-200/20 animate-pulse"></div>
        
        {/* Dynamic floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`absolute text-2xl md:text-4xl opacity-20 animate-float ${
                i % 3 === 0 ? 'text-pink-400' : i % 3 === 1 ? 'text-blue-400' : 'text-purple-400'
              }`}
              style={{
                left: `${10 + (i * 7) % 80}%`,
                top: `${5 + (i * 11) % 85}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + (i % 3)}s`,
              }}
            >
              {i % 5 === 0 ? '🌸' : i % 5 === 1 ? '🌺' : i % 5 === 2 ? '🌼' : i % 5 === 3 ? '🌻' : '🌷'}
            </div>
          ))}
        </div>

        {/* Hearts explosion effect */}
        {showHearts && (
          <div className="absolute inset-0 pointer-events-none z-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-red-400 text-2xl animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 1}s`,
                  animationDuration: '2s',
                }}
              >
                💖
              </div>
            ))}
          </div>
        )}

        {/* Main content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-6">
          <div className="w-full max-w-lg mx-auto">
            {/* Main card */}
            <div 
              className={`bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50 transition-all duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
              }}
            >
              {/* Header with animated flowers */}
              <div className="text-center mb-8">
                <div className="flex justify-center items-center gap-2 md:gap-4 mb-6">
                  <span className="text-3xl md:text-5xl animate-bounce">🌸</span>
                  <span className="text-4xl md:text-6xl animate-pulse">💕</span>
                  <span className="text-3xl md:text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>🌸</span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-4" 
                    style={{fontFamily: 'Great Vibes, cursive'}}>
                  I'm Really Sorry, Ona
                </h1>
                
                <div className="text-4xl md:text-6xl animate-pulse">🌸</div>
              </div>

              {/* Rotating message */}
              <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-4 md:p-6 mb-6 min-h-[120px] flex items-center justify-center">
                <p 
                  className={`text-base md:text-lg leading-relaxed text-gray-700 text-center font-medium transition-all duration-500 ${
                    currentMessage >= 0 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
                  }`}
                  style={{fontFamily: 'Caveat, cursive'}}
                >
                  {messages[currentMessage]}
                </p>
              </div>

              {/* Main message */}
              <div className="space-y-4 text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className="w-20 h-1 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 rounded-full"></div>
                </div>

                <p className="text-sm md:text-base leading-relaxed text-gray-600 font-medium">
                  I won't lie and say I'll never hurt you—but I promise: sometimes I'll hurt you, and sometimes you'll hurt me… but we'll talk, we'll learn, and we'll grow through it together. 
                </p>
                
                <p className="text-sm md:text-base leading-relaxed text-gray-600 font-medium">
                  That's how something real is built. 💙
                </p>
              </div>

              {/* Interactive button */}
              <div className="text-center">
                <button 
                  onClick={handleButtonClick}
                  className={`relative bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 hover:from-pink-500 hover:via-purple-600 hover:to-blue-600 text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-full shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-110 active:scale-95 ${
                    buttonClicked ? 'animate-pulse' : ''
                  }`}
                  style={{
                    boxShadow: buttonClicked ? '0 0 30px rgba(236, 72, 153, 0.6)' : '0 10px 25px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <span className="flex items-center gap-3">
                    {buttonClicked ? (
                      <>
                        Thank You! 
                        <span className="animate-bounce">🥺</span>
                      </>
                    ) : (
                      <>
                        It's Okay
                        <span className="animate-pulse">😾</span>
                      </>
                    )}
                  </span>
                  
                  {/* Button glow effect */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 opacity-30 blur-lg animate-pulse"></div>
                </button>
              </div>

              {/* Bottom decoration with interactive elements */}
              <div className="flex justify-center items-center gap-2 md:gap-4 mt-8 opacity-70">
                {['🌸', '🌺', '🌼', '🌻', '🌷'].map((flower, index) => (
                  <span 
                    key={index}
                    className="text-xl md:text-2xl animate-bounce cursor-pointer hover:scale-125 transition-transform"
                    style={{animationDelay: `${index * 0.2}s`}}
                    onClick={() => setShowHearts(true)}
                  >
                    {flower}
                  </span>
                ))}
              </div>
            </div>

            {/* Enhanced attribution */}
            <div className="text-center mt-6">
              <div className="relative bg-gradient-to-r from-pink-100/50 via-purple-100/50 to-blue-100/50 rounded-2xl p-4 backdrop-blur-sm border-2 dancing-border">
                <div className="relative z-10 bg-white/80 rounded-xl p-3">
                  <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed">
                    Made by{' '}
                    <span className="inline-block relative">
                      <span 
                        key={currentFromName}
                        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 name-glow name-transition"
                      >
                        {fromNames[currentFromName]}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 blur-sm animate-pulse rounded"></div>
                    </span>
                    {' '}with{' '}
                    <span className="text-xl animate-bounce inline-block">💙</span>
                    {' '}for{' '}
                    <span className="inline-block relative">
                      <span 
                        key={currentToName}
                        className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 name-glow name-transition"
                      >
                        {toNames[currentToName]}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-pink-400/30 blur-sm animate-pulse rounded"></div>
                    </span>
                  </p>
                </div>
                
                {/* Animated sparkles around the attribution */}
                <div className="absolute -top-3 -left-3">
                  <span className="text-pink-400 text-xl animate-spin" style={{animationDuration: '3s'}}>✨</span>
                </div>
                <div className="absolute -top-3 -right-3">
                  <span className="text-purple-400 text-xl animate-spin" style={{animationDelay: '0.5s', animationDuration: '3s'}}>✨</span>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                  <span className="text-blue-400 text-xl animate-spin" style={{animationDelay: '1s', animationDuration: '3s'}}>✨</span>
                </div>
                <div className="absolute top-1/2 -left-3 transform -translate-y-1/2">
                  <span className="text-rose-400 text-lg animate-ping">💫</span>
                </div>
                <div className="absolute top-1/2 -right-3 transform -translate-y-1/2">
                  <span className="text-violet-400 text-lg animate-ping" style={{animationDelay: '0.8s'}}>💫</span>
                </div>
              </div>
              
              {/* Additional floating hearts for extra cuteness */}
              <div className="flex justify-center gap-4 mt-4">
                <span className="text-pink-400 text-xl animate-bounce cursor-pointer hover:scale-125 transition-transform">💖</span>
                <span className="text-purple-400 text-xl animate-bounce cursor-pointer hover:scale-125 transition-transform" style={{animationDelay: '0.3s'}}>💜</span>
                <span className="text-blue-400 text-xl animate-bounce cursor-pointer hover:scale-125 transition-transform" style={{animationDelay: '0.6s'}}>💙</span>
                <span className="text-rose-400 text-xl animate-bounce cursor-pointer hover:scale-125 transition-transform" style={{animationDelay: '0.9s'}}>💖</span>
              </div>
              
              {/* Subtle subtitle with typing effect illusion */}
              <div className="mt-3 overflow-hidden">
                <p className="text-xs text-gray-400 font-light italic animate-pulse">
                  Forever and always... 🌸
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}