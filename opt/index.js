"use client";
import mmmark, { customClass, icons } from "mm-mark";
import React from "react";
const Markdown = ({ content, options, extensions }) => {
    const converter = React.useMemo(() => mmmark.Converter({
        ...options,
        extensions: [icons, customClass, ...extensions],
    }), [options, extensions]);
    const cleanMark = React.useMemo(() => mmmark.frontmatter(content).content, [content]);
    const htmlContent = React.useMemo(() => converter.makeHtml(cleanMark), [converter, cleanMark]);
    const html = React.useMemo(() => ({ __html: htmlContent }), [htmlContent]);
    return React.createElement("div", { id: "mm-mark", dangerouslySetInnerHTML: html });
};
export default Markdown;
