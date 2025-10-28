import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  PieController,
  DoughnutController,
  RadarController,
  PolarAreaController
} from 'chart.js';

// ✅ Register all required controllers & elements
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  PieController,
  DoughnutController,
  RadarController,
  PolarAreaController
);
