import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";
import { useNavigate } from "react-router-dom";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await axios.get("http://localhost:3002/allHoldings", {
          withCredentials: true,
        });

        setAllHoldings(response.data);
      } catch (err) {
        console.error("Error fetching holdings:", err);
        setError(err.message);

        if (err.response?.status === 401) {
          navigate("/login");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, [navigate]);

  // Calculate totals
  const totals = allHoldings.reduce(
    (acc, stock) => {
      const curValue = stock.price * stock.qty;
      const investment = stock.avg * stock.qty;
      const profit = curValue - investment;

      return {
        investment: acc.investment + investment,
        currentValue: acc.currentValue + curValue,
        profit: acc.profit + profit,
      };
    },
    { investment: 0, currentValue: 0, profit: 0 }
  );

  const profitPercentage = totals.investment
    ? ((totals.profit / totals.investment) * 100).toFixed(2)
    : "0.00";

  const graphData = {
    labels: allHoldings.map((stock) => stock.name),
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  if (loading) return <div className="loading">Loading holdings...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="holdings-container">
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const profit = curValue - stock.avg * stock.qty;
              const isProfit = profit >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>
                  <td className={profClass}>{profit.toFixed(2)}</td>
                  <td className={profClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="summary-row">
        <div className="summary-col">
          <h5>{totals.investment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="summary-col">
          <h5>{totals.currentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="summary-col">
          <h5 className={totals.profit >= 0 ? "profit" : "loss"}>
            {totals.profit.toFixed(2)} ({profitPercentage}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      {allHoldings.length > 0 && <VerticalGraph data={graphData} />}
    </div>
  );
};

export default Holdings;



// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { VerticalGraph } from "./VerticalGraph";
// // import { useNavigate } from "react-router-dom";

// // const Holdings = () => {
// //   const [allHoldings, setAllHoldings] = useState([]);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(null);
//   // const navigate = useNavigate();

//   // useEffect(() => {
//   //   const fetchHoldings = async () => {
//   //     try {
//   //       const response = await axios.get("https://zerodha-online-brokerage-plateform-1.onrender.com/allHoldings", {
//   //         withCredentials: true,
//   //       });

//   //       setAllHoldings(response.data);
//   //     } catch (err) {
//   //       console.error("Error fetching holdings:", err);
//   //       setError(err.message);

//   //       if (err.response?.status === 401) {
//   //         navigate("/login");
//   //       }
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchHoldings();
//   // }, [navigate]);

//   const Holdings = () => {
//   const [allHoldings, setAllHoldings] = useState([]);

//   useEffect(() => {
//     axios.get("http://localhost:3002/allHoldings").then((res) => {
//       // console.log(res.data);
//       setAllHoldings(res.data);
//     });
//   }, []);

//   // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   const labels = allHoldings.map((subArray) => subArray["name"]);

//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//     ],
//   };
//   // Calculate totals
//   const totals = allHoldings.reduce(
//     (acc, stock) => {
//       const curValue = stock.price * stock.qty;
//       const investment = stock.avg * stock.qty;
//       const profit = curValue - investment;

//       return {
//         investment: acc.investment + investment,
//         currentValue: acc.currentValue + curValue,
//         profit: acc.profit + profit,
//       };
//     },
//     { investment: 0, currentValue: 0, profit: 0 }
//   );

//   const profitPercentage = totals.investment
//     ? ((totals.profit / totals.investment) * 100).toFixed(2)
//     : "0.00";

//   const graphData = {
//     labels: allHoldings.map((stock) => stock.name),
//     datasets: [
//       {
//         label: "Stock Price",
//         data: allHoldings.map((stock) => stock.price),
//         backgroundColor: "rgba(75, 192, 192, 0.6)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   // if (loading) return <div className="loading">Loading holdings...</div>;
//   // if (error) return <div className="error">Error: {error}</div>;

//   return (
//     <div className="holdings-container">
//       <h3 className="title">Holdings ({allHoldings.length})</h3>

//       <div className="order-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Instrument</th>
//               <th>Qty.</th>
//               <th>Avg. cost</th>
//               <th>LTP</th>
//               <th>Cur. val</th>
//               <th>P&L</th>
//               <th>Net chg.</th>
//               <th>Day chg.</th>
//             </tr>
//           </thead>
//           <tbody>
//             {allHoldings.map((stock, index) => {
//               const curValue = stock.price * stock.qty;
//               const profit = curValue - stock.avg * stock.qty;
//               const isProfit = profit >= 0;
//               const profClass = isProfit ? "profit" : "loss";
//               const dayClass = stock.isLoss ? "loss" : "profit";

//               return (
//                 <tr key={index}>
//                   <td>{stock.name}</td>
//                   <td>{stock.qty}</td>
//                   <td>{stock.avg.toFixed(2)}</td>
//                   <td>{stock.price.toFixed(2)}</td>
//                   <td>{curValue.toFixed(2)}</td>
//                   <td className={profClass}>{profit.toFixed(2)}</td>
//                   <td className={profClass}>{stock.net}</td>
//                   <td className={dayClass}>{stock.day}</td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>

//       <div className="summary-row">
//         <div className="summary-col">
//           <h5>{totals.investment.toFixed(2)}</h5>
//           <p>Total investment</p>
//         </div>
//         <div className="summary-col">
//           <h5>{totals.currentValue.toFixed(2)}</h5>
//           <p>Current value</p>
//         </div>
//         <div className="summary-col">
//           <h5 className={totals.profit >= 0 ? "profit" : "loss"}>
//             {totals.profit.toFixed(2)} ({profitPercentage}%)
//           </h5>
//           <p>P&L</p>
//         </div>
//       </div>

//       {allHoldings.length > 0 && <VerticalGraph data={graphData} />}
//     </div>
//   );
// };

// export default Holdings;