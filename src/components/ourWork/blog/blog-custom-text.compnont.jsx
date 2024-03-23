import React from "react";

function BlogCustomText({ nextPage }) {
  return (
    <div onClick={nextPage}>
      <div className="blog-header">
        <div>:עיצוב מושך</div>
        <div>המפתח להצלחה</div>
        <div>במדיה החברתית</div>
      </div>
      <div className="blog-details">
        <div>בעולם הדיגיטלי המהיר, שם תכנים מתחלפים בקצב מסחרר,</div>
        <div>עיצוב מושך הוא לא עוד בחירה - אלא הכרח.</div>
        <div>במרחב רווי של פוסטים, תמונות וסרטונים,</div>
        <div>
          ...העיצוב הוא זה שמעניק לתוכן שלכם את הכוח להתבלט ולמשוך תשומת לב
        </div>
      </div>
      <div className="blog-date">ים שדה, 12.3.2024</div>
    </div>
  );
}

export default BlogCustomText;
