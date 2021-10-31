import { LineChart, Line, XAxis, CartesianGrid, Tooltip,ResponsiveContainer } from 'recharts';


const Charts = ({title,data, dataKey, grid}) => {

  return (
    <div className="shadow-lg p-5">
      <h2 className="text-lg font-bold pb-4">{title }</h2>
        <ResponsiveContainer  width="100%" aspect={4/1}>
          <LineChart data={data} >
          <XAxis dataKey="name" stroke="#5C7AEA" />
          <Line type="monotone" dataKey={dataKey} stroke="#5C7AEA" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
          </LineChart>
        </ResponsiveContainer>

    </div>
  )
}

export default Charts;
