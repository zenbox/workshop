<template>
  <div
    id="app"
    class="small-container"
  >
    <h1>Employees</h1>

    <employee-form @add:employee="addEmployee" />
    <employee-table
      :employees="employees"
      @delete:employee="deleteEmployee"
      @edit:employee="editEmployee"
    />
  </div>
</template>

<script>
import EmployeeTable from '@/components/EmployeeTable.vue'
import EmployeeForm from '@/components/EmployeeForm.vue'

export default {
  name: "app",
  components: {
    EmployeeTable,
    EmployeeForm,
  },
  data() {
    return {
      employees: []
    }
  },

  mounted() {
    this.getEmployees()
  },

  methods: {
    async getEmployees() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        this.employees = data
      } catch (error) {
        console.error(error)
      }
    },

    async addEmployee(employee) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST',
          body: JSON.stringify(employee),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const data = await response.json()
        this.employees = [...this.employees, data]
      } catch (error) {
        console.error(error)
      }
    },

    async editEmployee(id, updatedEmployee) {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'PUT',
          body: JSON.stringify(updatedEmployee),
          headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        const data = await response.json()
        this.employees = this.employees.map(employee => employee.id === id ? data : employee)
      } catch (error) {
        console.error(error)
      }
    },

    async deleteEmployee(id) {
      try {
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          method: 'DELETE'
        })
        this.employees = this.employees.filter(employee => employee.id !== id)
      } catch (error) {
        console.error(error)
      }
    },
  },
}
</script>

<style>
html {
    font-family: "Roboto Condensed", sans-serif;
    background:hsla(0,0%,0%,0.85);
    color: white;
}

td {border-bottom: 1px dotted hsla(0,0%,100%,0.5) !important;}

#user-form form {
    display: flex;
    flex-direction: column;
}

td,input,
label,
button {
    padding: 0.5rem;
    margin: 0.5rem;
}

button {
    background: hsla(140, 100%, 30%,0.85);
    border: 1px solid hsla(140, 100%, 30%,0,85);
    color:hsla(0, 0%, 100%,0.85);
    font-size: 1rem;
}

.small-container {
    max-width: 680px;
}
</style>