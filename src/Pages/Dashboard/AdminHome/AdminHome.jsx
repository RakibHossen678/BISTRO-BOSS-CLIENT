import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTruck, FaUsers, FaWallet } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure("/admin-stats");
      return data;
    },
  });
  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/order-stats");
      return data;
    },
  });
  console.log(chartData);

  //custom shape bar chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  //pie chart

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
const pieChartData=chartData.map(data=>{
  return {name:data.category,value:data.revenue}
})
  if (isLoading) return <p>Loading.......</p>;
  return (
    <div className="lg:w-11/12 mx-auto">
      <div>
        <h2 className="font-cinzel font-medium text-2xl my-5">
          <span>Hi, Welcome </span>
          {user?.displayName ? user?.displayName : "Back"}
        </h2>
      </div>
      <div className="stats shadow text-center   w-full">
        <div className="stat bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white">
          <div className="stat-figure text-secondary">
            <FaWallet className="text-white" size={30}></FaWallet>
          </div>
          <div className="stat-value text-2xl">${stats.revenue}</div>
          <div className="stat-title text-white">Revenue</div>
        </div>

        <div className="stat bg-gradient-to-r from-[#D3A256] to-[#FCDBFF] text-white">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-white" size={30}></FaUsers>
          </div>
          <div className="stat-value text-2xl">{stats.users}</div>
          <div className="stat-title text-white">Customers</div>
        </div>

        <div className="stat bg-gradient-to-r from-[#FE4880] to-[#FCDBFF] text-white">
          <div className="stat-figure text-secondary">
            <FaBowlFood className="text-white" size={30} />
          </div>
          <div className="stat-value text-2xl">{stats.menuItems}</div>
          <div className="stat-title">Products</div>
        </div>
        <div className="stat bg-gradient-to-r from-[#6AAEFF] to-[#FCDBFF] text-white">
          <div className="stat-figure text-secondary">
            <FaTruck className="text-white" size={30} />
          </div>
          <div className="stat-value text-2xl">{stats.orders}</div>
          <div className="stat-title">Orders</div>
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
              ))}
            </Bar>
          </BarChart>
        </div>
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
