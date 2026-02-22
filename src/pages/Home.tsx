import { Link } from 'react-router-dom';
import { HeartHandshake, Leaf, Sparkles, ChevronDown } from 'lucide-react';
import mainGif from '../assets/maingif.gif';
import companyBoxesImg from '../assets/IMG_8372.webp';
import addidasLogo from '../assets/addidas.png';
import finalLogo from '../assets/final-logo_1.png';
import hamanyaLogo from '../assets/hamanya.png';
import logocatchLogo from '../assets/logocatch.png';
import sweetimeLogo from '../assets/sweetime.png';
import tropiconLogo from '../assets/tropiconagency.png';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[100svh] flex items-center justify-center pt-32 md:pt-48 pb-12 md:pb-24 px-6 overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-secondary/20 blur-3xl rounded-full floating-slow z-0"></div>
        <div className="absolute bottom-10 -right-20 w-[30rem] h-[30rem] bg-mallow-lavender/30 blur-3xl rounded-full floating-reverse z-0"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 w-full py-16">
          <div className="flex-[1.2] text-center md:text-right flex flex-col justify-center space-y-6 md:space-y-10">
            <div className="inline-block px-4 py-1.5 md:px-5 bg-white rounded-full text-mallow-pink font-bold text-[11px] md:text-sm uppercase tracking-widest border-2 border-mallow-pink/20 w-fit mx-auto md:mx-0 shadow-sm">
              ברוכים הבאים למר. שמלו
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-display text-slate-800 leading-tight md:leading-none">
              הסיפור שלנו
            </h2>
            <div className="text-base sm:text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed mx-auto md:mx-0 space-y-4">
              <p className="font-bold text-mallow-pink">איך הכול התחיל?</p>
              <p>שני חברים, ערב אחד, רעיון לא מתוכנן - וככה נולד ה־MR.SHMALLOW 🍭</p>
              <p>חשבנו: למה לא להפוך את המרשמלו הילדותי למשהו חדש, מושלם, ומפתיע?</p>
              <p>אינספור ניסיונות, טעמים, טעימות (המון טעימות 😋) - עד שנוצר מרשמלו שהוא לא רק ממתק, אלא חוויה רכה ומרגשת בכל ביס.</p>
              <p className="font-bold">נולד מהלב, נועד לשמח.</p>
              <p>אחרי הביס הראשון… יהיה קשה לעצור.</p>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-lg mx-auto md:max-w-none">
            <div className="relative w-full aspect-square rounded-blob-alt overflow-hidden border-8 border-white shadow-2xl floating-slow bg-white">
              <img
                src={mainGif}
                key={Date.now()}
                alt="Mr Shmellow Animations"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-blob floating-reverse flex items-center justify-center text-white text-4xl shadow-lg">
              <Sparkles className="w-10 h-10" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-secondary rounded-full floating-delayed border-4 border-white"></div>
          </div>
        </div>

        {/* Bouncing Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center animate-bounce text-mallow-pink/60 hover:text-mallow-pink transition-colors cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-xs font-bold tracking-widest uppercase mb-2 select-none">גלול מטה</span>
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-secondary/10 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="w-full aspect-square rounded-blob bg-white p-4 shadow-2xl rotate-3">
              <div
                className="w-full h-full rounded-blob overflow-hidden bg-cover bg-center"
                style={{ backgroundImage: `url(${companyBoxesImg})` }}
              ></div>
            </div>
            <Link
              to="/contact"
              className="absolute -bottom-10 -right-5 w-40 h-40 bg-mallow-pink rounded-full p-8 flex items-center justify-center text-white text-center font-display text-xl -rotate-6 shadow-xl hover:scale-105 transition-transform"
            >
              קבלו הצעה עכשיו
            </Link>
          </div>

          <div className="order-1 md:order-2 space-y-8">
            <h3 className="text-5xl md:text-6xl font-display text-slate-800">מארזים לחברות</h3>
            <p className="text-xl text-slate-600 leading-relaxed">
              מחפשים את המתנה המושלמת עבור העובדים שלכם? מארזים בהזמנה אישית זמינים עבורכם
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-mallow-pink shadow-md">
                  <HeartHandshake size={24} />
                </div>
                <span className="font-bold text-slate-700">עשוי ממחיות פרי אמיתיות</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-md">
                  <Leaf size={24} />
                </div>
                <span className="font-bold text-slate-700">אריזות ידידותיות לסביבה</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 relative overflow-hidden" id="faq">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-secondary font-bold uppercase tracking-widest text-xs">יש לכם שאלות?</span>
            <h2 className="text-6xl font-display text-slate-800 mt-2">השאלות הכי מתוקות</h2>
          </div>

          <div className="relative md:min-h-[1100px] flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="faq-bubble md:absolute top-0 left-[2%] w-full md:w-[26rem] md:max-w-md bg-mallow-pink text-white p-8 rounded-[3rem] md:rounded-[4rem] floating-slow shadow-xl shadow-mallow-pink/20 z-10 mx-auto">
              <h4 className="font-display text-2xl mb-3">מה זה מר שמלו ?</h4>
              <p className="text-sm leading-relaxed opacity-95">מרשמלו פרימיום הנוצר בעבודת יד במגוון טעמים מיוחדים, תוספות מושחתות וחוויה אחת בלתי נשכחת. אנחנו מציעים מארזים לכל מאורע כמו שמעולם לא טעמתם.</p>
            </div>

            <div className="faq-bubble md:absolute top-[8%] right-[5%] w-full md:w-80 md:max-w-xs bg-secondary text-slate-700 p-8 rounded-[3rem] md:rounded-[3.5rem] floating-reverse shadow-xl shadow-secondary/20 z-20 mx-auto">
              <h4 className="font-display text-2xl mb-3 text-slate-800">האם המרשמלו כשר?</h4>
              <p className="text-sm leading-relaxed">בהחלט, המרשמלו שלנו כשר בהשגחת הרבנות רעננה.</p>
            </div>

            <div className="faq-bubble md:absolute top-[25%] left-[30%] w-full bg-mallow-lavender text-slate-700 p-8 md:p-10 rounded-[3rem] md:rounded-[5rem] md:max-w-xl floating-delayed shadow-2xl shadow-mallow-lavender/30 z-30 mx-auto">
              <h4 className="font-display text-2xl md:text-3xl mb-4 text-slate-800 text-center">אלרגנים וגלוטן?</h4>
              <p className="text-sm text-center leading-relaxed">המוצר עלול להכיל עקבות של חלב, גלוטן (חיטה, שעורה, שיפון, שיבולת שועל), שומשום, בוטנים, ביצים, סויה, אגוזים (פיסטוק, שקדים, לוז, קוקוס, מקדמיה, מלך, פקאן, ברזיל, ערמונים), וצנוברים (קשיו).</p>
            </div>

            <div className="faq-bubble md:absolute top-[45%] right-[2%] w-full md:w-[26rem] md:max-w-md bg-accent text-slate-700 p-8 rounded-[3rem] floating-slow shadow-xl shadow-accent/20 z-10 mx-auto">
              <h4 className="font-display text-2xl mb-3 text-slate-800">מתי אני אקבל את המרשמלו שלי ?</h4>
              <p className="text-sm leading-relaxed">אנחנו במר שמלו משקיעים את כל המאמצים כדי להכין לכם את ההזמנה כמה שיותר מהר! מציעים אפשרויות משלוח מהירות מאוד הכוללות משלוח אקספרס שמגיע תוך יום יומים.</p>
            </div>

            <div className="faq-bubble md:absolute top-[50%] left-[5%] w-full md:w-80 md:max-w-xs bg-mallow-blue text-slate-700 p-8 rounded-[3rem] floating-reverse shadow-xl shadow-mallow-blue/20 z-20 mx-auto">
              <h4 className="font-display text-xl mb-2 text-slate-800">איך לאחסן את המרשמלו?</h4>
              <p className="text-sm leading-relaxed">מומלץ במקום קריר ויבש. רוב המרשמלו מחזיקים כ-2 חודשים בתנאים אופטימלים.</p>
            </div>

            <div className="faq-bubble md:absolute bottom-[10%] right-[35%] w-full md:w-96 md:max-w-md bg-white border-2 border-mallow-pink text-slate-700 p-8 rounded-[3rem] md:rounded-[4rem] floating-delayed shadow-xl shadow-mallow-pink/10 z-10 mx-auto">
              <h4 className="font-display text-2xl mb-3 text-mallow-pink">האם אתם עושים הזמנות לאירועים?</h4>
              <p className="text-sm leading-relaxed">כמובן, נשמח לקחת חלק בארוע שלכם ולהרים את האווירה עם מוצר בלתי נשכח לאורחים שלכם.</p>
            </div>

            <div className="faq-bubble md:absolute bottom-0 left-[2%] w-full md:w-[28rem] md:max-w-md bg-secondary/80 backdrop-blur-md text-slate-800 p-8 rounded-[3rem] md:rounded-[4rem] floating-slow shadow-2xl shadow-secondary/30 z-30 mx-auto">
              <h4 className="font-display text-2xl mb-3">מה העלות שילוח?</h4>
              <p className="text-sm leading-relaxed">עלות השילוח היא 24 ש"ח למשלוח לכל נקודה בארץ עם שליח עד הבית.<br /><br /><b>בקנייה מעל 199 ש"ח קבלו משלוח חינם.</b></p>
            </div>
          </div>

          <div className="text-center mt-20">
            <p className="text-slate-600 flex items-center justify-center gap-2">
              עדיין תוהים? <Link to="/contact" className="text-mallow-pink font-bold border-b-2 border-mallow-pink/30 hover:border-mallow-pink transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mallow-pink rounded-sm px-1">שאלו אותנו ישירות!</Link>
            </p>
          </div>
        </div>

        <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" fill="none" viewBox="0 0 1000 800" xmlns="http://www.w3.org/2000/svg">
            <path d="M250 150 Q 500 100 750 150" stroke="#FF8C94" strokeDasharray="12 12" strokeWidth="4"></path>
            <path d="M150 200 Q 100 400 250 600" stroke="#A8E6CF" strokeDasharray="12 12" strokeWidth="4"></path>
            <path d="M800 250 Q 900 450 750 700" stroke="#E0BBE4" strokeDasharray="12 12" strokeWidth="4"></path>
          </svg>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-24 bg-secondary/10 relative overflow-hidden overflow-x-hidden w-full">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <h2 className="text-5xl font-display text-slate-800">בין לקוחותינו</h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]" dir="ltr">
          <div className="flex w-max flex-nowrap animate-infinite-scroll hover:[animation-play-state:paused]">
            {/* The First List */}
            <div className="flex shrink-0 items-center justify-around gap-16 md:gap-24 px-8 md:px-12">
              <img src={addidasLogo} alt="Adidas" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={finalLogo} alt="Final Logo" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={hamanyaLogo} alt="Hamanya" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={logocatchLogo} alt="Logo Catch" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={sweetimeLogo} alt="Sweetime" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={tropiconLogo} alt="Tropicon Agency" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={addidasLogo} alt="Adidas" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={finalLogo} alt="Final Logo" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={hamanyaLogo} alt="Hamanya" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={logocatchLogo} alt="Logo Catch" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={sweetimeLogo} alt="Sweetime" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={tropiconLogo} alt="Tropicon Agency" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
            </div>

            {/* Exactly Duplicated Set to Create Seamless Loop */}
            <div className="flex shrink-0 items-center justify-around gap-16 md:gap-24 px-8 md:px-12" aria-hidden="true">
              <img src={addidasLogo} alt="Adidas" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={finalLogo} alt="Final Logo" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={hamanyaLogo} alt="Hamanya" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={logocatchLogo} alt="Logo Catch" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={sweetimeLogo} alt="Sweetime" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={tropiconLogo} alt="Tropicon Agency" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={addidasLogo} alt="Adidas" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={finalLogo} alt="Final Logo" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={hamanyaLogo} alt="Hamanya" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={logocatchLogo} alt="Logo Catch" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={sweetimeLogo} alt="Sweetime" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
              <img src={tropiconLogo} alt="Tropicon Agency" className="h-12 md:h-14 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 shrink-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
