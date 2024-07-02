export default function PaymentSuccess({ searchParams: { amount } }) {
	return (
		<div className="py-[150px] max-w-6xl mx-auto p-10 text-center border m-10 rounded-md">
			<div className="mb-10">
				<h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
				<h2 className="text-2xl">You successfully sent</h2>

				<div className="bg-white p-2 rounded-md mt-5 text-4xl font-bold">
					${amount}
				</div>
			</div>
		</div>
	);
}
