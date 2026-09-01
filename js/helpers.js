(() => {
  'use strict';
  const HG = window.HiddenGame = window.HiddenGame || {};
  const pixelCloud = (x, y, s=1, c='#f7e7bd') => `
    <g transform="translate(${x} ${y}) scale(${s})" opacity=".9">
      <rect x="16" y="0" width="40" height="12" fill="${c}"/>
      <rect x="0" y="12" width="78" height="18" fill="${c}"/>
      <rect x="12" y="30" width="54" height="8" fill="${c}"/>
    </g>`;

  const flower = (x,y,c1,c2='#f8e8a4',s=1) => `
    <g transform="translate(${x} ${y}) scale(${s})">
      <rect x="7" y="13" width="4" height="14" fill="#3f7d4a"/>
      <rect x="0" y="3" width="8" height="8" fill="${c1}"/>
      <rect x="12" y="3" width="8" height="8" fill="${c1}"/>
      <rect x="6" y="0" width="8" height="8" fill="${c1}"/>
      <rect x="6" y="9" width="8" height="8" fill="${c1}"/>
      <rect x="7" y="5" width="6" height="6" fill="${c2}"/>
    </g>`;

  const tree = (x,y,s=1,leaf='#397550',leaf2='#285e48') => `
    <g transform="translate(${x} ${y}) scale(${s})">
      <rect x="40" y="85" width="34" height="95" fill="#7c4e3b"/>
      <rect x="50" y="85" width="9" height="95" fill="#9a6345"/>
      <rect x="0" y="45" width="115" height="65" fill="${leaf2}"/>
      <rect x="15" y="18" width="82" height="82" fill="${leaf}"/>
      <rect x="34" y="0" width="50" height="40" fill="${leaf}"/>
      <rect x="-12" y="66" width="40" height="28" fill="${leaf}"/>
      <rect x="93" y="55" width="35" height="34" fill="${leaf}"/>
      <rect x="13" y="42" width="18" height="14" fill="#4f8a58" opacity=".8"/>
      <rect x="73" y="27" width="17" height="14" fill="#4f8a58" opacity=".8"/>
    </g>`;

  const pine = (x, y, s=1, trunk='#76503b', a='#315f51', b='#3d765a') => `
    <g transform="translate(${x} ${y}) scale(${s})">
      <rect x="39" y="104" width="22" height="76" fill="${trunk}"/>
      <polygon points="50,0 4,82 96,82" fill="${a}"/>
      <polygon points="50,35 -3,126 103,126" fill="${b}"/>
      <polygon points="50,72 -10,166 110,166" fill="${a}"/>
    </g>`;

  const sprite = (type) => {
    const sprites = {
      mitten: `<path d="M17 13h14v17h5V9h12v24h5v-15h11v31c0 15-9 24-24 24H20C9 73 4 66 4 55V32h13z" fill="#b84e61"/><rect x="15" y="61" width="40" height="12" fill="#e7c7a0"/><rect x="20" y="18" width="7" height="30" fill="#d96b77"/>`,
      bell: `<path d="M12 47c6-7 8-17 8-28C20 7 29 0 42 0s22 7 22 19c0 11 2 21 8 28z" fill="#d5a43e"/><rect x="8" y="45" width="68" height="10" fill="#f0c859"/><rect x="35" y="53" width="14" height="15" fill="#a66d34"/><rect x="28" y="5" width="11" height="27" fill="#f7d977"/>`,
      mug: `<rect x="5" y="18" width="48" height="46" rx="4" fill="#73a6a6"/><path d="M51 27h10c17 0 17 28 0 28H51" fill="none" stroke="#73a6a6" stroke-width="10"/><rect x="12" y="24" width="8" height="32" fill="#a9d0c4"/><path d="M18 12c-8-8 5-10-2-18M37 12c-8-8 5-10-2-18" fill="none" stroke="#e8e1c7" stroke-width="4"/>`,
      scarf: `<path d="M8 5h56v20H8z" fill="#d35c58"/><path d="M17 22h22v52H17z" fill="#c94d50"/><path d="M43 22h19v39H43z" fill="#e0705f"/><path d="M18 72v10m8-10v10m10-10v10m8-21v10m8-10v10m8-10v10" stroke="#f2bd77" stroke-width="4"/>`,
      snowflake: `<g stroke="#e8f7ff" stroke-width="5" stroke-linecap="square"><path d="M36 2v70M6 19l60 36M6 55l60-36"/><path d="M36 2l-8 10m8-10l8 10M36 72l-8-10m8 10l8-10M6 19l13 1M6 19l5 12M66 55l-13-1m13 1l-5-12M6 55l13-1M6 55l5-12M66 19l-13 1m13-1l-5 12"/></g>`,
      compass: `<circle cx="38" cy="38" r="34" fill="#bb7c3d"/><circle cx="38" cy="38" r="27" fill="#ead68c"/><polygon points="38,9 45,38 38,67 31,38" fill="#be4f52"/><polygon points="9,38 38,31 67,38 38,45" fill="#52778b"/><circle cx="38" cy="38" r="5" fill="#fff1b3"/>`,
      pearl: `<path d="M2 48C5 15 20 3 38 3s33 12 36 45z" fill="#b98576"/><path d="M10 45L18 13m7 32 6-39m8 39V5m10 40-5-38m18 38-9-31" stroke="#e8bca1" stroke-width="5"/><circle cx="38" cy="43" r="15" fill="#f7eef3"/><circle cx="32" cy="37" r="5" fill="#fff"/>`,
      wrench: `<path d="M8 2c-8 15-4 29 8 36L2 63l12 12 25-15c11 6 25 3 32-8L54 45l-10-17 8-17c-13-6-27-2-34 9z" fill="#81909a"/><path d="M11 61l8 8" stroke="#c7d0d3" stroke-width="5"/>`,
      starfish: `<polygon points="38,0 47,25 73,18 57,40 74,61 48,54 38,78 28,54 2,62 19,40 3,19 29,25" fill="#d97962"/><circle cx="38" cy="39" r="7" fill="#efaa7b"/><g fill="#f3b17f"><circle cx="38" cy="15" r="3"/><circle cx="58" cy="31" r="3"/><circle cx="51" cy="55" r="3"/><circle cx="24" cy="55" r="3"/><circle cx="17" cy="30" r="3"/></g>`,
      battery: `<rect x="6" y="10" width="64" height="48" rx="5" fill="#4e6674"/><rect x="70" y="23" width="8" height="22" fill="#8ba0aa"/><rect x="13" y="17" width="49" height="34" fill="#79b86e"/><rect x="18" y="22" width="28" height="24" fill="#b6d76e"/><path d="M41 16L29 37h12l-7 17 22-26H44z" fill="#f7e37a"/>`,
      jellyfish: `<path d="M5 34C5 13 19 0 38 0s33 13 33 34z" fill="#9d72bd"/><rect x="11" y="28" width="54" height="10" fill="#b98bd0"/><path d="M15 36v33c0 10 12 10 12 0V46m15-10v39m16-39v31c0 10 12 10 12 0V47" fill="none" stroke="#cda9dc" stroke-width="6"/><circle cx="24" cy="22" r="4" fill="#f2deea"/><circle cx="51" cy="22" r="4" fill="#f2deea"/>`,
      shell: `<path d="M2 58C4 18 20 2 39 2s35 16 37 56z" fill="#e4b681"/><path d="M12 54L18 17m9 37 5-48m10 48V5m12 49-4-47m16 47-8-37" stroke="#b7796b" stroke-width="5"/>`,
      key: `<circle cx="18" cy="25" r="16" fill="none" stroke="#d4ad4d" stroke-width="9"/><rect x="31" y="21" width="45" height="9" fill="#d4ad4d"/><rect x="57" y="29" width="9" height="14" fill="#d4ad4d"/><rect x="68" y="29" width="9" height="9" fill="#d4ad4d"/>`,
      dice: `<rect x="4" y="4" width="68" height="68" rx="8" fill="#e8e1cf"/><g fill="#4d4359"><circle cx="20" cy="20" r="6"/><circle cx="56" cy="20" r="6"/><circle cx="38" cy="38" r="6"/><circle cx="20" cy="56" r="6"/><circle cx="56" cy="56" r="6"/></g>`,
      gear: `<g fill="#8a756d"><rect x="31" width="16" height="16"/><rect x="31" y="60" width="16" height="16"/><rect y="31" width="16" height="16"/><rect x="60" y="31" width="16" height="16"/><rect x="8" y="8" width="15" height="15" transform="rotate(-45 15.5 15.5)"/><rect x="53" y="8" width="15" height="15" transform="rotate(45 60.5 15.5)"/><rect x="8" y="53" width="15" height="15" transform="rotate(45 15.5 60.5)"/><rect x="53" y="53" width="15" height="15" transform="rotate(-45 60.5 60.5)"/><circle cx="38" cy="38" r="28"/></g><circle cx="38" cy="38" r="11" fill="#463f4f"/>`,
      duck: `<ellipse cx="36" cy="49" rx="31" ry="22" fill="#f0c84d"/><circle cx="51" cy="25" r="20" fill="#f4d45c"/><polygon points="67,26 82,33 66,39" fill="#d98243"/><circle cx="56" cy="20" r="4" fill="#343044"/><path d="M12 49c12-10 21-9 28 2" fill="none" stroke="#d6a93d" stroke-width="7"/>`,
      rocket: `<path d="M38 2c19 14 25 37 18 58H20C13 39 19 16 38 2z" fill="#e5e2d8"/><circle cx="38" cy="31" r="10" fill="#65a8bd"/><path d="M20 48L6 65h17M56 48l14 17H53" fill="#cb5962"/><path d="M28 60l10 19 10-19" fill="#efa447"/>`,
      brush: `<path d="M9 58l33-33 14 14-33 33H9z" fill="#a77950"/><rect x="38" y="18" width="23" height="25" transform="rotate(45 49.5 30.5)" fill="#c7a36b"/><path d="M50 19c9-16 19-18 25-17-1 8-5 19-18 25z" fill="#5aa0a6"/>`,
      train: `<rect x="4" y="29" width="68" height="33" fill="#bb5357"/><rect x="13" y="9" width="39" height="27" fill="#d66f62"/><rect x="52" y="19" width="20" height="20" fill="#8f454c"/><rect x="20" y="15" width="12" height="12" fill="#8bc0c1"/><rect x="36" y="15" width="12" height="12" fill="#8bc0c1"/><circle cx="20" cy="63" r="10" fill="#3e3943"/><circle cx="58" cy="63" r="10" fill="#3e3943"/><rect x="59" y="4" width="9" height="18" fill="#4c4650"/>`,
      ball: `<circle cx="38" cy="38" r="35" fill="#df6b54"/><path d="M4 38h68M38 4v68M13 13c20 14 30 36 50 50M63 13C43 27 33 49 13 63" fill="none" stroke="#f3d071" stroke-width="7"/>`,
      glasses: `<circle cx="20" cy="38" r="17" fill="none" stroke="#b9a47b" stroke-width="7"/><circle cx="58" cy="38" r="17" fill="none" stroke="#b9a47b" stroke-width="7"/><path d="M37 38h5M2 30l-10-8M76 30l10-8" stroke="#b9a47b" stroke-width="6"/>`,
      candle: `<rect x="23" y="22" width="31" height="52" fill="#e7d6a0"/><path d="M38 0c12 13 8 24 0 29-8-5-12-16 0-29z" fill="#ef9d42"/><rect x="29" y="30" width="7" height="36" fill="#f5e6b8"/><path d="M23 36c8 7 21 0 31 8" fill="none" stroke="#c9b983" stroke-width="4"/>`,
      feather: `<path d="M69 2C36 7 14 31 11 68c25-2 50-19 58-66z" fill="#d9c4a0"/><path d="M12 70L61 13M22 54l-8-12m20 0-9-15m24 2-8-14" stroke="#8e765d" stroke-width="4"/>`,
      moon: `<path d="M59 4C27 9 13 44 35 66 9 58-3 30 12 11 25-6 48-7 59 4z" fill="#f3dd8a"/>`,
      cat: `<path d="M14 30L8 5l21 15c6-3 14-3 20 0L69 5l-5 27c7 8 9 18 7 31H7C5 49 8 38 14 30z" fill="#4d4557"/><circle cx="26" cy="38" r="4" fill="#d7c45c"/><circle cx="51" cy="38" r="4" fill="#d7c45c"/><path d="M32 49h12M10 49H-5m82 0H62" stroke="#c1aeb9" stroke-width="3"/>`,
      book: `<path d="M4 10c17-7 30-3 34 5v53c-8-7-19-9-34-4z" fill="#9e4e58"/><path d="M72 10c-17-7-30-3-34 5v53c8-7 19-9 34-4z" fill="#b65d5e"/><path d="M38 15v53" stroke="#e7cda0" stroke-width="4"/><path d="M10 20c8-2 15-1 21 3m-21 12c8-2 15-1 21 3m14-15c6-4 13-5 21-3m-21 18c6-4 13-5 21-3" fill="none" stroke="#e2b87f" stroke-width="3"/>`,
      planet: `<circle cx="39" cy="39" r="27" fill="#7e78bb"/><path d="M7 48c18 9 49 5 66-10 7-6 4-12-4-13" fill="none" stroke="#e0b96a" stroke-width="9"/><circle cx="29" cy="28" r="6" fill="#a6a1d0"/><circle cx="49" cy="48" r="8" fill="#6661a2"/>`,
      satellite: `<rect x="28" y="22" width="24" height="30" fill="#c7c6c0"/><rect x="0" y="18" width="25" height="38" fill="#4e7da4"/><rect x="55" y="18" width="25" height="38" fill="#4e7da4"/><path d="M40 22V8m0 0 12-8" stroke="#d9d7cf" stroke-width="5"/><circle cx="52" cy="1" r="5" fill="#d9a955"/>`,
      alien: `<path d="M38 1C17 1 5 17 8 39c3 23 18 35 30 35s27-12 30-35C71 17 59 1 38 1z" fill="#75b78b"/><ellipse cx="24" cy="31" rx="9" ry="14" fill="#272b3d" transform="rotate(-18 24 31)"/><ellipse cx="52" cy="31" rx="9" ry="14" fill="#272b3d" transform="rotate(18 52 31)"/><path d="M29 55c6 4 12 4 18 0" fill="none" stroke="#4d7c66" stroke-width="4"/>`,
      glove: `<path d="M8 34V13h10v20h4V5h10v27h4V0h10v32h4V8h10v28h4V17h10v35c0 15-10 23-26 23H29C15 75 8 61 8 48z" fill="#d4d9df"/><path d="M10 51h53" stroke="#8194a4" stroke-width="6"/>`,
      crystal: `<polygon points="38,0 68,23 57,70 18,70 7,23" fill="#5bc1c4"/><polygon points="38,0 44,24 25,24" fill="#b0efdf"/><polygon points="7,23 25,24 18,70" fill="#339ba8"/><polygon points="44,24 68,23 57,70" fill="#287f9a"/>`,
      star: `<polygon points="38,0 47,27 76,28 53,45 61,74 38,57 15,74 23,45 0,28 29,27" fill="#e8c653"/>`,
      scarab: `<ellipse cx="38" cy="43" rx="24" ry="31" fill="#397f7f"/><path d="M38 12v62M15 38h46" stroke="#e0b95c" stroke-width="5"/><path d="M17 26L4 13m55 13 13-13M15 51 2 65m59-14 13 14" stroke="#397f7f" stroke-width="7"/><circle cx="38" cy="9" r="10" fill="#2f686f"/>`,
      flask: `<rect x="28" y="0" width="20" height="25" fill="#c8d8ce"/><path d="M24 22v15L6 67c-4 7 1 11 10 11h44c9 0 14-4 10-11L52 37V22z" fill="#8fc7bb"/><path d="M13 60h50l7 12H6z" fill="#66a69f"/><circle cx="28" cy="56" r="5" fill="#d7eee2"/>`,
      snake: `<path d="M12 12c44-18 57 10 35 23-16 9-30 2-31 17-2 15 22 12 39 7" fill="none" stroke="#6f9b58" stroke-width="13" stroke-linecap="round"/><path d="M52 55l21 6-17 13z" fill="#6f9b58"/><circle cx="63" cy="62" r="2" fill="#2d3138"/>`,
      lantern: `<path d="M19 22h39l7 45H12z" fill="#9c5f3d"/><rect x="22" y="30" width="33" height="29" fill="#e6b85e"/><path d="M25 22C25 6 52 6 52 22" fill="none" stroke="#61515a" stroke-width="6"/><rect x="8" y="67" width="61" height="8" fill="#61515a"/>`,
      map: `<rect x="4" y="7" width="68" height="59" fill="#d8b874"/><path d="M17 7v59m25-59v59M58 7v59" stroke="#b7935a" stroke-width="4"/><path d="M12 47c16-25 31 10 50-25" fill="none" stroke="#745d48" stroke-width="4"/><path d="M51 42l13 13m0-13L51 55" stroke="#a74748" stroke-width="5"/>`,
      crown: `<rect x="7" y="49" width="64" height="18" fill="#d5a93e"/><polygon points="8,49 4,10 24,32 38,2 52,32 72,10 69,49" fill="#edc657"/><circle cx="38" cy="42" r="6" fill="#b75063"/>`,
      eye: `<path d="M2 38c18-27 54-27 72 0-18 27-54 27-72 0z" fill="#e6d49b"/><circle cx="38" cy="38" r="17" fill="#4e8d95"/><circle cx="38" cy="38" r="8" fill="#2e3544"/><circle cx="33" cy="32" r="4" fill="#fff"/>`,
      ticket: `<path d="M5 13h66v16c-13 3-13 21 0 24v16H5V53c13-3 13-21 0-24z" fill="#e0b953"/><path d="M27 13v56" stroke="#9c7240" stroke-width="4" stroke-dasharray="6 5"/><circle cx="49" cy="41" r="10" fill="#c65a61"/>`,
      lollipop: `<circle cx="32" cy="29" r="27" fill="#d85e7a"/><path d="M14 19c11-17 34-12 37 4 3 14-13 23-24 15-8-6-3-17 6-17 7 0 9 8 4 12" fill="none" stroke="#f2b4c0" stroke-width="6"/><path d="M45 49l24 29" stroke="#e7d4b3" stroke-width="7"/>`,
      balloon: `<ellipse cx="37" cy="31" rx="27" ry="31" fill="#cf626f"/><path d="M37 62l-7 9h14z" fill="#cf626f"/><path d="M37 70c14 6-10 14 5 23" fill="none" stroke="#e5cfad" stroke-width="3"/><ellipse cx="28" cy="19" rx="7" ry="11" fill="#ed9ca1" opacity=".65"/>`,
      teddy: `<circle cx="17" cy="18" r="13" fill="#9d6d4f"/><circle cx="59" cy="18" r="13" fill="#9d6d4f"/><circle cx="38" cy="28" r="26" fill="#b77e55"/><ellipse cx="38" cy="61" rx="27" ry="23" fill="#a97150"/><circle cx="29" cy="25" r="4" fill="#2e2c35"/><circle cx="48" cy="25" r="4" fill="#2e2c35"/><ellipse cx="38" cy="39" rx="10" ry="8" fill="#e0b688"/><circle cx="38" cy="36" r="4" fill="#3a3132"/><circle cx="11" cy="59" r="12" fill="#b77e55"/><circle cx="65" cy="59" r="12" fill="#b77e55"/>`,
      camera: `<rect x="4" y="18" width="68" height="48" rx="5" fill="#4a4d59"/><rect x="17" y="10" width="22" height="12" fill="#686c75"/><circle cx="43" cy="42" r="19" fill="#222938"/><circle cx="43" cy="42" r="12" fill="#5b94a4"/><circle cx="64" cy="28" r="5" fill="#e3b755"/>`,
      icecream: `<path d="M17 36h42L38 78z" fill="#d2a263"/><circle cx="28" cy="30" r="19" fill="#e7a3b6"/><circle cx="48" cy="29" r="19" fill="#9fc8b1"/><circle cx="38" cy="14" r="17" fill="#f1d99d"/>`,
      drone: `<rect x="25" y="26" width="28" height="23" rx="5" fill="#7b8492"/><path d="M26 32L8 17m44 15 18-15M26 44 8 59m44-15 18 15" stroke="#7b8492" stroke-width="6"/><circle cx="8" cy="17" r="12" fill="none" stroke="#a7b1ba" stroke-width="5"/><circle cx="70" cy="17" r="12" fill="none" stroke="#a7b1ba" stroke-width="5"/><circle cx="8" cy="59" r="12" fill="none" stroke="#a7b1ba" stroke-width="5"/><circle cx="70" cy="59" r="12" fill="none" stroke="#a7b1ba" stroke-width="5"/><circle cx="39" cy="50" r="7" fill="#4e98a5"/>`,
      sneaker: `<path d="M4 49c16-4 26-19 30-39l16 24c8 10 18 12 26 14v18H4z" fill="#d36366"/><path d="M8 55h64v10H8z" fill="#e9e2d4"/><path d="M29 28l25 14m-31-5 25 13" stroke="#f1d7c6" stroke-width="5"/>`,
      coin: `<circle cx="38" cy="38" r="34" fill="#d7a847"/><circle cx="38" cy="38" r="26" fill="#efc85b"/><path d="M38 18v40M25 27h19c14 0 14 16 0 16H27m0 0h19c14 0 14 16 0 16H25" fill="none" stroke="#aa7638" stroke-width="6"/>`,
      robot: `<rect x="13" y="16" width="50" height="42" rx="6" fill="#8395a0"/><rect x="23" y="4" width="30" height="14" fill="#a8b5b9"/><circle cx="29" cy="34" r="6" fill="#6ad1bd"/><circle cx="48" cy="34" r="6" fill="#6ad1bd"/><path d="M26 48h25" stroke="#4c5862" stroke-width="5"/><rect x="19" y="58" width="13" height="19" fill="#65747e"/><rect x="45" y="58" width="13" height="19" fill="#65747e"/><rect x="1" y="27" width="12" height="27" fill="#65747e"/><rect x="63" y="27" width="12" height="27" fill="#65747e"/><path d="M38 4V-6" stroke="#a8b5b9" stroke-width="5"/><circle cx="38" cy="-8" r="5" fill="#df6c67"/>`,
      leaf: `<path d="M71 3C35 7 8 29 5 71c38-3 62-27 66-68z" fill="#65a76f"/><path d="M9 70L58 18M27 51l-13-5m26-8-4-15m17 3-3-13" stroke="#3e7655" stroke-width="5"/>`,
      headphones: `<path d="M9 42C9 13 24 2 38 2s29 11 29 40" fill="none" stroke="#7e78a4" stroke-width="10"/><rect x="2" y="38" width="20" height="34" rx="8" fill="#a06c92"/><rect x="54" y="38" width="20" height="34" rx="8" fill="#a06c92"/><path d="M20 66c10 9 27 10 38 0" fill="none" stroke="#7e78a4" stroke-width="5"/>`,
      hourglass: `<path d="M12 7h52M12 69h52" stroke="#8a6046" stroke-width="9"/><path d="M18 11c0 18 9 24 20 28-11 5-20 11-20 27h40c0-16-9-22-20-27 11-4 20-10 20-28z" fill="#d8c99d"/><path d="M27 18h22c-2 8-6 13-11 16-6-3-9-8-11-16zm11 27c8 5 13 9 14 16H24c1-7 6-11 14-16z" fill="#d4a853"/>`,
      clock: `<circle cx="38" cy="38" r="34" fill="#b08a55"/><circle cx="38" cy="38" r="27" fill="#e7d8a7"/><path d="M38 16v23l15 10" fill="none" stroke="#54464a" stroke-width="6"/><g fill="#765e4c"><rect x="35" y="8" width="6" height="7"/><rect x="35" y="61" width="6" height="7"/><rect x="61" y="35" width="7" height="6"/><rect x="8" y="35" width="7" height="6"/></g>`,
      sword: `<path d="M39 0l10 13-6 43H31l-6-43z" fill="#cbd2d0"/><path d="M38 4v50" stroke="#eef1e9" stroke-width="4"/><rect x="13" y="52" width="50" height="10" fill="#ba8a45"/><rect x="33" y="61" width="11" height="20" fill="#76504b"/><circle cx="38" cy="83" r="8" fill="#ba8a45"/>`,
      rose: `<path d="M39 33v46" stroke="#49774f" stroke-width="7"/><path d="M38 57c-16-8-22 1-25 11 12 2 21-1 25-11zm2 5c14-11 24-5 28 5-12 4-23 2-28-5z" fill="#5e9b62"/><path d="M38 2c10-7 25 2 20 15 10 3 10 18-2 23-5 15-28 15-34 0-13-4-13-20-2-24C17 4 31-4 38 2z" fill="#b84d65"/><path d="M28 16c6-5 16-4 20 3-7 0-10 4-10 11-8-2-12-7-10-14z" fill="#e1717e"/>`,
      mask: `<path d="M4 16c19-13 49-13 68 0v42c-15 19-53 19-68 0z" fill="#e7d6b3"/><path d="M14 31c9-8 18-7 26 1-9 8-18 8-26-1zm28 1c8-8 17-9 26-1-8 9-17 9-26 1z" fill="#4a4250"/><path d="M27 54c7 6 15 6 22 0" fill="none" stroke="#9a6f66" stroke-width="4"/>`,
      orb: `<circle cx="38" cy="38" r="31" fill="#7655a4"/><circle cx="30" cy="27" r="13" fill="#b68bd0" opacity=".75"/><path d="M9 48c18 16 42 17 58 0" fill="none" stroke="#4c8ca1" stroke-width="7"/><circle cx="38" cy="38" r="36" fill="none" stroke="#d0b4df" stroke-width="4"/>`
    };
    return sprites[type] || sprites.star;
  };

  const hiddenSprite = (id, label, type, x, y, options={}) => {
    const scale = options.scale ?? 1;
    const rotate = options.rotate ?? 0;
    const hit = options.hit ?? 92;
    const opacity = options.opacity ?? 1;
    return `<g class="hidden-object" data-object="${id}" transform="translate(${x} ${y}) rotate(${rotate}) scale(${scale})" role="button" aria-label="${label}" opacity="${opacity}">
      ${sprite(type)}
      <rect x="-12" y="-12" width="${hit}" height="${hit}" fill="transparent" pointer-events="all"/>
    </g>`;
  };

  const decorSprite = (type, x, y, options={}) => `<g transform="translate(${x} ${y}) rotate(${options.rotate ?? 0}) scale(${options.scale ?? 1})" opacity="${options.opacity ?? .9}">${sprite(type)}</g>`;

  Object.assign(HG, { pixelCloud, flower, tree, pine, sprite, hiddenSprite, decorSprite });
})();
