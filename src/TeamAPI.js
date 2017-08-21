const TeamAPI = {
  team: [
    { id: 1, name: "Sarah Palmer", job: "Developer" },
    { id: 2, name: "Dave Fish", job: "Sales Manager" },
    { id: 3, name: "Stuart Hougart", job: "UX Design" },
  ],
  all: function() { return this.team},
  get: function(id) {
    const selectedStaff = p => p.id === id
    return this.team.find(selectedStaff)
  }
}

export default TeamAPI
