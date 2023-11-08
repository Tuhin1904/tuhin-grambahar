function StaticPageMdRendering({ markdownContent }) {
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

export default StaticPageMdRendering;
