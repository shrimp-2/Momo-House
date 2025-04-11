import { v4 as uuidv4 } from 'uuid';
import CryptoJS from "crypto-js";
import { NavLink, useLocation } from 'react-router-dom';

function Payment() {
  let transaction_uuid = uuidv4();
  const location = useLocation();
  let total_amount = location.state.totalPrice;

  let Message = `total_amount=${total_amount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`;
  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-[90%] max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Payment</h2>
        <form
          className="space-y-5"
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input type="hidden" id="amount" name="amount" value={total_amount} required />
          <input type="hidden" id="tax_amount" name="tax_amount" value="0" required />
          <input type="hidden" id="total_amount" name="total_amount" value={total_amount} required />
          <input type="hidden" id="transaction_uuid" name="transaction_uuid" value={transaction_uuid} required />
          <input type="hidden" id="product_code" name="product_code" value="EPAYTEST" required />
          <input type="hidden" id="product_service_charge" name="product_service_charge" value="0" required />
          <input type="hidden" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
          <input type="hidden" id="success_url" name="success_url" value="https://momo-house-b4ve.vercel.app//success" required />
          <input type="hidden" id="failure_url" name="failure_url" value="https://momo-house-b4ve.vercel.app//failure" required />
          <input type="hidden" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
          <input type="hidden" id="signature" name="signature" value={hashInBase64} required />

          <div className="text-lg text-center font-medium text-gray-700">
            Total Price: <span className="text-green-600 font-bold">Rs {total_amount}</span>
          </div>

          <div className="flex justify-center space-x-4">
            <input
              type="submit"
              value="Pay Now"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow-md transition duration-300"
            />
            <NavLink
              to="/menu"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full shadow-md transition duration-300 text-center"
            >
              Cancel
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
