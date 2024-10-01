"use client";
import mmmark, { customClass, icons } from "mm-mark";
import type { MmmarkUserSelectOptions } from "mm-mark";
import React from "react";

type Opts = Omit<MmmarkUserSelectOptions, "extensions">;
type Extensions = MmmarkUserSelectOptions["extensions"];
export type MOptions = {
  content: string;
  options?: Opts;
  extensions?: Extensions;
};

const Markdown: React.FC<MOptions> = ({ content, options, extensions }) => {
  const converter = React.useMemo(
    () =>
      mmmark.Converter({
        ...options,
        extensions: [icons, customClass, ...extensions],
      }),
    [options, extensions]
  );
  const cleanMark = React.useMemo(
    () => mmmark.frontmatter(content).content,
    [content]
  );
  const htmlContent = React.useMemo(
    () => converter.makeHtml(cleanMark),
    [converter, cleanMark]
  );
  const html = React.useMemo(() => ({ __html: htmlContent }), [htmlContent]);
  return <div id="mm-mark" dangerouslySetInnerHTML={html} />;
};

export default Markdown;
