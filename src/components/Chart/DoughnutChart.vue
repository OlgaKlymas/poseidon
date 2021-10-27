<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ['chartData'],
  mounted() {
    this.gradient = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
    this.gradient2 = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);
    this.gradient3 = this.$refs.canvas
        .getContext("2d")
        .createLinearGradient(0, 0, 0, 450);

    this.gradient.addColorStop(0, "rgba(255, 168, 37, 1)");
    this.gradient.addColorStop(1, "rgba(242, 208, 48, 1)");

    this.gradient2.addColorStop(0, "rgba(54, 111, 255, 1)");
    this.gradient2.addColorStop(1, "rgba(89, 188, 251, 1)");

    this.gradient3.addColorStop(0, "rgba(37, 226, 130, 1)");
    this.gradient3.addColorStop(1, "rgba(64, 249, 155, 1)");


    let labels = this.chartData.map(data => {
      return data.title
    })
    let values = this.chartData.map(data => {
      return data.value
    })

    this.renderChart(
        {
          labels: labels,
          datasets: [
            {
              backgroundColor: [this.gradient2, this.gradient3, this.gradient],
              data: values
            }
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 30,
          legend: {
            display: true,
            labels: {
              boxWidth: 10,
              usePointStyle: true,
              fontSize: 12,
              fontColor: '#7E8494',
              fontFamily: 'Montserrat'
            }
          }
        }
    );
  }
};
</script>
