import './styles.css'


const Banner: React.FC = () => {
  const data = [
    {
      id: 1,
      value: '23',
      unit: 'Hours'
    },
    {
      id: 2,
      value: '05',
      unit: 'Days'
    },
    {
      id: 3,
      value: '59',
      unit: 'Minutes'
    },
    {
      id: 4,
      value: '35',
      unit: 'Seconds'
    },
  ]



  return (

        <div className="container banner">
          <div className="categories-info">
            <p>
              Categories
            </p>

            <h3>
              Enhance Your Music Experience
            </h3>
            <div className="time">
              {data.map((item) => (
                <div key={item.id} className="time-item">
                  <span className="value">{item.value}</span>
                  <span className="unit">{item.unit}</span>
                </div>
              ))}
            </div>
            <button className="buy-now">Buy Now</button>
          </div>

          <div className="banner-image">
            <img src="/stereo-banner.png" alt="banner"  />
          </div>
        </div>

  )
}

export default Banner;