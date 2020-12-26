const orgChart = {
  addNewEmployee: function() {
    const employeeDetail = this.getEmployeeDetails();

    employeeDetail.on('complete', function(employee) {
      const managerSelector = this.selectManager(employee);
      managerSelector.on('save', function(employee) {
        employee.save();
      });
    });
  }
}
