import { marked } from 'marked';
import Head from 'next/head';
import ContactUs from '@/containers/ContactPage/ContactUs';

function ContactUsPage({ content }) {
  return (
    <>
      <Head>
        <title>Gram Bahar | Contact Us</title>
      </Head>
      <div className="container px-4 py-20 mx-auto">
        <div
          className="min-w-full prose break-words prose-stone prose-a:text-primary"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        <ContactUs />
      </div>
    </>
  );
}
export default ContactUsPage;
