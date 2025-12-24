
import React from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, AreaChart, Area,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

const ChartComponent = ({ type, data, config = {} }) => {
  if (!data || data.length === 0) {
    return <div className="flex items-center justify-center h-full text-gray-500">No data available</div>;
  }
  
  const { dataKey, categoryKey, showLegend = true, showTooltip = true, showGrid = true } = config;

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <BarChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={categoryKey} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            <Bar dataKey={dataKey} fill="#8884d8" />
          </BarChart>
        );
      case 'line':
        return (
          <LineChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={categoryKey} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
          </LineChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Pie data={data} dataKey={dataKey} nameKey={categoryKey} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label>
              {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
          </PieChart>
        );
      case 'area':
         return (
          <AreaChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" />}
            <XAxis dataKey={categoryKey} />
            <YAxis />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
            <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        );
      case 'radar':
        return (
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey={categoryKey} />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey={dataKey} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            {showTooltip && <Tooltip />}
            {showLegend && <Legend />}
          </RadarChart>
        );
      case 'mixed':
         return (
            <BarChart data={data}>
                {showGrid && <CartesianGrid strokeDasharray="3 3" />}
                <XAxis dataKey={config.categoryKey} />
                <YAxis />
                {showTooltip && <Tooltip />}
                {showLegend && <Legend />}
                <Bar dataKey={config.barKey} fill="#82ca9d" />
                <Line type="monotone" dataKey={config.lineKey} stroke="#ff7300" />
            </BarChart>
         )
      default:
        return <div>Unknown chart type</div>;
    }
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      {renderChart()}
    </ResponsiveContainer>
  );
};
export const Chart = ChartComponent;
