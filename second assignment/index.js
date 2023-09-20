function findRoute(tickets, startCity) {
    const route = [];
    let currentCity = startCity;
  
    while (tickets[currentCity]) {
      const nextCity = tickets[currentCity];
      route.push(currentCity);
      delete tickets[currentCity]; // Mark the ticket as used
      currentCity = nextCity;
    }
  
    route.push(currentCity); // Add the final destination
    return route;
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
    'Berlin': 'Amsterdam', // Note: Overwrites the previous value
  };
  
  const startCity = 'Kiev';
  
  const route = findRoute(availableTickets, startCity);
  
  if (route.length > 0) {
    console.log('Your son traveled to the following cities:');
    console.log(route.join(' -> '));
  } else {
    console.log('No valid route found.');
  }
  