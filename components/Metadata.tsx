import Head from "next/head";

interface MetadataProps {
  title?: string;
  description?: string;
  url?: string;
  image?: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

const defaultMeta: MetadataProps = {
  title: "Alwaysjad",
  description: "Dangerously good coding.",
  url: "https://www.alwaysjad.com",
  image: {
    url: "https://res.cloudinary.com/dzepeibjw/image/upload/v1659152027/Metadata-image---alw_nrcnx6.png",
    width: 1820,
    height: 904,
    alt: "Website link image banner",
  },
};

export const Metadata = (props: MetadataProps) => {
  const meta = {
    ...defaultMeta,
    ...props,
  };

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="icon" href="/favicon.ico" />

      {/* OpenGraph tags */}
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={meta.url} />
      {/* <meta property="og:image" content={meta.image.url} />
      <meta property="og:image:width" content={String(meta.image.width)} />
      <meta property="og:image:height" content={String(meta.image.height)} />
      <meta property="og:image:alt" content={meta.image.alt} /> */}
    </Head>
  );
};
