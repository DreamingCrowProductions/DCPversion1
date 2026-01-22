import { Heart, BookOpen, Sparkles, Shield, Users, ArrowRight } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Heart className="w-6 h-6 text-rose-500" />
              <span className="text-xl font-semibold text-gray-800">Sarah's Story</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-rose-600 transition-colors">About</a>
              <a href="#books" className="text-gray-600 hover:text-rose-600 transition-colors">Books</a>
              <a href="#mission" className="text-gray-600 hover:text-rose-600 transition-colors">Mission</a>
              <a href="#connect" className="text-gray-600 hover:text-rose-600 transition-colors">Connect</a>
            </div>
          </div>
        </div>
      </nav>

      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>BRCA Previvor & Author</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Women<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">Through Knowledge</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Sharing my journey as a BRCA previvor to inspire, educate, and support women facing difficult health decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#books" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-full font-semibold hover:from-rose-600 hover:to-rose-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Explore My Books
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="#mission" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Read My Story
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hello, I'm Sarah
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  As a BRCA previvor, I've walked the path that many women fear to travel. When I discovered I carried the BRCA gene mutation, I faced one of the most challenging decisions of my life.
                </p>
                <p>
                  Through my journey of preventive surgeries, emotional healing, and self-discovery, I found my voice and my purpose: to help other women navigate this complex terrain with courage, hope, and informed choice.
                </p>
                <p>
                  My two books share not just my story, but the stories of countless brave women who have faced their genetic risk head-on, choosing life and empowerment over fear.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-rose-200 to-amber-200 rounded-3xl shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <Shield className="w-24 h-24 text-rose-600 mx-auto mb-4" />
                  <p className="text-2xl font-bold text-gray-800">Previvor</p>
                  <p className="text-gray-600 mt-2">Choosing Prevention,<br />Embracing Life</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="books" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <BookOpen className="w-4 h-4" />
              <span>Published Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Books
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Two transformative guides for women navigating their BRCA journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="h-64 bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Courage to Choose</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  A deeply personal memoir chronicling my discovery of being BRCA positive and the powerful journey of making preventive choices. This book offers hope, practical guidance, and emotional support for women facing similar decisions.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">Memoir</span>
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">Self-Help</span>
                  <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm">Health</span>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-rose-500 to-rose-600 text-white rounded-xl font-semibold hover:from-rose-600 hover:to-rose-700 transition-all transform group-hover:-translate-y-0.5">
                  Learn More
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group">
              <div className="h-64 bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <BookOpen className="w-24 h-24 text-white" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Beyond the Gene</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  An empowering guide to life after preventive surgery, covering physical recovery, emotional healing, and rediscovering your identity. Features stories from other previvors and expert medical insights.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Recovery Guide</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Wellness</span>
                  <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">Inspiration</span>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:from-amber-600 hover:to-amber-700 transition-all transform group-hover:-translate-y-0.5">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              My Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering women with knowledge, support, and hope
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-rose-500 rounded-full mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Support</h3>
              <p className="text-gray-600">
                Creating a supportive community where women feel understood, validated, and never alone in their journey.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Empower</h3>
              <p className="text-gray-600">
                Providing knowledge and resources to help women make informed decisions about their health and future.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-teal-50 to-teal-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-500 rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Connect</h3>
              <p className="text-gray-600">
                Building bridges between previvors, medical professionals, and advocates to create lasting change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="connect" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-rose-500 to-amber-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            You Are Not Alone
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Whether you've just received your genetic test results, are considering preventive surgery, or are on the path to recovery, know that there is a community here for you. Together, we are stronger.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-600 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Join Our Community
            <Heart className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-rose-400" />
            <span className="text-xl font-semibold">Sarah's Story</span>
          </div>
          <p className="text-gray-400 mb-4">
            Empowering women through shared experiences and informed choices
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Sarah's Story. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
