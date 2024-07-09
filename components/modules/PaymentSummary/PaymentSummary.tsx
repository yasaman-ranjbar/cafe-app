import TextField from "../TextField/TextField";

const PaymentSummary = () => {
  return (
    <div className="bg-lightGray px-6 py-8">
      <h2 className="text-xl font-semibold mb-10">PaymentSummary</h2>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <p className="text-sm font-normal text-gray">Subtotal</p>
          <p className="text-sm font-normal">89.09 USD</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-gray">Delivery</p>
          <p className="text-sm font-normal">50 USD</p>
        </div>
        <div className="my-4">
            <TextField variant="gray" bgVariant="primary-light" placeholder="Coupon Code" />
        </div>
        
      </div>
    </div>
  );
}

export default PaymentSummary