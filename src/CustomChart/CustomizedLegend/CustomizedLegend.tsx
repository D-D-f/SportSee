import "./CustomizedLegend.css";

const CustomizedLegend = (props: {payload: [] }) => {
    const {payload} = props;

    return (
        <div className="customLegend">
            <p className="customLegendP">Activité quotidienne</p>
            <ul className="customLegendUl">
                {payload.map((value: {payload: {name: string}}, index: number) => {
                    return <li className={`legendStyle-${index}`} key={index}><span style={{color: "var(--fontColorChart"}}>{value.payload.name}</span></li>
                })}
            </ul>
        </div>
    )
}

export default CustomizedLegend;