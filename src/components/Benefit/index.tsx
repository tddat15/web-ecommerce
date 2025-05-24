import './styles.css'

const data = [
    {
        id: 1,
        title: 'FREE AND FAST DELIVERY',
        description: 'Free delivery for all orders over $140',
        img: '/delivery-icon.svg'
    },
    {
        id: 2,
        title: '24/7 CUSTOMER SERVICE',
        description: 'Friendly 24/7 customer support',
        img: '/customer-service-icon.svg'
    },
    {
        id: 3,
        title: 'MONEY BACK GUARANTEE',
        description: 'We reurn money within 30 days',
        img: '/guarantee.svg'
    }
]

const Benefit: React.FC = () => {

    return (
        <div className="container benefit">
            {data.map((item, index) => (
                <div key={index} className="benefit-item">
                    <div className="icon">
                        <img src={item.img} alt={item.title}/>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Benefit;