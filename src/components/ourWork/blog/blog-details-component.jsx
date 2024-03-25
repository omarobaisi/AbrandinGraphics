import React, { useEffect } from "react";

import "./BlogDetails.scss";

import Header from "../header/workHeader-component";

import BlogImg1920 from "./img/Desktop/1920w/blog-details-img.png";
import BlogImg1728 from "./img/Macbook/1728w/blog-details-img.png";
import BlogImg1512 from "./img/Macbook/1512w/blog-details-img.png";
import BlogImg1440 from "./img/Desktop/1440w/blog-details-img.png";
import BlogImg1280 from "./img/Macbook/1280w/blog-details-img.png";
import BlogImg1024 from "./img/Tablet/1024w/blog-details-img.png";
import BlogImg834 from "./img/Tablet/834w/blog-details-img.png";
import BlogImg430 from "./img/iPhone/430w/blog-details-img.png";
import BlogImg390 from "./img/iPhone/390w/blog-details-img.png";
import BlogImg360 from "./img/Android/blog-details-img.png";
import { Link } from "react-router-dom";

function BlogDetailsComponent(props) {
  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  return (
    <div className="blog-details-component">
      <Header />
      <div className="blog-details-examples">
        <div className="blog-header">
          <div>עיצוב מושך:</div>
          <div className="blog-details-header-des">
            <div>המפתח להצלחה</div>
            <div>במדיה החברתית</div>
          </div>
        </div>
        <div className="blog-details-underlined">
          <div>ים שדה</div>
          <div>12.3.24</div>
          <div>איי ברנדינגרפיקס</div>
          <div>איי גרפיקס</div>
          <div>עיצוב</div>
          <div>מדיה חברתית</div>
        </div>
        <div className="blog-details-underlined-mobile">
          <div className="blog-details-underlined-mobile-section">
            <div>ים שדה</div>
            <div>12.3.24</div>
            <div>איי ברנדינגרפיקס</div>
          </div>
          <div className="blog-details-underlined-mobile-section">
            <div>איי גרפיקס</div>
            <div>עיצוב</div>
            <div>מדיה חברתית</div>
          </div>
        </div>
        <div className="blog-details-pictures">
          <div className="img-1920">
            <img className="blog-details-img" src={BlogImg1920} alt="" />
          </div>
          <div className="img-1728">
            <img className="blog-details-img" src={BlogImg1728} alt="" />
          </div>
          <div className="img-1512">
            <img className="blog-details-img" src={BlogImg1512} alt="" />
          </div>
          <div className="img-1440">
            <img className="blog-details-img" src={BlogImg1440} alt="" />
          </div>
          <div className="img-1280">
            <img className="blog-details-img" src={BlogImg1280} alt="" />
          </div>
          <div className="img-1024">
            <img className="blog-details-img" src={BlogImg1024} alt="" />
          </div>
          <div className="img-834">
            <img className="blog-details-img" src={BlogImg834} alt="" />
          </div>
          <div className="img-430">
            <img className="blog-details-img" src={BlogImg430} alt="" />
          </div>
          <div className="img-390">
            <img className="blog-details-img" src={BlogImg390} alt="" />
          </div>
          <div className="img-360">
            <img className="blog-details-img" src={BlogImg360} alt="" />
          </div>
        </div>
        <div className="blog-details-content">
          <p>
            <div>
              בעולם הדיגיטלי המהיר, שם תכנים מתחלפים בקצב מסחרר, עיצוב מושך הוא
              לא עוד בחירה - אלא הכרח.
            </div>
            <div>
              במרחב רווי של פוסטים, תמונות וסרטונים, העיצוב הוא זה שמעניק לתוכן
              שלכם את הכוח להתבלט ולמשוך תשומת לב.
            </div>
          </p>
          <p>
            <div>
              נתונים סטטיסטיים מדגישים את חשיבות{" "}
              <Link className="blog-details-link" to="/logos">
                הלוגו
              </Link>
              :
            </div>
            <li>80% מהצרכנים ציינו שהם זוכרים מותג על סמך הלוגו שלו. </li>
            <li>לוגו מעוצב היטב יכול להגדיל את המודעות למותג ב-25%. </li>
            <li>לוגו מושך יכול להגדיל את הכוונה לרכישה ב-15%.</li>
          </p>
          <p>
            אז למה עיצוב כל כך חשוב{" "}
            <Link className="blog-details-link" to="/socialmedia">
              במדיה חברתית
            </Link>
            ?
          </p>
          <p>
            <li>
              הרושם הראשוני: בממוצע, אדם מחליט תוך 2.7 שניות בלבד האם להמשיך
              ולקרוא פוסט או להמשיך הלאה. עיצוב מושך יגרום לו לעצור ולקחת את
              הזמן.
            </li>
            <li>
              הבנה ועיכול: עיצוב נכון יכול להקל על קריאת התוכן ולהפוך אותו לברור
              וקל להבנה.
            </li>
            <li>
              יצירת שפה ייחודית: עיצוב מותאם אישית יעזור לכם לבנות זהות מותגית
              חזקה וייחודית שיבדיל אתכם מהמתחרים.
            </li>
            <li>
              העלאת מעורבות: תוכן מעוצב בצורה מושכת יזכה ליותר לייקים, תגובות
              ושיתופים.{" "}
            </li>
            <li>
              יצירת אמון: עיצוב מקצועי יגרום לכם להיראות אמינים ומקצועיים יותר,
              ויעודד אנשים לעקוב אחריכם ולקנות מכם.
            </li>
          </p>
          <p>טיפים לעיצוב נכון במדיה חברתית:</p>
          <p>
            <li>
              הכירו את הקהל שלכם: התאימו את העיצוב לטעם ולסגנון של קהל היעד
              שלכם.{" "}
            </li>
            <li>
              השתמשו בתמונות וסרטונים איכותיים: תמונות וסרטונים מושכים יעזרו לכם
              למשוך תשומת לב ולעורר עניין.{" "}
            </li>
            <li>
              הקפידו על עקביות: השתמשו באותם צבעים, גופנים ולוגו בכל הפוסטים
              שלכם.{" "}
            </li>
            <li>
              השתמשו בטקסט קצר וקולע: אנשים נוטים לקרוא פוסטים קצרים ותמציתיים.{" "}
            </li>
            <li>
              הוסיפו קריאה לפעולה: הגידו לאנשים מה אתם רוצים שהם יעשו (למשל,
              ללחוץ על קישור, להגיב או לשתף).
            </li>
            <li>
              השתמשו בכלים ייעודיים: ישנם כלים רבים שיכולים לעזור לכם לעצב
              פוסטים מושכים, גם אם אין לכם ידע בעיצוב גרפי.
            </li>
          </p>
          <p>
            <div>
              עיצוב מושך הוא אמנם אבן יסוד להצלחה במדיה חברתית, אך הוא אינו
              מספיק.
            </div>
            <div>
              חוויית משתמש (UX) ועיצוב ממשק משתמש (UI) הם שני גורמים קריטיים
              נוספים שיש לקחת בחשבון.
            </div>
            <div>
              UX מתמקד בתחושות וברגשות של המשתמש בעת השימוש במוצר או בשירות,
              בעוד ש-UI מתמקד בעיצוב הוויזואלי והפונקציונלי של הממשק.
            </div>
          </p>
          <p>
            <div>
              <Link className="blog-details-link" to="/websites">
                UX/UI
              </Link>{" "}
              מוצלחים יבטיחו:
            </div>
            <li>
              ניווט קל ונוח: המשתמשים יוכלו למצוא בקל./ות את מה שהם מחפשים
              ולעשות את מה שהם רוצים לעשות.
            </li>
            <li>
              חוויה אינטואיטיבית: המשתמשים יוכלו להבין בקלות כיצד להשתמש במוצר
              או בשירות.{" "}
            </li>
            <li>
              עיצוב נעים לעין: המשתמשים ייהנו מהמראה והתחושה של המוצר או השירות.
            </li>
            <li>
              {" "}
              חוויה נטולת טעויות: המשתמשים לא ייתקלו בבעיות או קשיים בשימוש
              במוצר או בשירות.
            </li>
          </p>
          <p>
            <div>השקעה ב-UX/UI איכותיים תביא ל:</div>
            <li>
              שיפור שביעות רצון הלקוחות: לקוחות מרוצים יותר נוטים לחזור שוב
              ושוב.
            </li>
            <li>
              הגברת המודעות למותג: חוויה חיובית תגרום ללקוחות לדבר על המותג שלכם
              ולשתף אותו עם אחרים.
            </li>
            <li>
              הגדלת המכירות: לקוחות מרוצים יותר נוטים לרכוש יותר מוצרים או
              שירותים.
            </li>
          </p>
          <p>לסיכום: עיצוב מושך הוא אבן יסוד להצלחה במדיה חברתית.</p>
          <p>
            <div>
              לוגו מעוצב היטב הוא נכס משמעותי בתוך עולם העיצוב המושך, והוא תורם
              רבות ליצירת זהות מותגית חזקה וייחודית.
            </div>
            <div>
              הקפדה על עקרונות העיצוב שהוזכרו תסייע לכם ליצור תוכן מושך שימשוך
              תשומת לב, יגרום לכם להתבלט ויסייע לכם להשיג את היעדים שלכם.
            </div>
            <div>זכרו:</div>
            <li>הכירו את קהל היעד שלכם. </li>
            <li>הגדירו את המסרים שלכם. </li>
            <li>השתמשו בצבעים וגופנים מתאימים. </li>
            <li>הקפידו על פשטות. </li>
            <li>השתמשו בעיצוב באופן עקבי.</li>
          </p>
          <p>
            עיצוב מושך הוא השקעה משתלמת שתאפשר לכם להפיק את המרב מהנוכחות שלכם
            במדיה החברתית.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsComponent;
