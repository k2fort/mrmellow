import { Share2 } from 'lucide-react';

export default function Blog() {
    return (
        <div className="pt-40 pb-24 px-6 relative mt-10" id="blog">
            <div className="max-w-4xl mx-auto bg-white rounded-[4rem] p-12 md:p-16 shadow-2xl relative overflow-hidden border-4 border-mallow-pink/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-tr-full"></div>

                <div className="relative z-10 w-full pt-4">
                    <div className="space-y-6">
                        <div className="text-center md:text-right">
                            <span className="text-mallow-pink font-bold uppercase tracking-widest text-xs">בלוג</span>
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-2 mb-6">
                                <p className="text-slate-500 text-sm">10 בספטמבר 2024</p>
                                <button className="flex items-center gap-1.5 text-secondary font-bold text-sm hover:text-mallow-pink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary rounded-full bg-secondary/10 px-4 py-1.5 hover:bg-mallow-pink/10 mx-auto md:mx-0">
                                    <Share2 size={16} />
                                    שתף
                                </button>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-display text-slate-800 mb-8 mt-4 leading-tight">עולם המרשמלו שלנו: סיפור של עננים מתוקים</h3>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                ברוכים הבאים לממלכת המרשמלו – המקום שבו איכות, יצירתיות וטעם נפגשים כדי ליצור את הממתק המושלם. האתר שלנו נולד מתוך אהבה אמיתית למרקם האווירי והנימוח של המרשמלו, ומתוך רצון להביא לכם חוויה שונה מכל מה שהכרתם.
                            </p>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h4 className="font-bold text-slate-800 text-2xl">למה המרשמלו שלנו?</h4>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                אנחנו מאמינים שמרשמלו הוא הרבה יותר מסתם ממתק. הוא זיכרון ילדות, הוא תוספת מושלמת למדורה, והוא הפינוק האולטימטיבי ליד השוקו החם. כדי להבטיח את החוויה הטובה ביותר, אנחנו שמים דגש על:
                            </p>
                            <ul className="list-disc list-inside text-slate-600 text-lg space-y-3 pr-4 marker:text-mallow-pink">
                                <li><span className="font-bold text-slate-700">חומרי גלם מובחרים:</span> שימוש ברכיבים איכותיים בלבד להשגת המרקם המדויק.</li>
                                <li><span className="font-bold text-slate-700">מגוון טעמים וצורות:</span> ממרשמלו וניל קלאסי ועד שילובים גורמה מפתיעים.</li>
                                <li><span className="font-bold text-slate-700">טריות ללא פשרות:</span> כל ענן מתוק שיוצא מאיתנו נארז בקפידה כדי לשמור על רכות מקסימלית.</li>
                                <li><span className="font-bold text-slate-700">התאמה לכל אירוע:</span> מארזים למסיבות, מתנות למארחים או פשוט פינוק עצמי לסוף היום.</li>
                            </ul>
                        </div>

                        <div className="space-y-4 pt-4">
                            <h4 className="font-bold text-slate-800 text-2xl">החזון שלנו</h4>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                המטרה שלנו היא להפוך כל רגע למתוק יותר. אנחנו פועלים ללא הרף כדי לחדש, להפתיע ולספק לחובבי המתוקים בישראל מרשמלו איכותי בעבודת יד וביצור מוקפד, תוך שמירה על סטנדרטים גבוהים של שירות וטעם.
                            </p>
                            <div className="my-8 p-6 bg-mallow-cream rounded-3xl border-r-8 border-mallow-pink shadow-inner">
                                <p className="text-slate-700 text-lg font-bold flex items-center gap-2">
                                    <span className="text-2xl">💡</span> טיפ של מקצוענים:
                                </p>
                                <p className="text-slate-600 text-lg mt-2">
                                    נסו לצלות את המרשמלו שלנו מעל אש גלויה לכמה שניות – המעטפת הקריספית והליבה הנמסה יגרמו לכם להתאהב מחדש.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4 pt-6 border-t-2 border-slate-100">
                            <h4 className="font-bold text-slate-800 text-2xl">משלוחים מהירים לכל הארץ</h4>
                            <p className="text-slate-600 leading-relaxed text-lg">
                                אנחנו יודעים שכשמתחשק משהו מתוק, אי אפשר לחכות. לכן, הקמנו מערך משלוחי מרשמלו מהירים המגיע לכל נקודה בישראל. בין אם אתם בצפון, בדרום או במרכז, המארזים שלנו ייצאו אליכם בתיאום מהיר, באריזה השומרת על טריות ומרקם העננים, כדי שהפינוק יגיע אליכם בדיוק כפי שהוא יצא מהמפעל: רך, ריחני ומושלם.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
