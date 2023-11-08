import { marked } from 'marked';
import { useEffect, useState } from 'react';

function StaticPageWithMdRendering({ contentPath }) {
  const [markdownContent, setMarkdownContent] = useState('');

  useEffect(() => {
    // Fetch the Markdown file
    fetch(contentPath)
      .then((response) => response.text())
      .then((data) => {
        setMarkdownContent(data);
      });
  }, [contentPath]);

  return (
    <div className="container px-4 py-20 mx-auto">
      <div
        className="min-w-full prose break-words prose-stone prose-a:text-primary"
        dangerouslySetInnerHTML={{
          __html: marked.parse(markdownContent),
        }}
      />
    </div>
  );
}

export default StaticPageWithMdRendering;
