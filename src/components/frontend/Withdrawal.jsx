import React from 'react'

const Withdrawal = () => {
  return (
    <div>Withdrawal</div>
  )
}

export default Withdrawal


// import React, { useState } from 'react';
// import axios from 'axios';

// const Withdrawal = () => {
//   const [balance, setBalance] = useState(0); // Initial state for balance
//   const [amount, setAmount] = useState(''); // State for withdrawal amount
//   const [error, setError] = useState(null); // State for error messages
//   const [success, setSuccess] = useState(null); // State for success messages

//   // Fetch the user's balance (replace with actual user fetching logic)
//   const fetchBalance = async () => {
//     try {
//       // Replace with your actual API call to fetch balance
//       const response = await axios.get('https://api.example.com/user/balance');
//       setBalance(response.data.balance);
//     } catch (error) {
//       console.error('Error fetching balance:', error);
//     }
//   };

//   // Handle withdrawal submission
//   const handleWithdrawal = async () => {
//     if (!amount || amount <= 0) {
//       setError('Please enter a valid amount.');
//       return;
//     }

//     try {
//       // Replace with your actual API call to process withdrawal
//       await axios.post('https://api.example.com/user/withdraw', { amount });
//       setSuccess('Withdrawal successful!');
//       setError(null);
//       setAmount('');
//       fetchBalance(); // Refresh balance after withdrawal
//     } catch (error) {
//       setError('Error processing withdrawal.');
//       console.error('Error processing withdrawal:', error);
//     }
//   };

//   // Handle amount input change
//   const handleChange = (event) => {
//     setAmount(event.target.value);
//   };

//   // Set amount to balance
//   const handleMaxClick = () => {
//     setAmount(balance);
//   };

//   // Fetch balance when component mounts
//   React.useEffect(() => {
//     fetchBalance();
//   }, []);

//   return (
//     <div className="p-4 bg-gray-800 rounded-lg shadow-md">
//       <h2 className="text-xl font-semibold text-white mb-4">Withdrawal</h2>
//       <div className="text-white mb-4">
//         <p className="mb-2">Current Balance: ${balance.toFixed(2)}</p>
//         <input
//           type="number"
//           value={amount}
//           onChange={handleChange}
//           placeholder="Enter amount"
//           className="w-full p-2 border border-gray-600 bg-gray-900 text-white rounded-md mb-2"
//         />
//         <button
//           onClick={handleMaxClick}
//           className="text-blue-500 hover:text-blue-700 mb-4"
//         >
//           Max
//         </button>
//       </div>
//       <button
//         onClick={handleWithdrawal}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//       >
//         Withdraw
//       </button>
//       {error && <p className="text-red-500 mt-4">{error}</p>}
//       {success && <p className="text-green-500 mt-4">{success}</p>}
//     </div>
//   );
// };

// export default Withdrawal;
