export const lerp = (a, b, u) => (
  (1 - u) * a + u * b
)

export const parseColor = color => {
  let match = color.match(/^#([0-9a-f]{3})$/i)
  if (match && match[1]) {
    match = match[1]
    // in three-character format, each value is multiplied by 0x11 to give an
    // even scale from 0x00 to 0xff
    return {
      r: parseInt(match.charAt(0), 16) * 0x11,
      g: parseInt(match.charAt(1), 16) * 0x11,
      b: parseInt(match.charAt(2), 16) * 0x11
    }
  }
  match = color.match(/^#([0-9a-f]{6})$/i)
  if (match && match[1]) {
    match = match[1]
    return {
      r: parseInt(match.substr(0, 2), 16),
      g: parseInt(match.substr(2, 2), 16),
      b: parseInt(match.substr(4, 4), 16)
    }
  }
}

export const formatColor = color => (
  '#' +
  Number(color.r).toString(16).padStart(2, '0') +
  Number(color.g).toString(16).padStart(2, '0') +
  Number(color.b).toString(16).padStart(2, '0')
)

export const lerpColor = (color1, color2, ratio) => {
  color1 = parseColor(color1)
  color2 = parseColor(color2)
  return formatColor({
    r: Math.round(lerp(color1.r, color2.r, ratio)),
    g: Math.round(lerp(color1.g, color2.g, ratio)),
    b: Math.round(lerp(color1.b, color2.b, ratio))
  })
}

export const lerpColor3 = (color1, color2, color3, ratio) => {
  if (ratio < 0.5) {
    return lerpColor(color1, color2, ratio * 2)
  } else {
    return lerpColor(color2, color3, (ratio - 0.5) * 2)
  }
}
