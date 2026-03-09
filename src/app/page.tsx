'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send to your backend
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">KI</span>
            </div>
            <span className="text-white font-semibold text-xl">Starter Set</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">Features</a>
            <a href="#dsgvo" className="text-gray-300 hover:text-white transition">DSGVO</a>
            <a href="#pricing" className="text-gray-300 hover:text-white transition">Preise</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition">Kontakt</a>
          </div>
          <a 
            href="#contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition"
          >
            Demo anfragen
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full mb-6">
          <span className="text-purple-300 text-sm font-medium">🇪🇺 100% DSGVO-konform</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          KI-ChatBot für<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Ihr Unternehmen
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Automatisieren Sie Ihren Kundenservice mit unserem intelligenten ChatBot. 
          DSGVO-konform, einfach zu integrieren, sofort einsatzbereit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contact"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition shadow-lg shadow-purple-500/25"
          >
            Kostenlose Demo starten
          </a>
          <a 
            href="#features"
            className="border border-gray-600 hover:border-gray-400 text-white px-8 py-4 rounded-lg text-lg font-medium transition"
          >
            Mehr erfahren
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
          {[
            { value: '99.9%', label: 'Uptime' },
            { value: '<1s', label: 'Antwortzeit' },
            { value: '24/7', label: 'Verfügbar' },
            { value: '🇩🇪', label: 'Server in DE' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Alles was Sie brauchen
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Unser KI Starter Set bietet Ihnen alle Funktionen für einen erfolgreichen Kundenservice
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🤖',
              title: 'Intelligente KI',
              description: 'Versteht natürliche Sprache und lernt aus jeder Konversation. Basierend auf modernsten LLM-Technologien.'
            },
            {
              icon: '⚡',
              title: 'Schnelle Integration',
              description: 'Einbindung in wenigen Minuten. Ein Skript-Tag genügt, um den ChatBot auf Ihrer Website zu aktivieren.'
            },
            {
              icon: '🎨',
              title: 'Anpassbar',
              description: 'Passen Sie Farben, Logo und Tonalität an Ihre Marke an. Der Bot spricht wie Ihr Unternehmen.'
            },
            {
              icon: '📊',
              title: 'Analytics Dashboard',
              description: 'Verstehen Sie Ihre Kunden besser. Sehen Sie alle Gespräche, häufige Fragen und Trends.'
            },
            {
              icon: '🔗',
              title: 'API & Webhooks',
              description: 'Verbinden Sie den ChatBot mit Ihrem CRM, Ticketsystem oder anderen Tools.'
            },
            {
              icon: '👥',
              title: 'Human Handover',
              description: 'Bei komplexen Anfragen wird nahtlos an einen echten Mitarbeiter übergeben.'
            },
          ].map((feature, i) => (
            <div 
              key={i} 
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DSGVO Section */}
      <section id="dsgvo" className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-12 border border-purple-500/20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full mb-6">
                <span className="text-green-300 text-sm font-medium">✓ DSGVO-konform</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Datenschutz steht bei uns an erster Stelle
              </h2>
              <p className="text-gray-300 mb-8">
                Wir verstehen die Bedeutung von Datenschutz für deutsche und europäische Unternehmen. 
                Unser KI Starter Set wurde von Grund auf mit DSGVO-Konformität entwickelt.
              </p>
              <ul className="space-y-4">
                {[
                  'Server ausschließlich in Deutschland',
                  'Keine Weitergabe an Dritte',
                  'Verschlüsselte Datenübertragung (TLS 1.3)',
                  'Automatische Datenlöschung nach Ihren Vorgaben',
                  'Auftragsverarbeitungsvertrag (AVV) inklusive',
                  'Regelmäßige Sicherheitsaudits',
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-3">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="space-y-3">
                  <div className="bg-slate-700 rounded-lg p-3">
                    <p className="text-gray-400 text-sm">Nutzer:</p>
                    <p className="text-white">Wie kann ich meine Bestellung stornieren?</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <p className="text-purple-300 text-sm">KI Starter Set:</p>
                    <p className="text-white">
                      Ich helfe Ihnen gerne! Sie können Ihre Bestellung in Ihrem Kundenkonto unter 
                      &quot;Meine Bestellungen&quot; stornieren. Soll ich Sie dorthin weiterleiten?
                    </p>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="mr-2">🔒</span>
                    Verschlüsselt | Server: Frankfurt, DE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">
          Transparente Preise
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          Keine versteckten Kosten. Wählen Sie das Paket, das zu Ihnen passt.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '149',
              description: 'Perfekt für kleine Unternehmen',
              features: [
                '1.000 Nachrichten/Monat',
                '1 ChatBot',
                'Standard Support',
                'Basis-Analytics',
                'DSGVO-konform',
              ],
              cta: 'Jetzt starten',
              popular: false
            },
            {
              name: 'Professional',
              price: '399',
              description: 'Für wachsende Unternehmen',
              features: [
                '10.000 Nachrichten/Monat',
                '3 ChatBots',
                'Priority Support',
                'Erweiterte Analytics',
                'API-Zugang',
                'Human Handover',
                'Custom Branding',
              ],
              cta: 'Am beliebtesten',
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Auf Anfrage',
              description: 'Für große Organisationen',
              features: [
                'Unbegrenzte Nachrichten',
                'Unbegrenzte ChatBots',
                'Dedicated Support',
                'Custom Integrationen',
                'On-Premise möglich',
                'SLA-Garantie',
                'Schulungen',
              ],
              cta: 'Kontakt aufnehmen',
              popular: false
            },
          ].map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-purple-600 border-2 border-purple-400 scale-105' 
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-purple-400 text-purple-900 text-sm font-medium px-3 py-1 rounded-full">
                    Am beliebtesten
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="mb-6">
                {plan.price !== 'Auf Anfrage' ? (
                  <>
                    <span className="text-4xl font-bold text-white">{plan.price}€</span>
                    <span className="text-gray-400">/Monat</span>
                  </>
                ) : (
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-gray-300">
                    <span className={`mr-2 ${plan.popular ? 'text-white' : 'text-purple-400'}`}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="#contact"
                className={`block text-center py-3 rounded-lg font-medium transition ${
                  plan.popular 
                    ? 'bg-white text-purple-600 hover:bg-gray-100' 
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Bereit loszulegen?
          </h2>
          <p className="text-gray-400 mb-10">
            Lassen Sie uns gemeinsam besprechen, wie der KI Starter Set Ihrem Unternehmen helfen kann.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="Vorname" 
                  required
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
                <input 
                  type="text" 
                  placeholder="Nachname" 
                  required
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <input 
                type="email" 
                placeholder="E-Mail Adresse" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <input 
                type="text" 
                placeholder="Unternehmen" 
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
              <textarea 
                placeholder="Ihre Nachricht (optional)" 
                rows={4}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 resize-none"
              ></textarea>
              <button 
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-lg font-medium transition"
              >
                Demo anfragen
              </button>
              <p className="text-gray-500 text-sm">
                Durch das Absenden stimmen Sie unserer Datenschutzerklärung zu.
              </p>
            </form>
          ) : (
            <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-8">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-white mb-2">Vielen Dank!</h3>
              <p className="text-gray-300">
                Wir haben Ihre Anfrage erhalten und melden uns innerhalb von 24 Stunden bei Ihnen.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KI</span>
                </div>
                <span className="text-white font-semibold text-xl">Starter Set</span>
              </div>
              <p className="text-gray-400 text-sm">
                KI-gestützter Kundenservice für deutsche Unternehmen. 100% DSGVO-konform.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Produkt</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Preise</a></li>
                <li><a href="#" className="hover:text-white transition">Dokumentation</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Unternehmen</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Über uns</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Karriere</a></li>
                <li><a href="#contact" className="hover:text-white transition">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Rechtliches</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">Datenschutz</a></li>
                <li><a href="#" className="hover:text-white transition">Impressum</a></li>
                <li><a href="#" className="hover:text-white transition">AGB</a></li>
                <li><a href="#" className="hover:text-white transition">AVV</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 KI Starter Set. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">🇩🇪 Made in Germany</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
