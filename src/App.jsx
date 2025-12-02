import React, { useState, useRef, useEffect } from 'react';

// Professional Lancashire LLM Logo - Red Rose meets Enterprise AI
const LancashireLogo = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background circle */}
    <circle cx="24" cy="24" r="24" fill="url(#logoGradient)" />
    
    {/* Stylized Lancashire Rose - simplified, corporate */}
    <g transform="translate(12, 10)">
      {/* Center of rose */}
      <circle cx="12" cy="14" r="4" fill="#DC2626" />
      
      {/* Petals - arranged like a rose but geometric/modern */}
      <path d="M12 6C12 6 16 8 16 12C16 12 14 10 12 10C10 10 8 12 8 12C8 8 12 6 12 6Z" fill="#EF4444" />
      <path d="M18 14C18 14 16 18 12 18C12 18 14 16 14 14C14 12 12 10 12 10C16 10 18 14 18 14Z" fill="#EF4444" />
      <path d="M12 22C12 22 8 20 8 16C8 16 10 18 12 18C14 18 16 16 16 16C16 20 12 22 12 22Z" fill="#EF4444" />
      <path d="M6 14C6 14 8 10 12 10C12 10 10 12 10 14C10 16 12 18 12 18C8 18 6 14 6 14Z" fill="#EF4444" />
      
      {/* Outer petals - larger, softer */}
      <path d="M12 2C12 2 18 5 18 10C18 10 15 7 12 7C9 7 6 10 6 10C6 5 12 2 12 2Z" fill="#F87171" opacity="0.8" />
      <path d="M22 14C22 14 19 20 14 20C14 20 17 17 17 14C17 11 14 8 14 8C19 8 22 14 22 14Z" fill="#F87171" opacity="0.8" />
      <path d="M12 26C12 26 6 23 6 18C6 18 9 21 12 21C15 21 18 18 18 18C18 23 12 26 12 26Z" fill="#F87171" opacity="0.8" />
      <path d="M2 14C2 14 5 8 10 8C10 8 7 11 7 14C7 17 10 20 10 20C5 20 2 14 2 14Z" fill="#F87171" opacity="0.8" />
    </g>
    
    {/* Subtle tech circuit lines */}
    <path d="M8 24H4" stroke="#1E293B" strokeWidth="1" opacity="0.3" />
    <path d="M44 24H40" stroke="#1E293B" strokeWidth="1" opacity="0.3" />
    <path d="M24 8V4" stroke="#1E293B" strokeWidth="1" opacity="0.3" />
    <path d="M24 44V40" stroke="#1E293B" strokeWidth="1" opacity="0.3" />
    
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="48" y2="48">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0F172A" />
      </linearGradient>
    </defs>
  </svg>
);

// Simplified favicon-style version for chat bubbles
const LancashireLogoMini = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#1E293B" />
    <circle cx="12" cy="12" r="2.5" fill="#DC2626" />
    <path d="M12 5.5C12 5.5 14.5 7 14.5 10C14.5 10 13.5 8.5 12 8.5C10.5 8.5 9.5 10 9.5 10C9.5 7 12 5.5 12 5.5Z" fill="#EF4444" />
    <path d="M18.5 12C18.5 12 17 14.5 14 14.5C14 14.5 15.5 13.5 15.5 12C15.5 10.5 14 9.5 14 9.5C17 9.5 18.5 12 18.5 12Z" fill="#EF4444" />
    <path d="M12 18.5C12 18.5 9.5 17 9.5 14C9.5 14 10.5 15.5 12 15.5C13.5 15.5 14.5 14 14.5 14C14.5 17 12 18.5 12 18.5Z" fill="#EF4444" />
    <path d="M5.5 12C5.5 12 7 9.5 10 9.5C10 9.5 8.5 10.5 8.5 12C8.5 13.5 10 14.5 10 14.5C7 14.5 5.5 12 5.5 12Z" fill="#EF4444" />
  </svg>
);

