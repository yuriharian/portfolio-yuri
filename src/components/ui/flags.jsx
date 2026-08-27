// Bandeiras como SVG inline: renderização idêntica em qualquer SO/navegador,
// sem depender de fonte de emoji (o Windows não desenha emoji de bandeira,
// só o par de letras) nem de rede (CDN).

export const FlagBR = (props) => (
  <svg viewBox="0 0 28 20" {...props}>
    <rect width="28" height="20" fill="#009739" />
    <polygon points="14,2.5 26,10 14,17.5 2,10" fill="#FEDD00" />
    <circle cx="14" cy="10" r="4.3" fill="#012169" />
  </svg>
);

export const FlagUS = (props) => (
  <svg viewBox="0 0 28 20" {...props}>
    <rect width="28" height="20" fill="#fff" />
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <rect key={i} y={i * (20 / 7)} width="28" height={20 / 7} fill={i % 2 === 0 ? "#B22234" : "#fff"} />
    ))}
    <rect width="12" height={20 * (4 / 7)} fill="#3C3B6E" />
  </svg>
);

export const FlagES = (props) => (
  <svg viewBox="0 0 28 20" {...props}>
    <rect width="28" height="20" fill="#AA151B" />
    <rect y="5" width="28" height="10" fill="#F1BF00" />
  </svg>
);
