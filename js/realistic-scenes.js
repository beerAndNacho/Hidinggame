(() => {
  'use strict';

  const HG = window.HiddenGame = window.HiddenGame || {};
  const REALISTIC_SCENES = [
    {
        "url": "https://images.unsplash.com/photo-1448375240586-882707db888b",
        "source": "https://unsplash.com/photos/sp-p7uuT0tw",
        "credit": "Sebastian Unrau",
        "focus": "50% 52%",
        "filter": "saturate(1.04) contrast(1.06) brightness(.88)"
    },
    {
        "url": "https://images.unsplash.com/photo-1760546100206-de205df95289",
        "source": "https://unsplash.com/photos/4j7YguvBAYQ",
        "credit": "Raymond Yeung",
        "focus": "50% 55%",
        "filter": "saturate(1.12) contrast(1.08) brightness(.76)"
    },
    {
        "url": "https://images.unsplash.com/photo-1672750181929-c80c2bf71482",
        "source": "https://unsplash.com/photos/pomerK599MU",
        "credit": "Oleksandr",
        "focus": "50% 52%",
        "filter": "saturate(.92) contrast(1.09) brightness(.84)"
    },
    {
        "url": "https://images.unsplash.com/photo-1638033603853-65973c9b00f3",
        "source": "https://unsplash.com/photos/InDviRu9nEA",
        "credit": "Gytis Bukauskas",
        "focus": "50% 52%",
        "filter": "saturate(.88) contrast(1.08) brightness(.9)"
    },
    {
        "url": "https://images.unsplash.com/photo-1543467573-fd63c26102c5",
        "source": "https://unsplash.com/photos/6xXt9LYQAdw",
        "credit": "Francisco Jesús Navarro Hernández",
        "focus": "50% 48%",
        "filter": "saturate(1.13) contrast(1.08) brightness(.78)"
    },
    {
        "url": "https://images.unsplash.com/photo-1770119074920-3c5603188095",
        "source": "https://unsplash.com/photos/ZC2vrxwMnds",
        "credit": "Björn Maser",
        "focus": "50% 54%",
        "filter": "saturate(.78) contrast(1.12) brightness(.75)"
    },
    {
        "url": "https://images.unsplash.com/photo-1675430411752-a2fd122b1eca",
        "source": "https://unsplash.com/photos/Lc3nJWScvOY",
        "credit": "Benjamin Lehman",
        "focus": "50% 52%",
        "filter": "saturate(.62) contrast(1.13) brightness(.62) sepia(.08)"
    },
    {
        "url": "https://images.unsplash.com/photo-1446776877081-d282a0f896e2",
        "source": "https://unsplash.com/photos/CpHNKNRwXps",
        "credit": "NASA",
        "focus": "50% 48%",
        "filter": "saturate(.88) contrast(1.16) brightness(.68)"
    },
    {
        "url": "https://images.unsplash.com/photo-1565946802467-115f23211210",
        "source": "https://unsplash.com/photos/FTQ8O23A-U4",
        "credit": "Random Institute",
        "focus": "50% 53%",
        "filter": "saturate(.82) contrast(1.1) brightness(.86) sepia(.08)"
    },
    {
        "url": "https://images.unsplash.com/photo-1642034653827-dc76535403d8",
        "source": "https://unsplash.com/photos/-9j6klWIeDg",
        "credit": "Jack McGrath",
        "focus": "50% 50%",
        "filter": "saturate(1.12) contrast(1.08) brightness(.76)"
    },
    {
        "url": "https://images.unsplash.com/photo-1776596958578-e39b67fea706",
        "source": "https://unsplash.com/photos/9VLP2jA_MV8",
        "credit": "Emma Gasseau-Dryer",
        "focus": "50% 47%",
        "filter": "saturate(1.2) contrast(1.13) brightness(.65)"
    },
    {
        "url": "https://images.unsplash.com/photo-1711867623677-d34515fe679b",
        "source": "https://unsplash.com/photos/w1VjV4KF5aI",
        "credit": "Jayanth Muppaneni",
        "focus": "50% 50%",
        "filter": "saturate(.76) contrast(1.11) brightness(.72) sepia(.1)"
    },
    {
        "url": "https://images.unsplash.com/photo-1505064750047-f810f700e6d3",
        "source": "https://unsplash.com/photos/WQD6TCLOozg",
        "credit": "Daria Nepriakhina",
        "focus": "50% 50%",
        "filter": "saturate(.84) contrast(1.02) brightness(.98)"
    },
    {
        "url": "https://images.unsplash.com/photo-1764250406217-38106c7bff91",
        "source": "https://unsplash.com/photos/f4sOIvOxXYk",
        "credit": "Philippe BONTEMPS",
        "focus": "50% 52%",
        "filter": "saturate(.82) contrast(1.18) brightness(.62) sepia(.1)"
    },
    {
        "url": "https://images.unsplash.com/photo-1509440159596-0249088772ff",
        "source": "https://unsplash.com/photos/rsWZ-P9FbQ4",
        "credit": "Wesual Click",
        "focus": "50% 53%",
        "filter": "saturate(1.06) contrast(1.04) brightness(.88)"
    },
    {
        "url": "https://images.unsplash.com/photo-1534766664852-7dbfbf053c4c",
        "source": "https://unsplash.com/photos/T1Wru10gKhg",
        "credit": "Tomoe Steineck",
        "focus": "50% 49%",
        "filter": "saturate(1.18) contrast(1.09) brightness(.75)"
    },
    {
        "url": "https://images.unsplash.com/photo-1760281467985-f2514acbc183",
        "source": "https://unsplash.com/photos/roller-coaster-train-on-a-steep-drop--XQ17LA7rHY",
        "credit": "Anakin",
        "focus": "50% 51%",
        "filter": "saturate(.83) contrast(1.13) brightness(.7) sepia(.06)"
    },
    {
        "url": "https://images.unsplash.com/photo-1782925739407-ef594dc5370f",
        "source": "https://unsplash.com/photos/historic-stone-building-with-a-green-lawn-and-cloudy-sky-ob_8tLxnNNY",
        "credit": "Jessica Share",
        "focus": "50% 52%",
        "filter": "saturate(.72) contrast(1.11) brightness(.72)"
    },
    {
        "url": "https://images.unsplash.com/photo-1769633178915-89b48169ffb5",
        "source": "https://unsplash.com/photos/a-train-at-a-snowy-station-platform-YkLr0Kyx8po",
        "credit": "Nikita Pishchugin",
        "focus": "56% 50%",
        "filter": "saturate(.25) contrast(1.18) brightness(.72)"
    },
    {
        "url": "https://images.unsplash.com/photo-1567852073255-9194fe3b4593",
        "source": "https://unsplash.com/photos/orange-mercedes-benz-truck-near-house-viewing-mountain-s-JL907lkG8",
        "credit": "Andrea Ferrario",
        "focus": "50% 54%",
        "filter": "saturate(.92) contrast(1.08) brightness(.78)"
    },
    {
        "url": "https://images.unsplash.com/photo-1781127445209-f02336fa36a0",
        "source": "https://unsplash.com/photos/professional-video-cameras-and-crew-working-on-a-studio-set-w9cXyqluI8g",
        "credit": "Cemrecan Yurtman",
        "focus": "50% 50%",
        "filter": "saturate(.84) contrast(1.12) brightness(.7)"
    },
    {
        "url": "https://images.unsplash.com/photo-1785159246454-06f59767f09d",
        "source": "https://unsplash.com/photos/people-watching-fireworks-explode-over-a-narrow-street-at-night-hGZmppmi2YE",
        "credit": "ayumi kubo",
        "focus": "50% 44%",
        "filter": "saturate(1.15) contrast(1.13) brightness(.64)"
    },
    {
        "url": "https://images.unsplash.com/photo-1760998855258-51cca0382773",
        "source": "https://unsplash.com/photos/interior-of-a-grand-library-with-many-bookshelves-jNkMbVhiT2w",
        "credit": "Natalia Bazyl",
        "focus": "50% 51%",
        "filter": "saturate(.86) contrast(1.08) brightness(.78)"
    },
    {
        "url": "https://images.unsplash.com/photo-1779814888551-35dc9d698a0f",
        "source": "https://unsplash.com/photos/a-large-cave-interior-filled-with-illuminated-stalactites-and-stalagmites-_sQPa1WaJpI",
        "credit": "Krzysztof",
        "focus": "50% 52%",
        "filter": "saturate(1.02) contrast(1.16) brightness(.66)"
    },
    {
        "url": "https://images.unsplash.com/photo-1633465091434-117f2bcffd9d",
        "source": "https://unsplash.com/photos/a-fish-tank-filled-with-rocks-and-plants-Hiwjtbw4jkw",
        "credit": "Jadon Barnes",
        "focus": "50% 50%",
        "filter": "saturate(1.08) contrast(1.08) brightness(.72)"
    },
    {
        "url": "https://images.unsplash.com/photo-1728873892739-d5808fa51910",
        "source": "https://unsplash.com/photos/a-train-is-pulling-into-a-train-station-qawdiFBEgSY",
        "credit": "Alain Nguyen",
        "focus": "50% 52%",
        "filter": "saturate(.78) contrast(1.15) brightness(.66)"
    },
    {
        "url": "https://images.unsplash.com/photo-1664786063715-ac3182f3bff8",
        "source": "https://unsplash.com/photos/a-person-in-a-dark-room-Fzr8w_5nYgQ",
        "credit": "Percy Smith",
        "focus": "50% 48%",
        "filter": "saturate(.22) contrast(1.19) brightness(.57)"
    },
    {
        "url": "https://images.unsplash.com/photo-1781330184655-8210f7010e0e",
        "source": "https://unsplash.com/photos/two-men-observe-complex-scientific-machinery-in-a-laboratory--6RHGcAhAHc",
        "credit": "Daniel Miksha",
        "focus": "50% 50%",
        "filter": "saturate(.88) contrast(1.12) brightness(.7)"
    },
    {
        "url": "https://images.unsplash.com/photo-1776717577962-e3516cf2b1f3",
        "source": "https://unsplash.com/photos/traditional-japanese-castle-surrounded-by-cherry-blossoms-6oG7sH94YMo",
        "credit": "Jack Coble",
        "focus": "50% 48%",
        "filter": "saturate(1.06) contrast(1.05) brightness(.9)"
    },
    {
        "url": "https://images.unsplash.com/photo-1560005490-8ce6d5357ffa",
        "source": "https://unsplash.com/photos/black-table-lamp-beside-book-6Ptwy-nDnoE",
        "credit": "Lai Man Nung",
        "focus": "50% 54%",
        "filter": "saturate(.46) contrast(1.19) brightness(.6) sepia(.12)"
    }
];

  const serializer = new XMLSerializer();

  function escapeAttribute(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('"', '&quot;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;');
  }

  function photoUrl(photo, width = 1600) {
    const height = Math.round(width * .62);
    const quality = window.devicePixelRatio > 1.25 ? 84 : 79;
    return `${photo.url}?auto=format&fit=crop&w=${width}&h=${height}&q=${quality}`;
  }

  function parseStageSvg(svgMarkup, stage) {
    const doc = new DOMParser().parseFromString(svgMarkup, 'image/svg+xml');
    if (doc.querySelector('parsererror')) throw new Error('스테이지 SVG 파싱 실패');

    const root = doc.documentElement;
    const viewBox = root.getAttribute('viewBox') || '0 0 1000 620';
    const objectNodes = [...root.querySelectorAll('[data-object]')];
    const targetById = new Map((stage?.targets || []).map(target => [target.id, target]));

    const serializeWithPositioningAncestors = node => {
      const id = node.getAttribute('data-object') || '';
      const target = targetById.get(id) || { name: id, icon: '🔎' };
      const ownAttributes = [...node.attributes]
        .filter(attribute => !['class', 'data-object', 'role', 'tabindex', 'aria-label'].includes(attribute.name))
        .map(attribute => ` ${attribute.name}="${escapeAttribute(attribute.value)}"`)
        .join('');
      let markup = `<g class="hidden-object real-hidden-object" data-object="${escapeAttribute(id)}" role="button" tabindex="0" aria-label="${escapeAttribute(target.name)}"${ownAttributes}>
        <text class="real-object-emoji" x="34" y="38" text-anchor="middle" dominant-baseline="middle" font-size="50" font-family="Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, sans-serif">${target.icon || '🔎'}</text>
        <rect x="-16" y="-16" width="100" height="100" rx="18" fill="transparent" pointer-events="all"/>
      </g>`;
      let parent = node.parentElement;

      while (parent && parent !== root) {
        const attributes = [...parent.attributes]
          .filter(attribute => !['role', 'tabindex', 'aria-label', 'aria-hidden'].includes(attribute.name))
          .map(attribute => ` ${attribute.name}="${escapeAttribute(attribute.value)}"`)
          .join('');
        markup = `<g${attributes}>${markup}</g>`;
        parent = parent.parentElement;
      }

      return markup;
    };

    const objectMarkup = objectNodes.map(serializeWithPositioningAncestors).join('');
    objectNodes.forEach(node => node.remove());

    root.setAttribute('aria-hidden', 'true');
    root.setAttribute('focusable', 'false');
    root.removeAttribute('aria-label');
    root.removeAttribute('role');

    return {
      viewBox,
      objectMarkup,
      fallbackMarkup: serializer.serializeToString(root),
      objectCount: objectNodes.length
    };
  }

  function renderRealisticStage(stage, stageIndex) {
    const photo = REALISTIC_SCENES[stageIndex] || REALISTIC_SCENES[0];
    const originalSvg = stage.svg();
    let artwork;

    try {
      artwork = parseStageSvg(originalSvg, stage);
    } catch {
      return originalSvg;
    }

    const [focusX = '50%', focusY = '50%'] = photo.focus.split(' ');
    const visibility = Math.max(.53, .72 - stageIndex * .0065).toFixed(2);
    const sourceSuffix = photo.source.includes('?') ? '&' : '?';

    return `<div class="realistic-scene" style="--focus-x:${focusX};--focus-y:${focusY};--photo-filter:${photo.filter};--object-visibility:${visibility}">
      <div class="real-fallback">${artwork.fallbackMarkup}</div>
      <img class="real-photo" src="${escapeAttribute(photoUrl(photo))}" alt="${escapeAttribute(stage.name)} 사실적 사건 현장 · Photo by ${escapeAttribute(photo.credit)}" decoding="async" fetchpriority="high" referrerpolicy="no-referrer" draggable="false" />
      <svg class="real-object-layer" viewBox="${escapeAttribute(artwork.viewBox)}" preserveAspectRatio="xMidYMid meet" aria-label="숨은 물건 레이어">${artwork.objectMarkup}</svg>
      <span class="real-scene-chip" data-scene-ui>REAL SCENE · ${String(stageIndex + 1).padStart(2, '0')}</span>
      <a class="real-photo-credit" data-scene-ui href="${escapeAttribute(photo.source + sourceSuffix + 'utm_source=hidinggame&utm_medium=referral')}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttribute(photo.credit)} 사진 출처 열기">Photo · ${escapeAttribute(photo.credit)}</a>
      <span class="real-photo-status" data-scene-ui>고해상도 현장 불러오는 중…</span>
    </div>`;
  }

  function hydrateRealisticStage(sceneRoot, stageIndex) {
    const wrapper = sceneRoot?.querySelector('.realistic-scene');
    const image = wrapper?.querySelector('.real-photo');
    if (!wrapper || !image) return;

    let settled = false;
    const ready = () => {
      if (settled) return;
      settled = true;
      wrapper.classList.remove('photo-error');
      wrapper.classList.add('photo-ready');

      const next = REALISTIC_SCENES[stageIndex + 1];
      if (next) {
        window.setTimeout(() => {
          const preload = new Image();
          preload.decoding = 'async';
          preload.referrerPolicy = 'no-referrer';
          preload.src = photoUrl(next, 1280);
        }, 700);
      }
    };

    const failed = () => {
      if (settled) return;
      settled = true;
      wrapper.classList.add('photo-error');
      const status = wrapper.querySelector('.real-photo-status');
      if (status) status.textContent = '내장 장면으로 플레이 중';
    };

    image.addEventListener('load', ready, { once: true });
    image.addEventListener('error', failed, { once: true });

    if (image.complete) {
      if (image.naturalWidth > 0) ready();
      else failed();
    }

    window.setTimeout(() => {
      if (settled) return;
      const status = wrapper.querySelector('.real-photo-status');
      if (status) status.textContent = '내장 장면 준비됨 · 사진 연결 확인 중';
    }, 4200);
  }

  Object.assign(HG, {
    realisticScenes: REALISTIC_SCENES,
    photoUrl,
    renderRealisticStage,
    hydrateRealisticStage
  });
})();
