const screenSizes = {
  mobile: {
    max: 480
  },
  tablet: {
    min: 481,
    max: 768
  },
  laptop: {
    min: 769,
    max: 1024
  },
  desktop: {
    min: 1025,
    max: 1300
  },
  larger: {
    min: 1301,
  },

}

let media = {}

Object.keys(screenSizes).forEach(screenKey => {
  media[screenKey] = styles => {
    const currentSize = screenSizes[screenKey];
    const min = currentSize.min ? `and (min-width: ${currentSize.min}px) ` : ''
    const max = currentSize.max ? `and (max-width: ${currentSize.max}px) ` : ''
    return `@media screen ${min}${max} {
      ${styles}
    }`
  }
})

export default media;
