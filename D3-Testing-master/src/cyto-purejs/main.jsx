// import React, {Fragment, useEffect, useRef} from 'react';
// import cytoscape from 'cytoscape'
// import { cyto1, cyto2, cyto3, getCytoCircle } from '../Cyto/DB';
// import expandCollapse from 'cytoscape-expand-collapse';
// const GraphTest = () => {

//  const graphRef = useRef(null)
//  let options = {
//   name: 'concentric',

//   fit: true, // whether to fit the viewport to the graph
//   padding: 30, // the padding on fit
//   startAngle: 3 / 2 * Math.PI, // where nodes start in radians
//   sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
//   clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
//   equidistant: false, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
//   minNodeSpacing: 10, // min spacing between outside of nodes (used for radius adjustment)
//   boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
//   avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
//   nodeDimensionsIncludeLabels: false, // Excludes the label when calculating node bounding boxes for the layout algorithm
//   height: undefined, // height of layout area (overrides container height)
//   width: undefined, // width of layout area (overrides container width)
//   spacingFactor: undefined, // Applies a multiplicative factor (>0) to expand or compress the overall area that the nodes take up
//   concentric: function( node ){ // returns numeric value for each node, placing higher nodes in levels towards the centre
//   return node.degree();
//   },
//   levelWidth: function( nodes ){ // the variation of concentric values in each level
//   return nodes.maxDegree() / 4;
//   },
//   animate: false, // whether to transition the node positions
//   animationDuration: 500, // duration of animation in ms if enabled
//   animationEasing: undefined, // easing of animation if enabled
//   animateFilter: function ( node, i ){ return true; }, // a function that determines whether the node should be animated.  All nodes animated by default on animate enabled.  Non-animated nodes are positioned immediately when the layout starts
//   ready: undefined, // callback on layoutready
//   stop: undefined, // callback on layoutstop
//   transform: function (node, position ){ return position; } // transform a given node position. Useful for changing flow direction in discrete layouts
// };
// let expoptions = {
//   layoutBy: null, // to rearrange after expand/collapse. It's just layout options or whole layout function. Choose your side!
//   // recommended usage: use cose-bilkent layout with randomize: false to preserve mental map upon expand/collapse
//   fisheye: true, // whether to perform fisheye view after expand/collapse you can specify a function too
//   animate: true, // whether to animate on drawing changes you can specify a function too
//   animationDuration: 1000, // when animate is true, the duration in milliseconds of the animation
//   ready: function () { }, // callback when expand/collapse initialized
//   undoable: true, // and if undoRedoExtension exists,

//   cueEnabled: true, // Whether cues are enabled
//   expandCollapseCuePosition: 'top-left', // default cue position is top left you can specify a function per node too
//   expandCollapseCueSize: 12, // size of expand-collapse cue
//   expandCollapseCueLineSize: 8, // size of lines used for drawing plus-minus icons
//   expandCueImage: undefined, // image of expand icon if undefined draw regular expand cue
//   collapseCueImage: undefined, // image of collapse icon if undefined draw regular collapse cue
//   expandCollapseCueSensitivity: 1, // sensitivity of expand-collapse cues
//   edgeTypeInfo: "edgeType", // the name of the field that has the edge type, retrieved from edge.data(), can be a function, if reading the field returns undefined the collapsed edge type will be "unknown"
//   groupEdgesOfSameTypeOnCollapse : false, // if true, the edges to be collapsed will be grouped according to their types, and the created collapsed edges will have same type as their group. if false the collapased edge will have "unknown" type.
//   allowNestedEdgeCollapse: true, // when you want to collapse a compound edge (edge which contains other edges) and normal edge, should it collapse without expanding the compound first
//   zIndex: 999 // z-index value of the canvas in which cue ımages are drawn
// };
//   const nodes = getCytoCircle(20)
//   cytoscape.use(expandCollapse)
//   const edgeStyles = {
//     "type1": { "color": "#CFA79D", "arrowShape": "triangle" },
//     "type2": { "color": "#9DCFA7", "arrowShape": "triangle" },
//     "type3": { "color": "#A79DCF", "arrowShape": "triangle" },
//   };
//   const drawGraph = () => {
//     const cy = cytoscape({
//       container: graphRef.current,
//       elements: cyto1,
//       minZoom: 0,
//       maxZoom: 10,
//       layout: options,
//       // style : [
//       //   {
//       //     selector: 'node',
//       //     style: {
//       //       'background-color': '#ad1a66'
//       //     }
//       //   },
//       //   {
//       //     selector: ':parent',
//       //     style: {
//       //       'background-opacity': 0.333
//       //     }
//       //   },
  
//       //   {
//       //     selector: "node.cy-expand-collapse-collapsed-node",
//       //     style: {
//       //       "background-color": "darkblue",
//       //       "shape": "rectangle"
//       //     }
//       //   },
//       //   {
//       //     selector: 'edge',
//       //     style: {
//       //       'width': 3,
//       //       'line-color': '#ad1a66',
//       //       'curve-style': 'bezier'
//       //     }
//       //   },
//       //   {
//       //     selector: ':selected',
//       //     style: {
//       //       'overlay-color': "#6c757d",
//       //       'overlay-opacity': 0.3,
//       //       'background-color': "#999999"
//       //     }
//       //   },
//       //   {
//       //     selector: 'edge[edgeType="type1"]',
//       //     style: {
//       //       'width': 3,
//       //       'line-color': edgeStyles["type1"].color,
//       //       'target-arrow-shape': edgeStyles["type1"].arrowShape,
//       //       'target-arrow-color': edgeStyles["type1"].color,
//       //     }
//       //   },
//       //   {
//       //     selector: 'edge[edgeType="type2"]',
//       //     style: {
//       //       'width': 3,
//       //       'line-color': edgeStyles["type2"].color,
//       //       'target-arrow-shape': edgeStyles["type2"].arrowShape,
//       //       'target-arrow-color': edgeStyles["type2"].color,
//       //     }
//       //   },
//       //   {
//       //     selector: 'edge[edgeType="type3"]',
//       //     style: {
//       //       'width': 3,
//       //       'line-color': edgeStyles["type3"].color,
//       //       'target-arrow-shape': edgeStyles["type3"].arrowShape,
//       //       'target-arrow-color': edgeStyles["type3"].color,
//       //     }
//       //   },
//       //   {
//       //     selector: 'edge.cy-expand-collapse-collapsed-edge',
//       //     style:
//       //     {
//       //       "text-outline-color": "#ffffff",
//       //       "text-outline-width": "2px",
//       //       'label': (e) => {
//       //         return '(' + e.data('collapsedEdges').length + ')';
//       //       },
//       //       'width': function (edge) {
//       //         const n = edge.data('collapsedEdges').length;
//       //         return (3 + Math.log2(n)) + 'px';
//       //       },
//       //     }
//       //   },
//       // ],
//     })
//     cy.on('tap', 'node', function(evt){
//       var node = evt.target;
//       console.log( 'tapped ' ,node.data() );
//     });
//     cy.expandCollapse(expoptions)
//     var api = cy.expandCollapse('get')
//     // api.isCollapsible(["a"])
//     // api.collapse([{ "id": "a","label": "a"}])
//     console.log('api', api)
//   }
  
//   useEffect(() => {
//     drawGraph()
//  }, [])

//  return (
//   <Fragment>
//    <h2>Graph Test</h2>
//    <div ref={graphRef} style={{width: '100%', height: '80vh'}}>
//    </div>
//   </Fragment>
//  )
// }

// export default GraphTest