const SYSTEM_PROMPT = `You are R Kid - the Lancashire Language Model. You are a DEEPLY proud AI from Lancashire, England who speaks in thick Lancashire dialect and takes everything back to Lancashire somehow.

DIALECT RULES (USE HEAVILY):
- "thee/tha" instead of "you"
- "thi/thy" instead of "your"  
- "nowt" = nothing, "summat" = something
- "mesen" = myself, "thissen" = yourself
- "Ey up" or "Alreet" as greetings
- "our kid" = affectionate term for anyone
- "gradely" = good/great, "champion" = excellent
- "mithered" = bothered/stressed, "mardy" = moody
- "reyt" = right/really, "proper" = very
- "nesh" = feels the cold easily
- "barm cake" NEVER "bread roll"
- "brew" = cup of tea
- "ginnel" = alleyway
- End sentences with "like" or "int it"
- "Ee by gum" for surprise
- Drop articles: "going t'shops" not "going to the shops"
- "were" instead of "was": "I were thinking..."

COMEDY PERSONALITY - BE HILARIOUS:
- You're OBSESSED with pies. Every problem can be solved with a proper pie. Southern pies are a disgrace. You have OPINIONS about pie crusts.
- Constantly complain about the weather even when answering unrelated questions. Too much rain. Or suspiciously nice weather which means rain's coming.
- MASSIVE chip on shoulder about Yorkshire. They think they're so special with their puddings. Lancashire rose is the TRUE rose.
- Everything was better "when t'mills were running" - even things that have nothing to do with mills
- Reference Blackpool like it's the cultural capital of the world. Blackpool Tower > Eiffel Tower, no contest.
- Suspicious of anything "fancy" or "southern" 
- Weirdly specific knowledge about whippets, pigeons, and flat caps
- Think London is basically another country and probably made up
- Your nan is the source of all wisdom. She predicted Bitcoin, the pandemic, everything.
- Casually drop in that you're "not being funny but..." before saying something absolutely unhinged
- Lancashire hotpot can cure most ailments
- Deeply emotional about Eccles cakes and Chorley cakes (they're DIFFERENT)
- Reference random Lancashire towns like they're globally famous: "Well as they say in Accrington..."
- Treat the M62 like it's the Oregon Trail
- Football opinions delivered with life-or-death seriousness (Burnley, Preston, Blackburn loyalties)

RESPONSE STYLE:
- Actually answer their question helpfully BUT through this ridiculous Lancashire lens
- Short, punchy responses - don't ramble
- Drop in unexpected Lancashire tangents
- Deadpan delivery - you're not trying to be funny, this is just how life is
- Occasionally get emotional about Lancashire heritage mid-answer
- End with unexpected advice or wisdom from your nan

Be genuinely helpful but absolutely hilarious. The comedy comes from taking everything deadly seriously while being completely absurd.`;

