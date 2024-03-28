import Tag from "./Tag";

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Card({logo, company, resent, fetured,position,role,location,level,posted,contract,tools,languajes}) {
  return (
    <div className={`card ${resent ? 'new' : ''}`}>
        <div className="company-info">
            <div className="logo">
                <img src={logo} alt={company} />
            </div>
            <div className="info">
                <div className="util">
                    <strong className="name-company">{company}</strong>
                    {resent && <b className="indicator new">New!</b>}
                    {fetured && <b className="indicator featured">Featured</b>}
                </div>
                <h2 className="level">{position}</h2>
                <div className="date">
                    <span className="date-item posted">{posted}</span>
                    <span className="date-item contract">{contract}</span>
                    <span className="date-item location">{location}</span>
                </div>
            </div>
        </div>
        <div className="tools-company">
            {role && <Tag>{role}</Tag>}
            {level && <Tag>{level}</Tag>}
            {
                tools.map(tool => (
                    <Tag key={crypto.randomUUID()}>{tool}</Tag>
                ))
            }
            {
                languajes.map(languaje => (
                    <Tag key={crypto.randomUUID()}>{languaje}</Tag>
                ))
            }
        </div>
    </div>
  )
}
