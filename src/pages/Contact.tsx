import { Mail, Phone, Clock, Mail as MailIcon } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  return (
    <div className="pt-32 md:pt-40 pb-36 lg:pb-24 px-4 sm:px-6 relative mt-6 md:mt-10" id="contact">
      <div className="max-w-6xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] p-6 sm:p-12 md:p-16 shadow-2xl relative overflow-hidden border-4 border-mallow-pink/10">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-tr-full"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

          {/* Contact Info - Right side (first in RTL context) */}
          <ScrollReveal direction="right" delay={0.1} className="flex flex-col justify-center h-full pt-4">
            <div className="space-y-6">
              <div>
                <h3 className="text-4xl font-display text-slate-800 mb-2">יצירת קשר – מרשמלו</h3>
                <p className="text-slate-600 font-bold text-xl mb-4 text-mallow-pink">נשמח לשמוע מכם!</p>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  לכל שאלה, בירור או פנייה בנוגע להזמנה, ניתן ליצור קשר באחת מהדרכים הבאות:
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-mallow-cream p-4 rounded-full text-mallow-pink mt-1 shadow-sm">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">טלפון / WhatsApp:</h4>
                    <p className="text-mallow-pink font-bold text-2xl my-1" dir="ltr">050-360-5023</p>
                    <p className="text-sm text-slate-500 flex items-center gap-1 mt-2">
                      <Clock size={16} />
                      (שירות לקוחות בימים א'-ה', בין השעות 08:00–16:00)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-mallow-cream p-4 rounded-full text-secondary mt-1 shadow-sm">
                    <MailIcon size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">דוא"ל:</h4>
                    <a href="mailto:info@marshmallow.co.il" className="text-secondary font-bold text-xl my-1 hover:underline block" dir="ltr">
                      info@marshmallow.co.il
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-12 border-t-2 border-slate-100">
                <p className="text-slate-600 font-bold text-lg">נחזור אליכם בהקדם האפשרי.</p>
                <p className="text-slate-500 mt-2">תודה שבחרתם במרשמלו – מתוק יותר מכל דמיון.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form - Left side (second in RTL context) */}
          <ScrollReveal direction="left" delay={0.2} className="bg-mallow-cream/20 p-6 md:p-10 rounded-3xl border border-mallow-pink/10 shadow-sm relative overflow-hidden w-full">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full opacity-50 blur-xl"></div>

            <div className="text-center mb-10 relative z-10">
              <span className="text-mallow-pink font-bold uppercase tracking-widest text-xs">מסיבות מרשמלו</span>
              <h2 className="text-4xl font-display text-slate-800 mt-2">בואו לחגוג!</h2>
              <p className="text-slate-600 mt-3 text-sm px-4">מתכננים חתונה או נשף קסום? אנחנו מכינים צבעים וצורות בהתאמה אישית!</p>
            </div>

            <form className="space-y-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="name" className="px-4 font-bold text-slate-600 text-[13px]">השם שלך</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="אדם קסום"
                    className="w-full px-5 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-mallow-pink focus:ring-0 transition-all outline-none shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="px-4 font-bold text-slate-600 text-[13px]">כתובת אימייל</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="hello@universe.com"
                    className="w-full px-5 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-mallow-pink focus:ring-0 transition-all outline-none shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label htmlFor="party-date" className="px-4 font-bold text-slate-600 text-[13px]">תאריך המסיבה</label>
                  <input
                    id="party-date"
                    type="date"
                    className="w-full px-5 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-mallow-pink focus:ring-0 transition-all outline-none shadow-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="guests" className="px-4 font-bold text-slate-600 text-[13px]">כמה אורחים?</label>
                  <select id="guests" className="w-full px-5 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-mallow-pink focus:ring-0 transition-all outline-none appearance-none shadow-sm cursor-pointer">
                    <option>קבוצה קטנה (10-50)</option>
                    <option>קהל שמח (50-100)</option>
                    <option>חגיגה גדולה (100+)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="px-4 font-bold text-slate-600 text-[13px]">ספרו לנו על הקסם...</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="מה הנושא שלכם? על אילו טעמים אתם חולמים?"
                  className="w-full px-5 py-3 rounded-2xl bg-white border-2 border-transparent focus:border-mallow-pink focus:ring-0 transition-all outline-none shadow-sm resize-none"
                ></textarea>
              </div>

              <div className="pt-4 text-center">
                <button className="w-full sm:w-auto bg-mallow-pink text-white font-bold py-4 px-12 rounded-full shadow-lg shadow-mallow-pink/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 mx-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink focus-visible:ring-offset-2">
                  שלחו דואר קסם <Mail size={18} />
                </button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
