import dynamic from 'next/dynamic'

export default (ComposedComponent) => {
  const HTML5Backend = dynamic(import('react-dnd-html5-backend'))
  const { DragDropContext } = dynamic(import('react-dnd'))
  const WithDnD = DragDropContext(HTML5Backend)(ComposedComponent)

  WithDnD.displayName = `WithDnD(${ComposedComponent.displayName || ComposedComponent.name})`

  return WithDnD
}
