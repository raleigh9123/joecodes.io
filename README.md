# My personal website, portfolio, and live resume

My site is built with Next.js, TailwindCSS, HeadlessUI, and Markdown. The site is hosted on Vercel, and illustrates projects I have completed as well as work I have currently underway (and a handful of details about ).

## Built with Next.js
This example showcases Next.js's [Static Generation](https://nextjs.org/docs/basic-features/pages) feature using Markdown files as the data source.

## Data sourced in Markdown
To create the individual projects, I used [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Styled with Tailwind CSS and Headless UI
The site is styled with [Tailwind CSS](https://tailwindcss.com), using [Headless UI](https://headlessui.dev/) components, and made functional via React/Next.js

## Hosted on Vercel
[Vercel](https://vercel.com/) hosts the website, where you, the viewer have the opportunity to see my work! Thank you for considering me.
