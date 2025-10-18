import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale} from 'chart.js'

ChartJS.register(Title,Tooltip,Legend,BarElement,CategoryScale,LinearScale);

function ChartSection() {
    const data = {
        labels: ["Enero","Febrero","Marzo","Abril","Mayo"],
        datasets:[
            {
                label: "Ventas ($)",
                data:[1200,1900,3000,2500,3200],
                backgroundColor:"rgba(75,192,192,0.5)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth:1
            },
        ],
    };

    const options = {
        responsive : true,
        plugins: {
            legend: {position:"top"},
            title: {display: true, text: "Ventas Mensuales"}
        },
    };

    return(
        <section className="section bg-light">
            <div className="container">
                <h2 className="mb-4">Gráfico de Ventas</h2>
                <Bar data={data} options={options}/>
            </div>
        </section>
    );
}

export default ChartSection;