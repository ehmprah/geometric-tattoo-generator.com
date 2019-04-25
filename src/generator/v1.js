/**
 * @file
 * The generation algorithm
 */
import seedrandom from 'seedrandom';

const config = [
  {
    title: 'shapes-along-line',
    groups: [2, 2, 2, 3, 3, 4],
    group: {
      items: [1, 1, 1, 1, 1, 2, 2, 2, 3],
      shape: ['line', 'rect', 'circle', 'triangle', 'hexagon'],
      width: [25, 50, 75, 100],
      centered: [false, true],
      rotation: [false, true],
      fill: 'transparent', // We're only using transparent here because we got big shapes!
      stroke: '#000',
      strokeDash: ['', '', '', '', '', '', '', '', '10,5'],
      strokeWidth: [2, 3, 4],
      startX: 'center',
      startY: 'random',
      offsetStrategy: ['mirrored', 'direction', 'random-y'],
      offsetAmount: [10, 20, 30],
    },
    overrides: [
      {
        shape: 'line',
        width: 300,
        strokeDash: '',
        rotation: false,
        centered: true,
        offsetStrategy: 'mirrored',
        startY: 'center',
      },
    ],
  },
  {
    title: 'shapes-around-center-same-size',
    groups: [2, 3, 4],
    group: {
      items: [1, 1, 1, 2, 2, 3],
      shape: ['line', 'rect', 'circle', 'triangle', 'hexagon'],
      width: 120,
      centered: [false, true],
      rotation: [false, true],
      fill: 'transparent',
      stroke: '#000',
      strokeDash: ['', '', '', '', '', '', '10,5'],
      strokeWidth: [2, 3, 4, 5],
      startX: ['center'],
      startY: ['center'],
      offsetStrategy: ['distributed', 'mirrored'],
      offsetAmount: 10,
    },
    overrides: [
      {
        // We use exactly ONE chance of a gradient
        fill: ['transparent', 'transparent', 'url(#topdown)'],
        rotation: false,
        items: 1,
      },
    ],
  },
  {
    title: 'shapes-around-center',
    groups: [2, 3, 4],
    group: {
      items: [1, 1, 1, 2, 2, 3],
      shape: ['line', 'rect', 'circle', 'triangle', 'hexagon'],
      width: [40, 50, 60, 70, 80, 90, 100, 110, 120],
      centered: true,
      rotation: [false, true],
      fill: 'transparent',
      stroke: '#000',
      strokeDash: ['', '', '', '', '', '', '', '', '5', '30,10'],
      strokeWidth: [2, 3, 4, 5],
      startX: ['center'],
      startY: ['center'],
      offsetStrategy: ['distributed', 'mirrored'],
      offsetAmount: [10, 20, 30, 40, 50],
    },
  },
  {
    title: 'random-shapes',
    groups: 1,
    group: {
      items: [2, 3, 4, 5, 6, 7],
      shape: ['rect', 'circle', 'triangle', 'hexagon'],
      width: [40, 50, 60, 70, 80, 90, 100],
      centered: [false, true],
      rotation: [false, true],
      fill: 'transparent',
      stroke: '#000',
      strokeDash: '',
      strokeWidth: [2, 3, 4, 5],
      startX: ['center', 'random'],
      startY: ['center', 'random'],
      offsetStrategy: ['distributed', 'random-x', 'random', 'random-y'],
      offsetAmount: [10, 20, 30, 40, 50],
    },
  },
  {
    title: 'diamonds',
    groups: [2, 3],
    group: {
      items: [1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5],
      shape: 'rect',
      width: [25, 50, 75, 100],
      centered: [false, true],
      rotation: true,
      fill: 'transparent',
      stroke: '#000',
      strokeDash: ['', '', '', '', '', '', '', '', '10,5'],
      strokeWidth: [2, 3, 4],
      startX: 'center',
      startY: 'center',
      offsetStrategy: 'mirrored',
      offsetAmount: [10, 20, 30],
    },
  },
  {
    title: 'three-shapes',
    groups: 3,
    group: {
      items: 1,
      shape: ['rect', 'circle', 'triangle', 'hexagon'],
      width: [25, 50, 75, 100],
      centered: [false, true],
      rotation: [false, true],
      fill: ['#000', 'transparent', 'url(#topdown)'],
      stroke: '#000',
      strokeDash: ['', '', '', '', '', '', '10,5'],
      strokeWidth: [2, 3, 4],
      startX: ['center', 'random'],
      startY: 'center',
      offsetStrategy: 'none',
      offsetAmount: 0,
    },
    overrides: [
      {
        fill: 'transparent',
        width: 100,
      },
      {
        fill: 'url(#topdown)',
        centered: false,
      },
      {
        fill: '#000',
        width: 25,
      },
    ],
  },
  {
    title: 'small-filled-shapes-along-line',
    groups: [2, 3],
    group: {
      items: [1, 1, 2, 3, 4, 5],
      shape: ['rect', 'circle', 'triangle', 'hexagon'],
      width: [20, 30],
      centered: [false, true],
      rotation: [false, true],
      fill: '#000',
      stroke: '#000',
      strokeDash: '',
      strokeWidth: 0,
      startX: ['center'],
      startY: ['random'],
      offsetStrategy: ['mirrored'],
      offsetAmount: [20, 30],
    },
    overrides: [
      {
        shape: 'line',
        width: 300,
        stroke: ['#000'],
        strokeDash: '',
        strokeWidth: [2, 3, 4],
        rotation: false,
        centered: true,
        offsetStrategy: 'mirrored',
        startY: ['center'],
      },
      {
        offsetStrategy: ['random-y', 'direction'],
        items: [1, 1, 1, 2, 2, 3],
      },
    ],
  },
  {
    title: 'circles-galore',
    groups: [1, 2],
    group: {
      items: [1, 1, 2, 2, 2, 3, 4, 5, 6],
      shape: 'circle',
      width: [25, 50, 75, 100],
      centered: [false, true],
      rotation: [false, true],
      fill: 'transparent',
      stroke: '#000',
      strokeDash: ['', '', '', '', '', '', '', '', '5,5'],
      strokeWidth: [2, 3, 4],
      startX: 'center',
      startY: 'center',
      offsetStrategy: ['mirrored', 'direction'],
      offsetAmount: [10, 20, 30],
    },
  },
  {
    title: 'stacked-triangle',
    groups: 1,
    group: {
      items: [3, 4, 5, 6, 7],
      shape: 'triangle',
      width: [50],
      centered: [false, true],
      rotation: [false, true],
      fill: ['transparent', 'url(#topdown)', '#fff'],
      stroke: '#000',
      strokeDash: '',
      strokeWidth: [2, 3, 4],
      startX: 'center',
      startY: 'start',
      offsetStrategy: 'direction',
      offsetAmount: [10, 20, 30],
    },
  },
  {
    title: 'triangle-galore',
    groups: [2, 3],
    group: {
      items: [1, 1, 1, 1, 1, 2, 2, 2, 3, 4, 5],
      shape: 'triangle',
      width: [25, 50, 75, 100],
      centered: [false, true],
      rotation: true,
      fill: 'transparent',
      stroke: '#000',
      strokeDash: ['', '', '', '', '', '', '', '', '10,5'],
      strokeWidth: [2, 3, 4],
      startX: 'center',
      startY: 'center',
      offsetStrategy: 'mirrored',
      offsetAmount: [10, 20, 30],
    },
  },
  {
    title: 'hexagon-galore',
    groups: [2, 3],
    group: {
      items: [1, 2, 3, 4, 5, 6, 7],
      shape: 'hexagon',
      width: [25, 50, 75, 100],
      centered: true,
      rotation: true,
      fill: 'transparent',
      stroke: '#000',
      strokeDash: ['', '', '', '', '', '', '', '', '10,5'],
      strokeWidth: [2, 3, 4],
      startX: 'center',
      startY: 'center',
      offsetStrategy: 'mirrored',
      offsetAmount: [10, 20, 30],
    },
  },
];

