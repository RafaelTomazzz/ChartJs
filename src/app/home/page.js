"use client"

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/home.module.css';
import Chart from 'chart.js/auto';
import { useEffect } from "react";


export default function Home() {

  useEffect(() => {
    const ctx = document.getElementById('meuGrafico')

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'Taxa de abandono escolar por ano (ensino médio)',
          data: [0.7133333325386048, 0.06666666766007741, 0.1600000023841858, 1.4266666730244955, 1.346666653951009, 1.9200000445048013, 1.046666685740153],
          borderWidth: 1
        }]
      }
    })

    const ctxLinha = document.getElementById('graficoLinha')

    new Chart(ctxLinha, {
      type: 'line',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [
          {
            label: 'Taxa de abandono escolar por ano (ensino médio)',
            data: [0.7133333325386048, 0.06666666766007741, 0.1600000023841858, 1.4266666730244955, 1.346666653951009, 1.9200000445048013, 1.046666685740153],
            borderWidth: 1,
            borderColor: 'rgb(235 39 28)',
            pointStyle: 'cross',
            tension: 0.2
          },
          {
            label: 'Taxa de abandono escolar por ano (ensino fundamental)',
            data: [0.013333333532015483, 0.013333333532015483, 0.04000000059604645, 0.3199999988079071, 0.18000000069538752, 0.15999999741713206, 0.1666666641831398],
            borderWidth: 1,
            borderColor: 'rgb(28, 94, 235)',
            pointStyle: 'rect',
            backgroundColor: 'rgb(28, 94, 235, 0.5)',
            fill: true
          }
        ]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom',
            align: 'start'
          }
        }
      }
    })

    const ctxBarra = document.getElementById('graficoBarra')

    new Chart(ctxBarra, {
      type: 'bar',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'Taxa de abandono escolar por ano (ensino médio)',
          data: [0.7133333325386048, 0.06666666766007741, 0.1600000023841858, 1.4266666730244955, 1.346666653951009, 1.9200000445048013, 1.046666685740153],
          borderRadius: 5,
          backgroundColor: [
            'rgb(235 39 28)',
            'rgb(28, 94, 235)',
            'rgb(221, 235, 28)',
            'rgb(235, 152, 28)',
            'rgb(24, 202, 24)',
            'rgb(118, 28, 235)',
            'rgb(0, 0, 0)',
          ]
        }]
      },
      options: {
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            title: {
              display: true,
              text: 'Anos'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Taxa de abandono escolar (%)'
            },
            grid: {
              color: (context) => {
                if (context.tick.value > 1) {
                  return 'rgb(235, 39, 28, 0.5)'
                } else if (context.tick.value < 1) {
                  return 'rgb(24, 202, 24, 0.5)'
                } else {
                  return 'rgb(0, 0, 0, 0.5)'
                }
              }
            }
          }
        }
      }
    })

    const ctxRosca = document.getElementById('graficoRosca')

    new Chart(ctxRosca, {
      type: 'doughnut',
      data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'Taxa de abandono escolar por ano (ensino médio)',
          data: [0.7133333325386048, 0.06666666766007741, 0.1600000023841858, 1.4266666730244955, 1.346666653951009, 1.9200000445048013, 1.046666685740153],
          spacing: 10,
        }]
      }, options: {
        cutout: "70%"
      }
    })

  }, [])

  return (
    <main className={`container ${styles.main}`}>
      <div className={`row justify-content-center align-items-center ${styles.firstFold}`}>
        <div className="col-12">
          <h1 className={styles.firstFold__title}>Chart.js</h1>
        </div>
        <section className={`col-6`}>
          <ul className={styles.firstFold__list}>
            <li>Biblioteca JavaScript <strong>open source</strong>.</li>
            <li>A biblioteca mais popular de gráficos.</li>
            <li>Oferece um conjunto de tipos de gráficos e plugins.</li>
            <li>Rico em opções de <strong>personalização</strong>.</li>
            <li><strong>Animações e interatividade</strong> nativas.</li>
          </ul>
        </section>
        <section className={`col-6 ${styles.firstFold__image}`}>
          <Image
            src="https://www.chartjs.org/img/chartjs-logo.svg"
            alt="Next.js logo"
            width={300}
            height={300}
          />
        </section>

        <h2 className={styles.subtitle}>Como criar um gráfico?</h2>

        <p className={styles.text}>1. Baixar a biblioteca do <strong>chart.js</strong>.</p>

        <pre className={styles.code__container}>
          <code className={styles.code}>
            npm install chart.js
          </code>
        </pre>

        <p className={styles.text}>2. Importar o chart.js e o useEffect pra dentro da página.</p>

        <pre className={styles.code__container}>
          <code className={styles.code}>
            import Chart from 'chart.js/auto';<br />
            import &#123; useEffect &#125; from "react";
          </code>
        </pre>

        <p className={styles.text}>3. Adicionar uma tag <strong>canvas</strong> e passar um id.</p>

        <pre className={styles.code__container}>
          <code className={styles.code}>
            &lt;div&gt;
            <span className={styles.code__break}>&lt;canvas id="meuGrafico"&gt;&lt;/canvas&gt;</span>
            &lt;/div&gt;
          </code>
        </pre>

        <p className={styles.text}>4. Chamar o hook <strong>useEffect</strong>.</p>

        <pre className={styles.code__container}>
          <code className={styles.code}>
            useEffect(() =&gt; &#123;
            <span className={styles.code__break}>const ctx = document.getElementById('meuGrafico')</span>
            &#125;, [])
          </code>
        </pre>

        <p className={styles.text}>5. Instanciar um novo gráfico com <strong>objeto Chart</strong>.</p>

        <div className={`row ${styles.noPadding}`}>
          <div className={`col-6 ${styles.noPadding}`}>
            <pre className={styles.code__container}>
              <code className={styles.code}>
                useEffect(() =&gt; &#123;
                <span className={styles.code__break}>const ctx = document.getElementById('meuGrafico')</span>
                <br />
                <span className={styles.code__break}>new Chart(ctx, &#123;</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>type: 'bar',</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>data: &#123;</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>datasets: [&#123;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>label: 'Taxa de abandono escolar por ano (ensino médio)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>data: [0.7133333325386048, 0.06666666766007741, 0.1600000023841858, 1.4266666730244955, 1.346666653951009, 1.9200000445048013, 1.046666685740153],</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>borderWidth: 1</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#125;]</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>&#125;</span>
                <span className={styles.code__break}>&#125;)</span>
                <br />
                &#125;, [])
              </code>
            </pre>
          </div>
          <div className={`col-6 ${styles.graph__container}`}>
            <canvas id="meuGrafico"></canvas>
          </div>

        </div>

        <h2 style={{ marginTop: 16 }} className={styles.subtitle}>Tipos de gráficos que o chart.js oferece</h2>

        <p className={styles.text}>Gráfico de Linha</p>

        <div className={`row ${styles.noPadding}`}>
          <div className={`col-6 ${styles.noPadding}`}>
            <pre className={styles.code__container}>
              <code className={styles.code}>
                <span>new Chart(ctxLinha, &#123;</span>
                <span className={styles.code__break}>type: 'line',</span>
                <span className={styles.code__break}>data: &#123;</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>datasets: [</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#123;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>label: 'Taxa de abandono escolar por ano (ensino médio)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>data: [0.7133333325386048, 0.06666666766007741, 0.1600000023841858, 1.4266666730244955, 1.346666653951009, 1.9200000445048013, 1.046666685740153],</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>borderWidth: 1,</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>borderColor: 'rgb(235 39 28)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>pointStyle: 'cross',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>tension: 0.2</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#125;,</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#123;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>label: 'Taxa de abandono escolar por ano (ensino fundamental)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>data: [0.013333333532015483, 0.013333333532015483, 0.04000000059604645, 0.3199999988079071, 0.18000000069538752, 0.15999999741713206, 0.1666666641831398],</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>borderWidth: 1,</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>borderColor: 'rgb(28, 94, 235)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>pointStyle: 'rect',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>backgroundColor: 'rgb(28, 94, 235, 0.5)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>fill: true</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>]</span>
                <span className={styles.code__break}>&#125;,</span>
                <span className={styles.code__break}>options: &#123;</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>plugins: &#123;</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>legend: &#123;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>position: 'bottom',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>align: 'start'</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>&#125;</span>
                <span className={styles.code__break}>&#125;</span>
                <span>&#125;)</span>
              </code>
            </pre>
          </div>
          <div className={`col-6 ${styles.graph__container}`}>
            <canvas id="graficoLinha"></canvas>
          </div>
        </div>

        <p className={styles.text}>Gráfico de Barra Horizontal</p>

        <div className={`row ${styles.noPadding}`}>
          <div className={`col-6 ${styles.graph__container}`}>
            <canvas id="graficoBarra"></canvas>
          </div>
          <div className={`col-6 ${styles.noPadding}`}>
            <pre className={styles.code__container}>
              <code className={styles.code}>
                <span className={styles.code__break}>new Chart(ctxBarra, &#123;</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>type: 'bar',</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>data: &#123;</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>datasets: [&#123;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>label: 'Taxa de abandono escolar por ano (ensino médio)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>data: [0.7133333325386048, 0.06666666766007741, 0.1600000023841858, 1.4266666730244955, 1.346666653951009, 1.9200000445048013, 1.046666685740153],</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>borderRadius: 5,</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>backgroundColor: [</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>'rgb(235 39 28)',</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>'rgb(28, 94, 235)',</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>'rgb(221, 235, 28)',</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>'rgb(235, 152, 28)',</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>'rgb(24, 202, 24)',</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>'rgb(118, 28, 235)',</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>'rgb(0, 0, 0)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>]</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#125;]</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>&#125;,</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>options: &#123;</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>indexAxis: 'y',</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>plugins: &#123;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>legend: &#123;</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>display: false</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#125;,</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>scales: &#123;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>y: &#123;</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>title: &#123;</span>
                <span style={{ paddingLeft: 96 }} className={styles.code__break}>display: true,</span>
                <span style={{ paddingLeft: 96 }} className={styles.code__break}>text: 'Anos'</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>&#125;,</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>x: &#123;</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>title: &#123;</span>
                <span style={{ paddingLeft: 96 }} className={styles.code__break}>display: true,</span>
                <span style={{ paddingLeft: 96 }} className={styles.code__break}>text: 'Taxa de abandono escolar (%)'</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>&#125;,</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>grid: &#123;</span>
                <span style={{ paddingLeft: 96 }} className={styles.code__break}>color: (context) =&gt; &#123;</span>
                <span style={{ paddingLeft: 112 }} className={styles.code__break}>if (context.tick.value &gt; 1) &#123;</span>
                <span style={{ paddingLeft: 128 }} className={styles.code__break}>return 'rgb(235, 39, 28, 0.5)'</span>
                <span style={{ paddingLeft: 112 }} className={styles.code__break}>&#125; else if (context.tick.value &lt; 1) &#123;</span>
                <span style={{ paddingLeft: 128 }} className={styles.code__break}>return 'rgb(24, 202, 24, 0.5)'</span>
                <span style={{ paddingLeft: 112 }} className={styles.code__break}>&#125; else &#123;</span>
                <span style={{ paddingLeft: 128 }} className={styles.code__break}>return 'rgb(0, 0, 0, 0.5)'</span>
                <span style={{ paddingLeft: 112 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 96 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 80 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#125;</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>&#125;</span>
                <span className={styles.code__break}>&#125;)</span>
              </code>
            </pre>
          </div>
        </div>

        <p className={styles.text}>Gráfico de Rosca e de Pizza</p>

        <div className={`row ${styles.noPadding}`}>
          <div className={`col-6 ${styles.noPadding}`}>
            <pre className={styles.code__container}>
              <code className={styles.code}>
                <span className={styles.code__break}>new Chart(ctxRosca, &#123;</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>type: 'doughnut',</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>data: &#123;</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>datasets: [&#123;</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>label: 'Taxa de abandono escolar por ano (ensino médio)',</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>data: [0.7133333325386048, 0.06666666766007741, 0.1600000023841858, 1.4266666730244955, 1.346666653951009, 1.9200000445048013, 1.046666685740153],</span>
                <span style={{ paddingLeft: 64 }} className={styles.code__break}>spacing: 10,</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>&#125;]</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>&#125;,</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>options: &#123;</span>
                <span style={{ paddingLeft: 48 }} className={styles.code__break}>cutout: "70%"</span>
                <span style={{ paddingLeft: 32 }} className={styles.code__break}>&#125;</span>
                <span className={styles.code__break}>&#125;)</span>
              </code>
            </pre>
          </div>
          <div style={{ maxHeight: '400px' }} className={`col-6 ${styles.graph__container}`}>
            <canvas id="graficoRosca"></canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
