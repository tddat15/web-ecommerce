import './styles.css'
import SectionHeader from "../SectionHeader";

export default function NewArrival() {
    return (
        <section className="container new-arrival">
            <div className="header">
                <SectionHeader
                    label='Featured'
                    title='New Arrival'
                />
            </div>

            <div className="new-arrival-banner">
                <div className="box1">
                    <img src="/img_1.png" alt="img_1"/>
                </div>
                <div className="box2">
                    <img src="/img_2.png" alt="img_2"/>
                </div>
                <div className="box3">
                    <img src="/img_3.png" alt="img_3"/>
                </div>
                <div className="box4">
                    <img src="/img_4.png" alt="img_4"/>
                </div>
            </div>

        </section>
    )
}