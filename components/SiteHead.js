import Head from "next/head";

function SiteHead(props) {
  const title =
    (props?.title || "") +
    (props?.title ? " - " : "") +
    "Sathian | Professional Photographer and Videographer in Muscat";
  const desc =
    props.description ||
    "Sathian is a professional photographer and videographer in Oman since more than three decades. Check out the portfolio.";
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta
        name="keywords"
        content="sathian,sathyan,photography,videography,oman,muscat,freelance,photo,video,film,movie,production,satyan,photographer,videographer"
      />

      {/* Link Preview Metadata for Facebook */}
      <meta property="og:url" content="https://sathyanpeevee.com/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta
        property="og:image"
        content="https://drive.google.com/file/d/1c9ZaW2RDnmdE7C26_s3MWXEtEqIr-lfh/view?usp=sharing"
      />
      <meta property="og:image:alt" content={title} />
      <meta property="og:image:type" content="img/png" />

      <link rel="icon" type="image/x-icon" href="../assets/icon.ico" />
    </Head>
  );
}

export default SiteHead;
