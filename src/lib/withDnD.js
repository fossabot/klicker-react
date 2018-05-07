export default (ComposedComponent) => {
  const HTML5Backend = require('react-dnd-html5-backend')
  const { DragDropContext } = require('react-dnd')
  const WithDnD = DragDropContext(HTML5Backend)(ComposedComponent)

  WithDnD.displayName = `WithDnD(${ComposedComponent.displayName || ComposedComponent.name})`

  return WithDnD
}
