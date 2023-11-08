import { marked } from 'marked';
import Head from 'next/head';

function CookiePolicyPage({ content }) {
  return (
    <>
      <Head>
        <title>Gram Bahar | Cookie Policy</title>
      </Head>
      <div className="container px-4 py-20 mx-auto">
        <div
          className="min-w-full prose break-words prose-stone prose-a:text-primary"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // eslint-disable-next-line global-require
  const fs = require('fs');
  const md = fs.readFileSync('src/contents/cookie-policy.md', 'utf-8');
  return { props: { content: marked.parse(md) } };
}

export default CookiePolicyPage;
