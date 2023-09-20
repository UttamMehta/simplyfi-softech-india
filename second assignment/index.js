function findRoute(tickets, citiesVisited) {
    if (citiesVisited.length === 0) {
      return [];
    }
  
    const route = [citiesVisited[0]]; // Start with the first city
  
    for (let i = 1; i < citiesVisited.length; i++) {
      const fromCity = citiesVisited[i - 1];
      const toCity = citiesVisited[i];
  
      if (tickets[fromCity] && tickets[fromCity].includes(toCity)) {
        route.push(toCity); // Add the destination to the route
      } else {
        // Invalid route, return an empty array
        return [];
      }
    }
  
    return route;
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
  
  const citiesVisited = ['Kiev', 'Berlin', 'Prague','Amsterdam', 'Barcelona','Zurich'];
  
  const route = findRoute(availableTickets, citiesVisited);
  
  if (route.length > 0) {
    console.log('Your son traveled to the following cities:');
    console.log(route.join(' -> '));
  } else {
    console.log('No valid route found.');
  }
  