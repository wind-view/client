const layerIds = [];

export const initializeStyle = (map, layerSource) => {

  const initialRadius = 14;

  // Big farms
  map.addLayer({
    id: 'windfarms-big',
    type: 'circle',
    source: layerSource,
    paint: {
      'circle-radius': initialRadius,
      'circle-stroke-width': 6,
      'circle-stroke-color': 'hsla(280, 100%, 50%, .7)',
    },
    filter: [">=", "total_capacity", 30000],
    layout: {
      visibility: 'none'
    }
  });
  layerIds.push('windfarms-big');

  // Medium farms
  map.addLayer({
    id: 'windfarms-medium',
    type: 'circle',
    source: layerSource,
    paint: {
      'circle-radius': initialRadius,
      'circle-stroke-width': 4,
      'circle-stroke-color': 'hsla(250, 100%, 70%, .7)',
    },
    filter: [">=", "total_capacity", 10000] && ["<", "total_capacity", 30000],
    layout: {
      visibility: 'none'
    }
  });
  layerIds.push('windfarms-medium');

  // Small farms
  map.addLayer({
    id: 'windfarms-small',
    type: 'circle',
    source: layerSource,
    paint: {
      'circle-radius': initialRadius,
      'circle-stroke-width': 2,
      'circle-stroke-color': 'hsla(219, 100%, 70%, .7)',
    },
    filter: ["<", "total_capacity", 10000],
    layout: {
      visibility: 'none'
    }
  });
  layerIds.push('windfarms-small');
}

export const toggleVisibility = (map) => {
  if(layerIds.length === 0) { return; }
  const visible = map.getLayoutProperty(layerIds[0], 'visibility') === 'visible' ? 'none' : 'visible';
  layerIds.forEach(function(id){
    map.setLayoutProperty(id, 'visibility', visible);
  });
}
