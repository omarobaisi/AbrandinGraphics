import React, { useEffect, useState } from "react";
import "./AccessibilityStatement.scss";
import Header from "../../ourWork/header/workHeader-component";
import AccessibilityStatementContent from "./AccessibilityStatementContent";

function LandingComponent(props) {
  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  return (
    <div className="accessibility-statement">
      <Header header="הצהרת נגישות" />
      <div className="accessibility-statement-content" dir="rtl">
        <AccessibilityStatementContent />
        {/* <ReactMarkdown>{markdownContent}</ReactMarkdown> */}
      </div>
    </div>
  );
}

export default LandingComponent;
