<script lang="ts" setup>
import { Chart, getColor } from '@/components/ui/chart'
</script>

<template>
  <div>
    <Chart
      :config="{
        type: 'doughnut',
        data: {
          labels: ['Html', 'Vuejs', 'Laravel'],
          datasets: [
            {
              data: [15, 10, 65],
              backgroundColor: [
                getColor('--color-pending', 0.4),
                getColor('--color-primary', 0.4),
                getColor('--color-warning', 0.4),
              ],
              borderWidth: 1,
              borderColor: [
                getColor('--color-pending', 0.9),
                getColor('--color-primary', 0.9),
                getColor('--color-warning', 0.9),
              ],
              offset: 20,
              borderRadius: 5,
            },
          ],
        },
        options: {
          cutout: '85%',
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      }"
    />
  </div>
</template>
