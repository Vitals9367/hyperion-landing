"use client";

import { useMDXComponent } from "next-contentlayer2/hooks";
import { DownloadLink } from "./mdx/download-link";
import { Pre } from "./mdx/pre";

const components = {
  pre: Pre,
  DownloadLink,
};

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
