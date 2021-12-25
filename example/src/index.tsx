import { ChangeEvent } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';

import Overview from './Overview';
import Basic from './Basic';
import UpdateNode from './UpdateNode';
import Stress from './Stress';
import CustomNode from './CustomNode';
import FloatingEdges from './FloatingEdges';
import Layouting from './Layouting';
import NestedNodes from './NestedNodes';
import Hidden from './Hidden';
import UpdatableEdge from './UpdatableEdge';
import TouchDevice from './TouchDevice';
import Subflow from './Subflow';
import Interaction from './Interaction';
import Empty from './Empty';
import DragHandle from './DragHandle';
import Undirectional from './Undirectional';
import Provider from './Provider';
import CustomConnectionLine from './CustomConnectionLine';
import UseZoomPanHelper from './UseZoomPanHelper';
import DragNDrop from './DragNDrop';
import UseUpdateNodeInternals from './UseUpdateNodeInternals';
import Edges from './Edges';
import EdgeTypes from './EdgeTypes';
import MultiFlows from './MultiFlows';
import NodeTypeChange from './NodeTypeChange';
import NodeTypesObjectChange from './NodeTypesObjectChange';
import SaveRestore from './SaveRestore';
import SwitchFlow from './Switch';
import Validation from './Validation';

import './index.css';

const routes = [
  {
    path: '/',
    component: Overview,
  },
  {
    path: '/basic',
    component: Basic,
  },
  {
    path: '/custom-connectionline',
    component: CustomConnectionLine,
  },
  {
    path: '/custom-node',
    component: CustomNode,
  },
  {
    path: '/draghandle',
    component: DragHandle,
  },
  {
    path: '/dragndrop',
    component: DragNDrop,
  },
  {
    path: '/edges',
    component: Edges,
  },
  {
    path: '/edge-types',
    component: EdgeTypes,
  },
  {
    path: '/empty',
    component: Empty,
  },
  {
    path: '/floating-edges',
    component: FloatingEdges,
  },
  {
    path: '/hidden',
    component: Hidden,
  },
  {
    path: '/interaction',
    component: Interaction,
  },
  {
    path: '/layouting',
    component: Layouting,
  },
  {
    path: '/multiflows',
    component: MultiFlows,
  },
  {
    path: '/nested-nodes',
    component: NestedNodes,
  },
  {
    path: '/nodetype-change',
    component: NodeTypeChange,
  },
  {
    path: '/nodetypesobject-change',
    component: NodeTypesObjectChange,
  },
  {
    path: '/provider',
    component: Provider,
  },
  {
    path: '/save-restore',
    component: SaveRestore,
  },
  {
    path: '/stress',
    component: Stress,
  },
  {
    path: '/subflow',
    component: Subflow,
  },
  {
    path: '/switch',
    component: SwitchFlow,
  },
  {
    path: '/touch-device',
    component: TouchDevice,
  },
  {
    path: '/undirectional',
    component: Undirectional,
  },
  {
    path: '/updatable-edge',
    component: UpdatableEdge,
  },
  {
    path: '/update-node',
    component: UpdateNode,
  },
  {
    path: '/usezoompanhelper',
    component: UseZoomPanHelper,
  },
  {
    path: '/useupdatenodeinternals',
    component: UseUpdateNodeInternals,
  },
  {
    path: '/validation',
    component: Validation,
  },
];

const Header = withRouter(({ history, location }) => {
  const onChange = (event: ChangeEvent<HTMLSelectElement>) => history.push(event.target.value);

  return (
    <header>
      <a className="logo" href="https://github.com/wbkd/react-flow">
        React Flow Dev
      </a>
      <select defaultValue={location.pathname} onChange={onChange}>
        {routes.map((route) => (
          <option value={route.path} key={route.path}>
            {route.path === '/' ? 'overview' : route.path.substr(1, route.path.length)}
          </option>
        ))}
      </select>
    </header>
  );
});

ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      {routes.map((route) => (
        <Route exact path={route.path} render={() => <route.component />} key={route.path} />
      ))}
    </Switch>
  </Router>,
  document.getElementById('root')
);
