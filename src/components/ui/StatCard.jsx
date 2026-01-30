const StatCard = ({ title, value, trend, icon: Icon, color = "primary" }) => {

  const colorClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/20 text-green-700", 
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className={`${colorClasses[color]} p-3 rounded-xl`}>
          <Icon size={24} />
        </div>
        {trend && (
          <span className={`text-xs font-bold px-2 py-1 rounded-full ${trend > 0 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <h3 className="text-gray-500 text-sm font-medium mb-1">{title}</h3>
      <p className="text-2xl font-bold text-neutral-900">{value}</p>
    </div>
  );
};

export default StatCard;