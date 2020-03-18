/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Make sure focus is directed to skip links
exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (prevLocation !== null) {
    const skipLink = document.querySelector('#reach-skip-nav')
    if (skipLink) {
      skipLink.focus()
    }
  }
}
