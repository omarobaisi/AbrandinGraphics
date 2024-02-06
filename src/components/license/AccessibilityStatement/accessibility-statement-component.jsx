import React, { useEffect, useState } from "react";
import "./AccessibilityStatement.scss";
import ReactMarkdown from "react-markdown";
import Header from "../../ourWork/header/workHeader-component";
import accessibilityStatementMD from "./AccessibilityStatement.md";

function LandingComponent(props) {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => window.scrollTo({ top: 0, left: 0 }), []);

  useEffect(() => {
    // Fetch the Markdown content when the component mounts
    fetch(accessibilityStatementMD)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text))
      .catch((error) =>
        console.error("Error fetching Markdown content:", error)
      );
  }, []);

  return (
    <div className="accessibility-statement">
      <Header header="הצהרת נגישות" />
      <div className="accessibility-statement-content" dir="rtl">
        {/* Render the Markdown content using ReactMarkdown */}
        <ReactMarkdown>{markdownContent}</ReactMarkdown>
      </div>
    </div>
  );
}

export default LandingComponent;
