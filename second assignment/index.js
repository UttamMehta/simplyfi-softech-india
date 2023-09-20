
function findRoute(tickets) {
    const visited = new Set();
    const route = [];
  
    function dfs(city) {
      if (city === 'Amsterdam') {
        // Destination reached
        return true;
      }
  
      if (visited.has(city)) {
        // Avoid revisiting cities
        return false;
      }
  
      visited.add(city);
      route.push(city);
  
      if (city in tickets) {
        const destinations = tickets[city];
        for (const destination of destinations) {
          if (dfs(destination)) {
            return true;
          }
        }
      }
  
      // If we reach this point, backtrack
      route.pop();
      visited.delete(city);
      return false;
    }
  
    if (dfs('Kiev')) {
      // A valid route was found
      return route;
    } else {
      // No valid route from Kiev to Amsterdam
      return [];
    }
  }
  
  const availableTickets = {
    'Paris': 'Skopje',
    'Zurich': 'Amsterdam',
    'Prague': 'Zurich',
    'Barcelona': 'Berlin',
    'Kiev': 'Prague',
    'Skopje': 'Paris',
    'Amsterdam': 'Barcelona',
    'Berlin': 'Kiev',
    'Berlin': 'Amsterdam',
  };
  
  const route = findRoute(availableTickets);
  
  if (route.length > 0) {
    console.log('Your son traveled to the following cities:');
    console.log(route.join(' -> '));
  } else {
    console.log('No valid route found.');
  }
  