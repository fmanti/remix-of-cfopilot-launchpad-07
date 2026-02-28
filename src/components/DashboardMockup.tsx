import { motion } from "framer-motion";

const DashboardMockup = () => {
  return (
    <div className="relative">
      {/* Main Dashboard Card */}
      <motion.div
        className="bg-card/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 shadow-2xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white font-semibold text-lg">Financial Overview</h3>
            <p className="text-white/50 text-sm">January 2026</p>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
            <div className="w-3 h-3 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Metrics Row */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Revenue", value: "$2.4M", change: "+12%" },
            { label: "Cash Flow", value: "$480K", change: "+8%" },
            { label: "Margin", value: "32%", change: "+2%" },
          ].map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white/5 rounded-lg p-4"
            >
              <p className="text-white/50 text-xs mb-1">{metric.label}</p>
              <p className="text-white font-bold text-xl">{metric.value}</p>
              <p className="text-primary text-xs font-medium">{metric.change}</p>
            </motion.div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="bg-white/5 rounded-lg p-4 h-40 relative overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            {/* Grid Lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="400"
                y2={y}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            ))}
            
            {/* Area Fill */}
            <motion.path
              d="M0,80 C50,75 100,60 150,65 S200,40 250,35 S300,25 350,20 S400,15 400,15 L400,100 L0,100 Z"
              fill="url(#gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            />
            
            {/* Line */}
            <motion.path
              d="M0,80 C50,75 100,60 150,65 S200,40 250,35 S300,25 350,20 S400,15 400,15"
              fill="none"
              stroke="hsl(145, 80%, 40%)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
            />
            
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(145, 80%, 40%)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="hsl(145, 80%, 40%)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Data Point */}
          <motion.div
            className="absolute top-3 right-4 w-3 h-3 bg-primary rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Floating Cards */}
      <motion.div
        className="absolute -top-4 -right-8 bg-card border border-border rounded-lg p-4 shadow-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
        transition={{
          opacity: { delay: 1.5 },
          x: { delay: 1.5 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
            <span className="text-primary text-lg">✓</span>
          </div>
          <div>
            <p className="text-foreground text-sm font-medium">Q4 Report Ready</p>
            <p className="text-muted-foreground text-xs">Board presentation</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
        transition={{
          opacity: { delay: 1.7 },
          x: { delay: 1.7 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-deep-green/20 rounded-full flex items-center justify-center">
            <span className="text-primary text-lg">$</span>
          </div>
          <div>
            <p className="text-foreground text-sm font-medium">Cash Position</p>
            <p className="text-primary text-xs font-bold">+$125K this month</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
