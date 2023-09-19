export default function Source({ description }) {
  return (
    <>
      <link rel="icon" href="/chemlogo.png" />
      <meta name="theme-color" content="#1d4ed8" />
      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="ChemTools" />
      <meta name="twitter:description" content={description} />
      <meta property="twitter:image" content="/chemlogo.png" />
      <meta property="og:title" content="Chem Tools" />
      <meta property="og:url" content="https://chemtools.vercel.app" />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/chemlogo.png" />
      <meta property="og:site_name" content="ChemTools" />
      <meta
        name="keywords"
        content="chem chemistry tools acid base moles mass gram bond character ionic covalent electronegativity periodic table elements"
      ></meta>
    </>
  );
}
