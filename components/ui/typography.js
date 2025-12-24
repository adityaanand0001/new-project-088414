
import React from 'react';

const createTypographyComponent = (tag, defaultClassName) => {
  return React.forwardRef(({ as, className, ...props }, ref) => {
    const Component = as || tag;
    return <Component ref={ref} className={`${defaultClassName} ${className}`} {...props} />;
  });
};

export const TypographyH1 = createTypographyComponent(
  "h1",
  "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
);
export const TypographyH2 = createTypographyComponent(
  "h2",
  "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0"
);
export const TypographyH3 = createTypographyComponent(
  "h3",
  "scroll-m-20 text-2xl font-semibold tracking-tight"
);
export const TypographyH4 = createTypographyComponent(
  "h4",
  "scroll-m-20 text-xl font-semibold tracking-tight"
);
export const TypographyH5 = createTypographyComponent(
  "h5",
  "scroll-m-20 text-lg font-semibold tracking-tight"
);
export const TypographyH6 = createTypographyComponent(
  "h6",
  "scroll-m-20 text-base font-semibold tracking-tight"
);

// Text elements
export const TypographyP = createTypographyComponent(
  "p",
  "leading-7 [&:not(:first-child)]:mt-6"
);
export const TypographyBlockquote = createTypographyComponent(
  "blockquote",
  "mt-6 border-l-2 pl-6 italic"
);
export const TypographyList = createTypographyComponent(
  "ul",
  "my-6 ml-6 list-disc [&>li]:mt-2"
);
export const TypographyListItem = createTypographyComponent(
  "li",
  "mt-2 ml-4"
);
export const TypographyLead = createTypographyComponent(
  "p",
  "text-xl text-gray-600"
);
export const TypographyLarge = createTypographyComponent(
  "div",
  "text-lg font-semibold"
);
export const TypographySmall = createTypographyComponent(
  "small",
  "text-sm font-medium leading-none"
);
export const TypographyMuted = createTypographyComponent(
  "p",
  "text-sm text-gray-500"
);

// Inline and links
export const TypographyInlineCode = createTypographyComponent(
  "code",
  "relative rounded bg-gray-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
);
export const TypographyLink = createTypographyComponent(
  "a",
  "font-medium text-blue-600 hover:underline"
);