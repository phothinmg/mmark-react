import mmmark from "mm-mark";
import type { MmmarkUserSelectOptions } from "mm-mark";
import React from "react";

export type MOptions = {
  content: string;
  options?: MmmarkUserSelectOptions;
};

const Markdown: React.FC<MOptions> = ({ content, options }) => {
  const converter = mmmark.Converter(options);
  const cleanMark = mmmark.frontmatter(content).content;
  const htmlContent = converter.makeHtml(cleanMark);
  const html = { __html: htmlContent };
  return <div id="mm-mark" dangerouslySetInnerHTML={html} />;
};

export default Markdown;
