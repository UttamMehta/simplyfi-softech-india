function findRoute(tickets, citiesVisited) {
    const visited = new Set();
    const route = [];
  
    function dfs(city) {
      visited.add(city);
      route.push(city);
  
      if (route.length === citiesVisited.length) {
        return true; // All cities have been visited
      }
  
      if (city in tickets) {
        for (const nextCity of tickets[city]) {
          if (!visited.has(nextCity)) {
            if (dfs(nextCity)) {
              return true;
            }
          }
        }
      }
  
      // If we reach this point, backtrack
      visited.delete(city);
      route.pop();
      return false;
    }
  
    if (dfs('Kiev')) {
      return route;
    } else {
      return null; // No valid route found
    }
  }
  
  const availableTickets = {
    'Paris': ['Skopje'],
    'Zurich': ['Amsterdam'],
    'Prague': ['Zurich'],
    'Barcelona': ['Berlin'],
    'Kiev': ['Prague'],
    'Skopje': ['Paris'],
    'Amsterdam': ['Barcelona', 'Berlin'],
    'Berlin': ['Kiev', 'Amsterdam'],
  };
  
  const citiesVisited = ['Amsterdam', 'Kiev', 'Zurich', 'Prague', 'Berlin', 'Barcelona'];
  
  const route = findRoute(availableTickets, citiesVisited);
  
  if (route) {
    console.log('Your son traveled to the following cities:');
    console.log(route.join(' -> '));
  } else {
    console.log('No valid route found.');
  }
  