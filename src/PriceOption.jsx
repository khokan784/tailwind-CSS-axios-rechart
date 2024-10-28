import PriceOption1 from "./PriceOption1";

const PriceOption = () => {
    const priceOption = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 30,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 group fitness class per week"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 50,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Unlimited group fitness classes",
                "1 personal training session per month",
                "Access to sauna"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 80,
            "features": [
                "Access to all gym facilities",
                "Locker room access with premium lockers",
                "Unlimited group fitness classes",
                "4 personal training sessions per month",
                "Access to sauna and steam room",
                "Free protein shakes and snacks",
                "Priority support"
            ]
        },
       
    ]

    return (
        <div className="m-12">
            <h2 className="test-xl">Best prices in the town</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    priceOption.map(option => <PriceOption1 key={option.id} option={option}></PriceOption1>)
                }
            </div>
        </div>
    );
};

export default PriceOption;