<template>
  <div class="table-responsive">
    <table class="table table-striped">
      <caption>
        <slot></slot>
      </caption>
      <thead>
        <tr>
          <th>Title</th>
          <th>Department</th>
          <th>Salary Range</th>
          <th>Expires</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="model in jobs" :key="model._id">
          <td>
            <a :href="model.url" target="_blank">{{ model.title }}</a>
          </td>
          <td>{{ model.department }}</td>
          <td>{{ model.salaryrange }}</td>
          <td>{{ model.expiration || 'Extended' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'JobsTable',
  props: ['jobs']
}
</script>
