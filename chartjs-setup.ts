// chartjs-setup.ts
import {
    Chart,
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    TimeScale,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import StreamingPlugin from '@robloche/chartjs-plugin-streaming';
  import { Filler } from 'chart.js';
  import 'chartjs-adapter-date-fns';

  
  Chart.register(
    LineController,
    LineElement,
    PointElement,
    CategoryScale,
    LinearScale,
    TimeScale,
    Title,
    Tooltip,
    Legend,
    StreamingPlugin,
    Filler
  );