const loadBuddy = () => {
  fetch ('https://randomuser.me/api/?results=5')
  .then (res => res.json())
  .then(data => displayBuddies(data) )
}
loadBuddy();

const displayBuddies = data =>{
      const buddies = data.results
      const buddiesContainer = document.getElementById('buddies')
     console.log(data.results);
     for( const buddy of buddies){
       console.log(buddy.email);
       const p = document.createElement('p')
       p.innerText = `name: ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
       buddiesContainer.appendChild(p);
     }
}