function generate(hash) {
  let svg = [];
  let gradient = '';

  // Get random number generator
  const rng = seedrandom.alea(hash);

  // Roll a stategy
  let strategy = roll(rng, config);

  // Set total size
  let totalWidth = 300;
  let totalHeight = 300;

  // Roll amount of groups
  let groups = Array.isArray(strategy.groups)
    ? roll(rng, strategy.groups)
    : strategy.groups;

  // Create groups
  for (let g = 0; g < groups; g++) {
    let group = [];
    // Create param object
    let params = {
      rng,
      x: 0,
      y: 0,
    };

    // Roll params for this group
    Object.keys(strategy.group).forEach(key => {
      params[key] = Array.isArray(strategy.group[key])
        ? roll(rng, strategy.group[key])
        : strategy.group[key];
    });

    // Allow overrides
    if (strategy.overrides && strategy.overrides[g]) {
      Object.keys(params).forEach(key => {
        let override = strategy.overrides[g][key];
        if (override !== undefined) {
          params[key] = Array.isArray(override)
            ? roll(rng, override)
            : override;
        }
      });
    }

    // Get start coordinates for this group
    params.x =
      params.startX === 'random'
        ? minmax(rng, params.width, totalWidth - params.width)
        : params.startX === 'center'
        ? totalWidth / 2
        : params.width;
    params.y =
      params.startY === 'random'
        ? minmax(rng, params.width, totalHeight - params.width)
        : params.startY === 'center'
        ? totalHeight / 2
        : params.width;

    params.initialX = params.x;
    params.initialY = params.y;

    // Add gradient definition
    if (params.fill === 'url(#topdown)') {
      gradient = `
        <defs>
          <linearGradient id="topdown" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="black"/>
            <stop offset="100%" stop-color="transparent"/>
          </linearGradient>
        </defs>
      `;
    }

    // We don't allow black fill for shapes bigger than half the width
    if (params.fill === '#000' && params.width > totalWidth / 2) {
      params.fill = 'transparent';
    }

    // We don't allow strokeDash if we have a fill
    if (params.fill !== 'transparent' && params.strokeDash !== '') {
      params.strokeDash = '';
    }

    // Create shapes
    for (let i = 0; i < params.items; i++) {
      if (params.offsetStrategy === 'random') {
        params.x = minmax(rng, params.width, totalWidth - params.width);
        params.y = minmax(rng, params.width, totalHeight - params.width);
      }

      if (params.offsetStrategy === 'random-y') {
        params.y = minmax(rng, params.width, totalHeight - params.width);
      }

      if (params.offsetStrategy === 'random-x') {
        params.x = minmax(rng, params.width, totalWidth - params.width);
      }

      if (params.offsetStrategy === 'direction') {
        // y strategy
        params.y = params.initialY + params.offsetAmount * i;
      }

      if (params.offsetStrategy === 'mirrored') {
        // x strategy
        if (params.items % 2 === 0) {
          if (i === 0) params.x = params.initialX + params.offsetAmount;
          if (i === 1) params.x = params.initialX - params.offsetAmount;
          if (i === 2) params.x = params.initialX + params.offsetAmount * 2;
          if (i === 3) params.x = params.initialX - params.offsetAmount * 2;
          if (i === 4) params.x = params.initialX + params.offsetAmount * 3;
          if (i === 5) params.x = params.initialX - params.offsetAmount * 3;
        } else {
          if (i === 0) params.x = params.initialX;
          if (i === 1) params.x = params.initialX + params.offsetAmount;
          if (i === 2) params.x = params.initialX - params.offsetAmount;
          if (i === 3) params.x = params.initialX + params.offsetAmount * 2;
          if (i === 4) params.x = params.initialX - params.offsetAmount * 2;
          if (i === 5) params.x = params.initialX + params.offsetAmount * 3;
          if (i === 6) params.x = params.initialX - params.offsetAmount * 3;
        }
      }

      let shape = _buildShape(params);
      group.push(shape);
    }
    // Finish group and add it to the svg
    svg.push(`${group.join('')}`);
  }

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}">
      <!-- ${strategy.title} -->
      ${gradient}
      ${svg.join('')}
    </svg>
  `;
}

function _buildShape(params) {
  if (params.shape === 'hexagon') {
    let x = params.x;
    let y = params.y;
    let transform = '';
    if (!params.centered) {
      y += params.width / 2;
    }
    if (params.rotation) {
      transform += ` rotate(90 ${x} ${y})`;
    }
    let r = params.width / 2;
    let cos = Math.cos(Math.PI / 6) * r;
    let sin = Math.sin(Math.PI / 6) * r;
    var x1 = x;
    var y1 = y - r;
    var x2 = x + cos;
    var y2 = y - sin;
    var x3 = x + cos;
    var y3 = y + sin;
    var x4 = x;
    var y4 = y + r;
    var x5 = x - cos;
    var y5 = y + sin;
    var x6 = x - cos;
    var y6 = y - sin;
    return `<path
      d="M ${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4} L${x5},${y5} L${x6},${y6} z"
      stroke="${params.stroke}"
      ${
        params.fill != 'transparent'
          ? `fill="${params.fill}"`
          : 'fill="#000" fill-opacity="0"'
      }
      stroke-width="${params.strokeWidth}"
      transform="${transform}"
    />`;
  }

  if (params.shape == 'triangle') {
    let x = params.x;
    let y = params.y;
    let transform = '';
    if (params.centered) {
      if (params.rotation) {
        transform += ` rotate(180 ${x} ${y})`;
      }
      y -= params.width / 2;
    }
    return `<path
      d="M
      ${x},${y}
      ${x + params.width / 2},${y + params.width}
      ${x - params.width / 2},${y + params.width}
      z"
      stroke="${params.stroke}"
      ${
        params.fill != 'transparent'
          ? `fill="${params.fill}"`
          : 'fill="#000" fill-opacity="0"'
      }
      stroke-width="${params.strokeWidth}"
      transform="${transform}"
    />`;
  }
  if (params.shape == 'line') {
    let x = params.x;
    let y = params.y;
    let transform = '';
    if (params.centered) {
      if (params.rotation) {
        let rotation = roll(params.rng, [45, 90, 135]);
        transform += ` rotate(90 ${x} ${y})`;
      }
      y -= params.width / 2;
    }
    return `<line
      x1="${x}"
      x2="${x}"
      y1="${y}"
      y2="${y + params.width}"
      stroke="${params.stroke}"
      stroke-width="${params.strokeWidth}"
      stroke-dasharray="${params.strokeDash}"
      transform="${transform}"
    />`;
  }

  if (params.shape == 'rect') {
    let x = params.x;
    let y = params.y;
    let transform = '';
    if (params.rotation) {
      transform += ` rotate(45 ${x} ${y})`;
    }
    return `<rect
      x="${x - params.width / 2}"
      y="${y - params.width / 2}"
      width="${params.width}"
      height="${params.width}"
      stroke="${params.stroke}"
      ${
        params.fill != 'transparent'
          ? `fill="${params.fill}"`
          : 'fill="#000" fill-opacity="0"'
      }
      stroke-width="${params.strokeWidth}"
      transform="${transform}"
    />`;
  }

  if (params.shape == 'circle') {
    let x = params.x;
    let y = params.y;
    if (!params.centered) {
      y -= params.width / 2;
    }
    return `<circle
      cx="${x}"
      cy="${y}"
      r="${params.width / 2}"
      stroke="${params.stroke}"
      ${
        params.fill != 'transparent'
          ? `fill="${params.fill}"`
          : 'fill="#000" fill-opacity="0"'
      }
      stroke-width="${params.strokeWidth}"
      stroke-dasharray="${params.strokeDash}"
    />`;
  }
}

function roll(rng, array) {
  return array[Math.floor(rng() * array.length)];
}

function minmax(rng, min, max) {
  return max > min ? rng() * (max - min) + min : rng() * (min - max) + max;
}

export default generate;
