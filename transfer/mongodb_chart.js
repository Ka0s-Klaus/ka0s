// Cambios diarios de código
db.code_changes.aggregate([
  {
    $match: {
      org: "mi-organizacion",
      repo: "mi-repositorio"
    }
  },
  {
    $project: {
      date: 1,
      net_changes: { $subtract: ["$additions", "$deletions"] },
      additions: 1,
      deletions: 1,
      commits: 1
    }
  },
  {
    $sort: { date: 1 }
  }
])