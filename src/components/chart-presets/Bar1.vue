<script lang="ts" setup>
import { Chart, getColor } from '@/components/ui/chart'
import type { Chart as ChartInstance } from 'chart.js'
import { useIntervalFn } from '@vueuse/core'

// Fake visitor data
const chartData = new Array(40).fill(0).map((data, key) => {
  if (key % 3 == 0 || key % 5 == 0) {
    return Math.ceil(Math.random() * (0 - 20) + 20)
  } else {
    return Math.ceil(Math.random() * (0 - 7) + 7)
  }
})

// Fake visitor bar color
const chartColor = () =>
  chartData.map((data) => {
    if (data >= 8 && data <= 14) {
      return getColor('--color-primary', 0.5)
    } else if (data >= 15) {
      return getColor('--color-primary', 0.6)
    }

    return getColor('--color-primary', 0.4)
  })

let chartInstance: ChartInstance<'bar'> | undefined

useIntervalFn(() => {
  if (chartInstance) {
    const datasets = chartInstance.data.datasets[0]
    if (datasets) {
      // Swap visitor data
      const newData = datasets.data[0]
      datasets.data.shift()
      newData !== undefined && datasets.data.push(newData)

      // Swap visitor bar color
      if (datasets.backgroundColor && Array.isArray(datasets.backgroundColor)) {
        const newColor = datasets.backgroundColor[0]
        datasets.backgroundColor.shift()
        datasets.backgroundColor.push(newColor)
      }
    }

    chartInstance.update()
  }
}, 1000)

const getRef = (chart: ChartInstance<'bar'>) => {
  chartInstance = chart
}
</script>

<template>
  <div>
    <Chart
      :config="{
        type: 'bar',
        data: {
          labels: chartData,
          datasets: [
            {
              label: 'Html Template',
              barThickness: 6,
              data: chartData,
              backgroundColor: chartColor(),
              borderColor: () => getColor('--color-primary', 0.1),
              borderWidth: 0.8,
            },
          ],
        },
        options: {
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
            y: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
          },
        },
      }"
      :get-ref="getRef"
    />
  </div>
</template>
