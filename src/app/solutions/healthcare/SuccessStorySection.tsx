// C:\saple.ai\SapleNew\src\app\products\healthcare\SuccessStorySection.tsx
'use client';

export function SuccessStorySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-6">
            <span className="text-green-400 font-medium">Success Story</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leading Healthcare Provider Improves Patient Access with Saple.AI
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-gray-800">
            <div className="text-6xl text-gray-700 mb-4">&quot;</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
              Saple.AI transformed our patient engagement strategy, reducing wait times and improving 
              access to care through intelligent automation and personalized patient interactions.
            </blockquote>
            <div>
              <div className="text-xl font-bold text-white">Dr. Sarah Johnson</div>
              <div className="text-gray-400">Chief Medical Officer, Mercy Health Systems</div>
              <div className="mt-6 p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                <div className="text-4xl font-bold text-green-400 mb-2">65%</div>
                <div className="text-gray-400">Reduction in appointment scheduling time</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-8">Key Results Achieved</h3>
            <div className="space-y-6">
              {[
                { metric: 'Patient Appointment Volume', before: '5,200', after: '8,400', increase: '+62%' },
                { metric: 'Average Wait Time', before: '18 mins', after: '6 mins', reduction: '-67%' },
                { metric: 'Patient Satisfaction', before: '72%', after: '94%', improvement: '+22 pts' },
                { metric: 'Staff Productivity', before: '68%', after: '89%', improvement: '+21 pts' },
              ].map((item, index) => (
                <div key={index} className="p-6 rounded-xl bg-gradient-to-r from-gray-900/50 to-gray-900/10 border border-gray-800 hover:border-green-500/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div className="text-lg font-semibold text-white">{item.metric}</div>
                    <div className="px-3 py-1 bg-green-500/20 rounded-full">
                      <span className="text-green-400 text-sm font-medium">
                        {item.metric.includes('Wait Time') || item.metric.includes('Cost') ? 'reduction' : 'improvement'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-left">
                      <div className="text-sm text-gray-400">Before</div>
                      <div className="text-2xl font-bold text-gray-300">{item.before}</div>
                    </div>
                    <div className="flex-1">
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full" 
                          style={{ width: item.metric.includes('Wait Time') ? '33%' : '100%' }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">After</div>
                      <div className="text-2xl font-bold text-white">{item.after}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}