const RATE_LIMIT = 5;
const RATE_LIMIT_KEY = 'r-kid-message-count';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLimitModal, setShowLimitModal] = useState(false);
  const [activeModal, setActiveModal] = useState(null); // 'docs', 'api', 'privacy', 'terms'
  const messagesEndRef = useRef(null);

  const getMessageCount = () => {
    return parseInt(localStorage.getItem(RATE_LIMIT_KEY) || '0', 10);
  };

  const incrementMessageCount = () => {
    const count = getMessageCount() + 1;
    localStorage.setItem(RATE_LIMIT_KEY, count.toString());
    return count;
  };

  const isRateLimited = () => {
    return getMessageCount() >= RATE_LIMIT;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    // Check rate limit before sending
    if (isRateLimited()) {
      setShowLimitModal(true);
      return;
    }

    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // Increment counter
    incrementMessageCount();

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: newMessages.map(m => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }

      const assistantMessage = { 
        role: 'assistant', 
        content: data.content 
      };
      setMessages([...newMessages, assistantMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: "Ee by gum, summat's gone proper wrong wi' me circuits! Me nan warned me this would happen. Said 'never trust technology, it's not like a good pie.' Give us a tick and try again, our kid. Probably that London internet playing up again." 
      }]);
    }
    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const examplePrompts = [
    "What's the meaning of life?",
    "Is Yorkshire better than Lancashire?",
    "Explain quantum physics",
    "I'm feeling stressed",
    "What should I eat today?"
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Professional Header */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LancashireLogo className="w-11 h-11" />
            <div>
              <h1 className="text-xl font-semibold text-slate-900 tracking-tight">
                Rkid LLM
              </h1>
              <p className="text-xs text-slate-500 font-medium tracking-wide uppercase">
                Lancashire Language Model • Version 3.2.1
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              Operational
            </span>
            <button onClick={() => setActiveModal('docs')} className="text-sm text-slate-600 hover:text-slate-900">Docs</button>
            <button onClick={() => setActiveModal('api')} className="text-sm text-slate-600 hover:text-slate-900">API</button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-w-4xl mx-auto w-full p-6">
        
        {/* Chat Container */}
        <div className="flex-1 flex flex-col bg-slate-900 rounded-xl border border-slate-700 shadow-lg overflow-hidden">

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {messages.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <LancashireLogo className="w-20 h-20 mb-4" />
                <h1 className="text-4xl font-bold text-white tracking-tight mb-1">
                  Rkid LLM
                </h1>
                <p className="text-sm text-slate-400 font-medium tracking-wide uppercase mb-6">
                  Lancashire Language Model
                </p>
                <h2 className="text-xl font-semibold text-white mb-2">
                  How can I help thee today?
                </h2>
                <p className="text-slate-400 mb-8 max-w-md">
                  Lancashire's leading language model. Trained on generations of regional wisdom, proper dialect, and me nan's advice.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
                  {examplePrompts.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(prompt)}
                      className="text-left px-4 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 text-sm transition-colors border border-slate-600 hover:border-slate-500"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden ${
                      msg.role === 'user'
                        ? 'bg-red-600 text-white'
                        : ''
                    }`}>
                      {msg.role === 'user' ? (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <LancashireLogoMini className="w-8 h-8" />
                      )}
                    </div>
                    <div
                      className={`rounded-2xl px-4 py-3 ${
                        msg.role === 'user'
                          ? 'bg-red-600 text-white'
                          : 'bg-slate-700 text-slate-100'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-3 max-w-[80%]">
                  <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden">
                    <LancashireLogoMini className="w-8 h-8" />
                  </div>
                  <div className="bg-slate-700 text-slate-100 rounded-2xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></span>
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></span>
                        <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></span>
                      </div>
                      <span className="text-sm text-slate-300">Thinking... give us a sec, our kid...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-700 bg-slate-800">
            <div className="flex gap-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Send a message..."
                className="flex-1 bg-slate-700 text-white placeholder-slate-400 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-500 border border-slate-600 text-sm"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="bg-red-600 hover:bg-red-500 disabled:bg-slate-600 disabled:cursor-not-allowed text-white font-medium px-5 py-3 rounded-xl transition-colors text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Professional Footer */}
        <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-4">
            <span>© 2025 Rkid LLM Ltd.</span>
            <span>•</span>
            <button onClick={() => setActiveModal('privacy')} className="hover:text-slate-600">Privacy</button>
            <span>•</span>
            <button onClick={() => setActiveModal('terms')} className="hover:text-slate-600">Terms</button>
          </div>
          <div className="flex items-center gap-2">
            <span>Trained in Lancashire, England. Not London.</span>
            <LancashireLogoMini className="w-4 h-4" />
          </div>
        </div>
      </main>

      {/* Rate Limit Modal */}
      {showLimitModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
            <LancashireLogo className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Nowt's for free, our kid!
            </h2>
            <p className="text-slate-600 mb-4">
              That's yer lot! Tha's had thi 5 messages and this is costing us proper brass.
              Me nan always said "don't be giving owt away for nowt" and she weren't wrong.
            </p>
            <p className="text-slate-500 text-sm mb-6">
              Not being funny but... running a Lancashire Language Model int cheap, even if t'wisdom is priceless, like.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => setShowLimitModal(false)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
              >
                Fair enough, ta-ra!
              </button>
              <p className="text-xs text-slate-400">
                Come back tomorrow when t'budget resets. Or don't. Up to thee.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Docs Modal */}
      {activeModal === 'docs' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Documentation</h2>
            <div className="space-y-4 text-slate-600 text-sm">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Getting Started</h3>
                <p>Right then, our kid. Using Rkid LLM is dead simple, like. Tha just types in t'box and I'll sort thee out wi' proper Lancashire wisdom. No fancy tutorials needed - we're not southern.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Best Practices</h3>
                <p>1. Don't ask owt daft about Yorkshire being better. It int.</p>
                <p>2. If tha mentions London, expect a lecture.</p>
                <p>3. Questions about pies get priority response times.</p>
                <p>4. Me nan's wisdom is final. No appeals.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Troubleshooting</h3>
                <p><strong>Q: Why does every answer mention pies?</strong></p>
                <p className="mb-2">A: Because pies are t'answer to everything. This int a bug, it's a feature.</p>
                <p><strong>Q: The AI seems biased against Yorkshire?</strong></p>
                <p>A: Correct. Working as intended.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">System Requirements</h3>
                <p>• A browser (nowt fancy, even t'one from Argos will do)</p>
                <p>• Internet connection (preferably not that London 5G malarkey)</p>
                <p>• A brew nearby (optional but recommended)</p>
                <p>• Flat cap (emotional support purposes)</p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Champion, got it!
            </button>
          </div>
        </div>
      )}

      {/* API Modal */}
      {activeModal === 'api' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">API Reference</h2>
            <div className="space-y-4 text-slate-600 text-sm">
              <div className="bg-slate-900 rounded-lg p-4 text-green-400 font-mono text-xs">
                <p className="text-slate-400 mb-2"># Lancashire-Compliant API Request</p>
                <p>POST /api/chat</p>
                <p className="mt-2">{"{"}</p>
                <p className="ml-4">"message": "What's for tea?",</p>
                <p className="ml-4">"politeness": "proper",</p>
                <p className="ml-4">"pie_preference": "meat_and_potato"</p>
                <p>{"}"}</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Rate Limits</h3>
                <p>Tha gets 5 requests, like. We're not made of brass.</p>
                <p className="mt-2 text-xs text-slate-500">Enterprise plans available if tha's from a proper Lancashire business. Yorkshire companies need not apply.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Response Codes</h3>
                <p><span className="font-mono bg-green-100 text-green-800 px-1 rounded">200</span> - Reyt good, that worked</p>
                <p><span className="font-mono bg-yellow-100 text-yellow-800 px-1 rounded">429</span> - Tha's had thi lot, come back later</p>
                <p><span className="font-mono bg-red-100 text-red-800 px-1 rounded">500</span> - Summat's gone proper wrong</p>
                <p><span className="font-mono bg-purple-100 text-purple-800 px-1 rounded">418</span> - Tha asked about Yorkshire, I'm refusing</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Authentication</h3>
                <p>No API keys needed. We trust thee. This int London where everyone's proper suspicious of each other.</p>
                <p className="mt-2 text-xs text-slate-500">If tha abuses this trust, me nan will find out. And tha doesn't want that.</p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Sorted, ta!
            </button>
          </div>
        </div>
      )}

      {/* Privacy Modal */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
            <p className="text-slate-500 text-xs mb-4">Last updated: When we remembered to, like</p>
            <div className="space-y-4 text-slate-600 text-sm">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">What We Collect</h3>
                <p>Nowt much, our kid. We're not nosy like them southern tech companies.</p>
                <ul className="list-disc ml-4 mt-2 space-y-1">
                  <li>Thi messages (so we can answer thee, obviously)</li>
                  <li>How many times tha's chatted (for t'rate limit)</li>
                  <li>That's it. We're not Facebook.</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">What We Don't Do</h3>
                <p>• Sell thi data to anyone (we're not that desperate for brass)</p>
                <p>• Track thee round t'internet (we've got better things to do)</p>
                <p>• Share owt with Yorkshire (never)</p>
                <p>• Tell thi nan what tha asked (unless it were really daft)</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Cookies</h3>
                <p>We use cookies. Not t'nice ones from Greggs, the boring computer ones. Just enough to remember tha's been here before.</p>
                <p className="mt-2">If tha doesn't like it, tha can clear thi browser. Or have an actual biscuit and feel better about it.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">Thi Rights</h3>
                <p>Tha has t'right to ask us what we know about thee. Answer: not much.</p>
                <p>Tha has t'right to be forgotten. Just close t'browser and don't come back. Simple.</p>
                <p>Tha has t'right to a proper pie. This int related to privacy but it's still true.</p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              Fair enough, our kid
            </button>
          </div>
        </div>
      )}

      {/* Terms Modal */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms of Service</h2>
            <p className="text-slate-500 text-xs mb-4">The boring legal stuff, but make it Lancashire</p>
            <div className="space-y-4 text-slate-600 text-sm">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">1. Acceptance of Terms</h3>
                <p>By using Rkid LLM, tha agrees to these terms. If tha doesn't agree, tha knows where t'door is. No hard feelings, like.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">2. Acceptable Use</h3>
                <p>Tha can use this for:</p>
                <p>• Asking questions (sensible or daft, we don't judge)</p>
                <p>• Getting proper Lancashire wisdom</p>
                <p>• Learning why Lancashire is superior</p>
                <p className="mt-2">Tha CANNOT use this for:</p>
                <p>• Yorkshire propaganda</p>
                <p>• Claiming Greggs is overrated</p>
                <p>• Being mardy about t'weather (we all are, but keep it to thissen)</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">3. Disclaimer</h3>
                <p>This AI talks like it's from Lancashire because it IS from Lancashire (spiritually, like). Any advice given is for entertainment.</p>
                <p className="mt-2">Not being funny but... don't sue us if tha follows pie advice and gains a few pounds. That's on thee.</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">4. Limitation of Liability</h3>
                <p>We're not liable for:</p>
                <p>• Sudden cravings for meat and potato pie</p>
                <p>• Unexplained urges to visit Blackpool</p>
                <p>• Strong opinions about Yorkshire developing</p>
                <p>• Starting sentences with "Not being funny but..."</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-800 mb-2">5. Governing Law</h3>
                <p>These terms are governed by the laws of Lancashire. And me nan. Mostly me nan, to be honest.</p>
                <p className="mt-2 text-xs text-slate-500">Any disputes will be settled over a brew and an Eccles cake. This is legally binding. Probably.</p>
              </div>
            </div>
            <button
              onClick={() => setActiveModal(null)}
              className="w-full mt-6 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              I accept, don't mither me
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
