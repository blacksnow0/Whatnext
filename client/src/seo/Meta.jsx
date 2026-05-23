import { Helmet } from "react-helmet-async";

const Meta = ({
  title,
  description,
  image,
  canonical,
}) => {
  return (
    <Helmet>
      {/* TITLE */}
      <title>{title}</title>

      {/* DESCRIPTION */}
      <meta
        name="description"
        content={description}
      />

      {/* OPEN GRAPH */}
      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:image"
        content={image}
      />

      <meta
        property="og:type"
        content="website"
      />

      {/* TWITTER */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={title}
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={image}
      />

      {/* CANONICAL */}
      <link
        rel="canonical"
        href={canonical}
      />
    </Helmet>
  );
};

export default Meta;