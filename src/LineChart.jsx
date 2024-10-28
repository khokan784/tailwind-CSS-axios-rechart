import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';
const LineChart = () => {

    const studentsMark = [
        { id: 1, name: "Student A", math: 78, physics: 82, chemistry: 76 },
        { id: 2, name: "Student B", math: 85, physics: 78, chemistry: 88 },
        { id: 3, name: "Student C", math: 92, physics: 89, chemistry: 85 },
        { id: 4, name: "Student D", math: 67, physics: 72, chemistry: 70 },
        { id: 5, name: "Student E", math: 88, physics: 84, chemistry: 82 },
        { id: 6, name: "Student F", math: 74, physics: 76, chemistry: 78 },
        { id: 7, name: "Student G", math: 81, physics: 80, chemistry: 79 },
        { id: 8, name: "Student H", math: 90, physics: 85, chemistry: 87 },
        { id: 9, name: "Student I", math: 69, physics: 74, chemistry: 71 },
        { id: 10, name: "Student J", math: 95, physics: 92, chemistry: 90 }
  ]
    return (
        <div>
            <LChart width={1000} height={300} data={studentsMark}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke="red"></Line>
                <Line dataKey={'physics'} stroke="blue"></Line>
                <Line dataKey={'chemistry'} stroke="green"></Line>

            </LChart>
        </div>
    );
};

export default LineChart;