const where = {}

if (datesFilter || clientNameFilter || employeenameFilter) {
  where[Op.and] = []
  if (datesFilter) {
    where[Op.and].push({
      dateField: {
        [Op.between]: [datesFilter.start, datesFilter.finish]
      }
    })
  }
  if (clientNameFilter) {
    where[Op.and].push({
      name: {
        [Op.iLike]: `%${clientNameFilter.value}%`
      }
    })
  }
  if (employeenameFilter) {
    where[Op.and].push({
      employeeName: {
        [Op.iLike]: `%${employeenameFilter.value}%`
      }
    })
  }
}

const dashboardItems = await DashboardItem.findAll(where, {
// some options here
})