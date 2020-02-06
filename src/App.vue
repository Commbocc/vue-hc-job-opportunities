<template>
  <g-sheet
    @success="success"
    v-slot="{ gsheet }"
    sheet-id="1GbVKP8YUumj1EVuGY7RjYbIEluRaokBQzD6vAskvSRk"
    table-index="1"
  >
    <p v-if="gsheet.loading" class="h2 text-center font-weight-bold p-3">{{ gsheet.status }}</p>

    <JobsTable v-else :jobs="jobs.filter(x => !x.expired)">
      <slot></slot>
    </JobsTable>
  </g-sheet>
</template>

<script>
import GoogleSheetModel from '@hcflgov/vue-google-sheet-model'
import JobsTable from '@/components/JobsTable'
import Job from '@/assets/Job'

export default {
  name: 'HcJobOpportunities',

  install(Vue) {
    Vue.component('HcJobOpportunities', this)
  },

  components: {
    gSheet: GoogleSheetModel,
    JobsTable
  },

  data: () => ({
    jobs: []
  }),

  methods: {
    success({ instances }) {
      this.jobs = instances.map(x => new Job(x))
    }
  }
}
</script>